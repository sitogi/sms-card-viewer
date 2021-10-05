import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { gfmStyles } from 'components/CardPreviewer/githubStyles';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import gfm from 'remark-gfm';
import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Card {
  id: string;
  boardId: string;
  mdStr: string;
  color: string;
  previewEnabled: boolean;
}

const CodeBlock: CodeComponent | ReactMarkdownNames = React.memo(({ inline, ...props }) => {
  const { className, children } = props;
  const match = /language-(\w+)/.exec(className || 'code');

  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  const codeContents = String(children);

  return (
    <SyntaxHighlighter style={darcula} language={match ? match[1] : undefined} PreTag="div">
      {codeContents.replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
});

export const CardPreviewer = (): JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    window.electronAPI.onReceiveSearchResults((event, results: Card[]) => {
      setCards(results);
    });

    return () => {
      window.electronAPI.removeOnReceiveMainTime();
    };
  }, []);

  return (
    <Box h="100%" w="100%" overflowY="auto" padding="20px">
      <Flex wrap="wrap" justify="space-around" gridGap="20px 0">
        {cards.map((card) => (
          <Box key={card.id} css={gfmStyles} rounded="md" h="500px" w="500px" bg={card.color} p="10px">
            <ReactMarkdown remarkPlugins={[gfm, remarkBreaks]} components={{ code: CodeBlock }}>
              {card.mdStr}
            </ReactMarkdown>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
