import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text, Textarea, VStack } from '@chakra-ui/react';
import { gfmStyles } from 'components/MarkdownEditorDemo/githubStyles';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import gfm from 'remark-gfm';
import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

export const MarkdownEditorDemo = (): JSX.Element => {
  const [mdStr, setMdStr] = useState('## Minimum Markdown Editor');
  const [mainTime, setMainTime] = useState('');

  useEffect(() => {
    window.electronAPI.onReceiveMainTime((event, timeStr: string) => {
      setMainTime(timeStr);
    });

    return () => {
      window.electronAPI.removeOnReceiveMainTime();
    };
  }, []);

  return (
    <VStack spacing="20px">
      <Button colorScheme="teal" onClick={() => window.electronAPI.openDialog('Hello from React!')}>
        <Text>Open OS dialog via ipcMain</Text>
      </Button>
      <Text>{`This time is sent by main: ${mainTime}`}</Text>
      <Flex gridGap="20px">
        <Textarea
          css={gfmStyles}
          rounded="md"
          h="500px"
          w="500px"
          bg="gray.50"
          p="10px"
          resize="none"
          onChange={(event) => setMdStr(event.currentTarget.value)}
          value={mdStr}
        />

        <Box css={gfmStyles} rounded="md" h="500px" w="500px" bg="red.50" p="10px">
          <ReactMarkdown remarkPlugins={[gfm, remarkBreaks]} components={{ code: CodeBlock }}>
            {mdStr}
          </ReactMarkdown>
        </Box>
      </Flex>
    </VStack>
  );
};
