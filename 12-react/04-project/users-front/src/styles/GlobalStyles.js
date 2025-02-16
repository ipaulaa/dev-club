import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
      all: unset;
      display: revert;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  html {
      -moz-text-size-adjust: none;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
  }

  a, button {
      cursor: revert;
  }

  ol, ul, menu, summary {
      list-style: none;
  }

  ol {
      counter-reset: revert;
  }

  img {
      max-inline-size: 100%;
      max-block-size: 100%;
  }

  table {
      border-collapse: collapse;
  }

  input, textarea {
      -webkit-user-select: auto;
  }

  textarea {
      white-space: revert;
  }

  meter {
      -webkit-appearance: revert;
      appearance: revert;
  }

  :where(pre) {
      all: revert;
      box-sizing: border-box;
  }

  ::placeholder {
      color: unset;
  }

  :where([hidden]) {
      display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
      -moz-user-modify: read-write;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
      -webkit-user-select: auto;
  }

  :where([draggable="true"]) {
      -webkit-user-drag: element;
  }

  :where(dialog:modal) {
      all: revert;
      box-sizing: border-box;
  }

  ::-webkit-details-marker {
      display: none;
  }
  
  body {
    font-family: "Roboto", sans-serif;
  }
`;
