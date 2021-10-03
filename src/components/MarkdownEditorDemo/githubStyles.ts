import { css } from '@emotion/react';

export const gfmStyles = css`
  .octicon {
    display: inline-block !important;
    fill: currentColor !important;
    vertical-align: text-bottom !important;
  }

  .anchor {
    float: left !important;
    line-height: 1 !important;
    margin-left: -20px !important;
    padding-right: 4px !important;
  }

  .anchor:focus {
    outline: none !important;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: #1b1f23 !important;
    vertical-align: middle !important;
    visibility: hidden !important;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none !important;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible !important;
  }

  h1:hover .anchor .octicon-link:before,
  h2:hover .anchor .octicon-link:before,
  h3:hover .anchor .octicon-link:before,
  h4:hover .anchor .octicon-link:before,
  h5:hover .anchor .octicon-link:before,
  h6:hover .anchor .octicon-link:before {
    width: 16px !important;
    height: 16px !important;
    content: ' ' !important;
    display: inline-block !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E") !important;
  }
   {
    -ms-text-size-adjust: 100% !important;
    -webkit-text-size-adjust: 100% !important;
    line-height: 1.5 !important;
    color: #24292e !important;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji,
      Segoe UI Emoji !important;
    font-size: 16px !important;
    word-wrap: break-word !important;
  }

  details {
    display: block !important;
  }

  summary {
    display: list-item !important;
  }

  a {
    background-color: initial !important;
  }

  a:active,
  a:hover {
    outline-width: 0 !important;
  }

  strong {
    font-weight: inherit !important;
  }

  h1 {
    font-size: 2em !important;
    margin: 0.67em 0 !important;
  }

  img {
    border-style: none !important;
  }

  kbd,
  pre {
    font-family: monospace, monospace !important;
    font-size: 1em !important;
  }

  hr {
    box-sizing: initial !important;
    height: 0 !important;
    overflow: visible !important;
  }

  input {
    font: inherit !important;
    margin: 0 !important;
  }

  input {
    overflow: visible !important;
  }

  [type='checkbox'] {
    box-sizing: border-box !important;
    padding: 0 !important;
  }

  * {
    box-sizing: border-box !important;
  }

  input {
    font-family: inherit !important;
    font-size: inherit !important;
    line-height: inherit !important;
  }

  a {
    color: #0366d6 !important;
    text-decoration: none !important;
  }

  a:hover {
    text-decoration: underline !important;
  }

  strong {
    font-weight: 600 !important;
  }

  hr {
    height: 0 !important;
    margin: 15px 0 !important;
    overflow: hidden !important;
    background: transparent !important;
    border: 0 !important;
    border-bottom: 1px solid #dfe2e5 !important;
  }

  hr:after,
  hr:before {
    display: table !important;
    content: '' !important;
  }

  hr:after {
    clear: both !important;
  }

  table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
  }

  td,
  th {
    padding: 0 !important;
  }

  details summary {
    cursor: pointer !important;
  }

  kbd {
    display: inline-block !important;
    padding: 3px 5px !important;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
    line-height: 10px !important;
    color: #444d56 !important;
    vertical-align: middle !important;
    background-color: #fafbfc !important;
    border: 1px solid #d1d5da !important;
    border-radius: 3px !important;
    box-shadow: inset 0 -1px 0 #d1d5da !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  h1 {
    font-size: 32px !important;
  }

  h1,
  h2 {
    font-weight: 600 !important;
  }

  h2 {
    font-size: 24px !important;
  }

  h3 {
    font-size: 20px !important;
  }

  h3,
  h4 {
    font-weight: 600 !important;
  }

  h4 {
    font-size: 16px !important;
  }

  h5 {
    font-size: 14px !important;
  }

  h5,
  h6 {
    font-weight: 600 !important;
  }

  h6 {
    font-size: 12px !important;
  }

  p {
    margin-top: 0 !important;
    margin-bottom: 10px !important;
  }

  blockquote {
    margin: 0 !important;
  }

  ol,
  ul {
    padding-left: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman !important;
  }

  ol ol ol,
  ol ul ol,
  ul ol ol,
  ul ul ol {
    list-style-type: lower-alpha !important;
  }

  dd {
    margin-left: 0 !important;
  }

  code,
  pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
    font-size: 12px !important;
  }

  pre {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    margin: 0 !important;
    -webkit-appearance: none !important;
    appearance: none !important;
  }

  :checked + .radio-label {
    position: relative !important;
    z-index: 1 !important;
    border-color: #0366d6;
  }

  .border {
    border: 1px solid #e1e4e8 !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-bottom {
    border-bottom: 1px solid #e1e4e8 !important;
  }

  .rounded-1 {
    border-radius: 3px !important;
  }

  .bg-white {
    background-color: #fff !important;
  }

  .bg-gray-light {
    background-color: #fafbfc !important;
  }

  .text-gray-light {
    color: #6a737d !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .pl-1 {
    padding-left: 4px !important;
  }

  .pl-2 {
    padding-left: 8px !important;
  }

  .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .pl-3,
  .px-3 {
    padding-left: 16px !important;
  }

  .px-3 {
    padding-right: 16px !important;
  }

  .pl-4 {
    padding-left: 24px !important;
  }

  .pl-5 {
    padding-left: 32px !important;
  }

  .pl-6 {
    padding-left: 40px !important;
  }

  .f6 {
    font-size: 12px !important;
  }

  .lh-condensed {
    line-height: 1.25 !important;
  }

  .text-bold {
    font-weight: 600 !important;
  }

  .pl-c {
    color: #6a737d !important;
  }

  .pl-c1,
  .pl-s .pl-v {
    color: #005cc5 !important;
  }

  .pl-e,
  .pl-en {
    color: #6f42c1 !important;
  }

  .pl-s .pl-s1,
  .pl-smi {
    color: #24292e !important;
  }

  .pl-ent {
    color: #22863a !important;
  }

  .pl-k {
    color: #d73a49 !important;
  }

  .pl-pds,
  .pl-s,
  .pl-s .pl-pse .pl-s1,
  .pl-sr,
  .pl-sr .pl-cce,
  .pl-sr .pl-sra,
  .pl-sr .pl-sre {
    color: #032f62 !important;
  }

  .pl-smw,
  .pl-v {
    color: #e36209 !important;
  }

  .pl-bu {
    color: #b31d28 !important;
  }

  .pl-ii {
    color: #fafbfc !important;
    background-color: #b31d28 !important;
  }

  .pl-c2 {
    color: #fafbfc !important;
    background-color: #d73a49 !important;
  }

  .pl-c2:before {
    content: '^M' !important;
  }

  .pl-sr .pl-cce {
    font-weight: 700 !important;
    color: #22863a !important;
  }

  .pl-ml {
    color: #735c0f !important;
  }

  .pl-mh,
  .pl-mh .pl-en,
  .pl-ms {
    font-weight: 700 !important;
    color: #005cc5 !important;
  }

  .pl-mi {
    font-style: italic !important;
    color: #24292e !important;
  }

  .pl-mb {
    font-weight: 700 !important;
    color: #24292e !important;
  }

  .pl-md {
    color: #b31d28 !important;
    background-color: #ffeef0 !important;
  }

  .pl-mi1 {
    color: #22863a !important;
    background-color: #f0fff4 !important;
  }

  .pl-mc {
    color: #e36209 !important;
    background-color: #ffebda !important;
  }

  .pl-mi2 {
    color: #f6f8fa !important;
    background-color: #005cc5 !important;
  }

  .pl-mdr {
    font-weight: 700 !important;
    color: #6f42c1 !important;
  }

  .pl-ba {
    color: #586069 !important;
  }

  .pl-sg {
    color: #959da5 !important;
  }

  .pl-corl {
    text-decoration: underline !important;
    color: #032f62 !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .my-2 {
    margin-bottom: 8px !important;
  }

  .my-2 {
    margin-top: 8px !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .pl-1 {
    padding-left: 4px !important;
  }

  .pl-2 {
    padding-left: 8px !important;
  }

  .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .pl-3 {
    padding-left: 16px !important;
  }

  .pl-4 {
    padding-left: 24px !important;
  }

  .pl-5 {
    padding-left: 32px !important;
  }

  .pl-6 {
    padding-left: 40px !important;
  }

  .pl-7 {
    padding-left: 48px !important;
  }

  .pl-8 {
    padding-left: 64px !important;
  }

  .pl-9 {
    padding-left: 80px !important;
  }

  .pl-10 {
    padding-left: 96px !important;
  }

  .pl-11 {
    padding-left: 112px !important;
  }

  .pl-12 {
    padding-left: 128px !important;
  }

  hr {
    border-bottom-color: #eee !important;
  }

  kbd {
    display: inline-block !important;
    padding: 3px 5px !important;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
    line-height: 10px !important;
    color: #444d56 !important;
    vertical-align: middle !important;
    background-color: #fafbfc !important;
    border: 1px solid #d1d5da !important;
    border-radius: 3px !important;
    box-shadow: inset 0 -1px 0 #d1d5da !important;
  }

  .wiki:after,
  .wiki:before {
    display: table !important;
    content: '' !important;
  }

  .wiki:after {
    clear: both !important;
  }

  > :first-of-type {
    margin-top: 0 !important;
  }

  > :last-child {
    margin-bottom: 0 !important;
  }

  a:not([href]) {
    color: inherit !important;
    text-decoration: none !important;
  }

  blockquote,
  details,
  dl,
  ol,
  p,
  pre,
  table,
  ul {
    margin-top: 0 !important;
    margin-bottom: 16px !important;
  }

  hr {
    height: 0.25em !important;
    padding: 0 !important;
    margin: 24px 0 !important;
    background-color: #e1e4e8 !important;
    border: 0 !important;
  }

  blockquote {
    padding: 0 1em !important;
    color: #6a737d !important;
    border-left: 0.25em solid #dfe2e5 !important;
  }

  blockquote > :first-of-type {
    margin-top: 0 !important;
  }

  blockquote > :last-child {
    margin-bottom: 0 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px !important;
    margin-bottom: 16px !important;
    font-weight: 600 !important;
    line-height: 1.25 !important;
  }

  h1 {
    font-size: 2em !important;
  }

  h1,
  h2 {
    padding-bottom: 0.3em !important;
    border-bottom: 1px solid #eaecef !important;
    margin-bottom: 20px !important;
  }

  h2 {
    font-size: 1.5em !important;
  }

  h3 {
    font-size: 1.25em !important;
  }

  h4 {
    font-size: 1em !important;
  }

  h5 {
    font-size: 0.875em !important;
  }

  h6 {
    font-size: 0.85em !important;
    color: #6a737d !important;
  }

  ol,
  ul {
    padding-left: 2em !important;
  }

  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  li {
    word-break: break-all !important;
  }

  li > p {
    margin-top: 16px !important;
  }

  li + li {
    margin-top: 0.25em !important;
  }

  dl {
    padding: 0 !important;
  }

  dl dt {
    padding: 0 !important;
    margin-top: 16px !important;
    font-size: 1em !important;
    font-style: italic !important;
    font-weight: 600 !important;
  }

  dl dd {
    padding: 0 16px !important;
    margin-bottom: 16px !important;
  }

  table {
    display: block !important;
    width: 100% !important;
    overflow-x: auto; !important;
    ::-webkit-scrollbar {
      height: 7px;
    }

    ::-webkit-scrollbar-track {
      background: #fff;
      border: none;
      border-radius: 10px;
      box-shadow: inset 0 0 2px #777;
    }

    ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
      box-shadow: none;
    }
  }

  table th {
    font-weight: 600 !important;
  }

  table td,
  table th {
    padding: 6px 13px !important;
    border: 1px solid #dfe2e5 !important;
    white-space: nowrap;
  }

  table tr {
    background-color: #fff !important;
    border-top: 1px solid #c6cbd1 !important;
  }

  table tr:nth-of-type(2n) {
    background-color: #f6f8fa !important;
  }

  img {
    max-width: 100% !important;
    box-sizing: initial !important;
    background-color: #fff !important;
  }

  img[align='right'] {
    padding-left: 20px !important;
  }

  img[align='left'] {
    padding-right: 20px !important;
  }

  code {
    margin: 0 !important;
    font-size: 85% !important;
    border-radius: 3px !important;
    background-color: rgb(235, 235, 235);
    padding: 2px 3px;
  }

  pre {
    word-wrap: normal !important;
  }

  pre > code {
    padding: 0 !important;
    margin: 0 !important;
    font-size: 100% !important;
    word-break: normal !important;
    white-space: pre !important;
    background: transparent !important;
    border: 0 !important;
  }

  .highlight {
    margin-bottom: 16px !important;
  }

  .highlight pre {
    margin-bottom: 0 !important;
    word-break: normal !important;
  }

  .highlight pre,
  pre div {
    overflow: auto !important;
    font-size: 14px !important;
    line-height: 1.45 !important;
    border-radius: 5px;
    ::-webkit-scrollbar {
      height: 7px;
    }

    ::-webkit-scrollbar-track {
      background: #fff;
      border: none;
      box-shadow: inset 0 0 2px #777;
    }

    ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
      box-shadow: none;
    }
  }

  pre code {
    display: inline !important;
    max-width: initial !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: visible !important;
    line-height: inherit !important;
    word-wrap: normal !important;
    background-color: initial !important;
    border: 0 !important;
    font-size: 14px !important;
  }

  .commit-tease-sha {
    display: inline-block !important;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
    font-size: 90% !important;
    color: #444d56 !important;
  }

  .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5 !important;
    border-color: #005cc5 !important;
  }

  .blob-wrapper {
    overflow-x: auto !important;
    overflow-y: hidden !important;
  }

  .blob-wrapper-embedded {
    max-height: 240px !important;
    overflow-y: auto !important;
  }

  .blob-num {
    width: 1% !important;
    min-width: 50px !important;
    padding-right: 10px !important;
    padding-left: 10px !important;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
    font-size: 12px !important;
    line-height: 20px !important;
    color: rgba(27, 31, 35, 0.3) !important;
    text-align: right !important;
    white-space: nowrap !important;
    vertical-align: top !important;
    cursor: pointer !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }

  .blob-num:hover {
    color: rgba(27, 31, 35, 0.6) !important;
  }

  .blob-num:before {
    content: attr(data-line-number) !important;
  }

  .blob-code {
    position: relative !important;
    padding-right: 10px !important;
    padding-left: 10px !important;
    line-height: 20px !important;
    vertical-align: top !important;
  }

  .blob-code-inner {
    overflow: visible !important;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
    font-size: 12px !important;
    color: #24292e !important;
    word-wrap: normal !important;
    white-space: pre !important;
  }

  .pl-token.active,
  .pl-token:hover {
    cursor: pointer !important;
    background: #ffea7f !important;
  }

  .tab-size[data-tab-size='1'] {
    -moz-tab-size: 1 !important;
    tab-size: 1 !important;
  }

  .tab-size[data-tab-size='2'] {
    -moz-tab-size: 2 !important;
    tab-size: 2 !important;
  }

  .tab-size[data-tab-size='3'] {
    -moz-tab-size: 3 !important;
    tab-size: 3 !important;
  }

  .tab-size[data-tab-size='4'] {
    -moz-tab-size: 4 !important;
    tab-size: 4 !important;
  }

  .tab-size[data-tab-size='5'] {
    -moz-tab-size: 5 !important;
    tab-size: 5 !important;
  }

  .tab-size[data-tab-size='6'] {
    -moz-tab-size: 6 !important;
    tab-size: 6 !important;
  }

  .tab-size[data-tab-size='7'] {
    -moz-tab-size: 7 !important;
    tab-size: 7 !important;
  }

  .tab-size[data-tab-size='8'] {
    -moz-tab-size: 8 !important;
    tab-size: 8 !important;
  }

  .tab-size[data-tab-size='9'] {
    -moz-tab-size: 9 !important;
    tab-size: 9 !important;
  }

  .tab-size[data-tab-size='10'] {
    -moz-tab-size: 10 !important;
    tab-size: 10 !important;
  }

  .tab-size[data-tab-size='11'] {
    -moz-tab-size: 11 !important;
    tab-size: 11 !important;
  }

  .tab-size[data-tab-size='12'] {
    -moz-tab-size: 12 !important;
    tab-size: 12 !important;
  }

  .task-list-item {
    list-style-type: none !important;
  }

  .task-list-item + .task-list-item {
    margin-top: 3px !important;
  }

  .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em !important;
    vertical-align: middle !important;
  }
`;
