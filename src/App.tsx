// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Flex } from '@chakra-ui/react';
import { MarkdownEditorDemo } from 'components/MarkdownEditorDemo';

const App = (): JSX.Element => (
  <>
    <Global styles={globalStyle} />
    <Flex align="center" justify="center" h="100vh" w="100vw">
      <MarkdownEditorDemo />
    </Flex>
  </>
);

export default App;
