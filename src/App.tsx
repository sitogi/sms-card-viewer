// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Flex } from '@chakra-ui/react';
import { CardPreviewer } from 'components/CardPreviewer';

const App = (): JSX.Element => (
  <>
    <Global styles={globalStyle} />
    <Flex align="center" justify="center" h="100vh" w="100vw">
      <CardPreviewer />
    </Flex>
  </>
);

export default App;
