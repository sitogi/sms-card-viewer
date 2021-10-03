import { css } from '@emotion/react';

export const basicFont = css`
  font-size: 14px;
  font-family: 'Helvetica Neue', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo UI', 'メイリオ', 'Meiryo', Arial,
    sans-serif;
  color: #666;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const globalStyle = css`
  body {
    background-color: aliceblue;
    ${basicFont}
  }
`;
