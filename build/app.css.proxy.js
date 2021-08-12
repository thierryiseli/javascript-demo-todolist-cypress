// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\r\n    background-color: var(--sl-panel-background-color);\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n.sl-theme-dark {\r\n    background: var(--sl-color-gray-950);\r\n    color: var(--sl-color-gray-100);\r\n}\r\n\r\n.sl-theme-dark {\r\n    --sl-shadow-x-small: 0 1px 0 #6b72800d;\r\n    --sl-shadow-small: 0 1px 2px #6b72801a;\r\n    --sl-shadow-medium: 0 2px 4px #6b72801a;\r\n    --sl-shadow-large: 0 2px 8px #6b72801a;\r\n    --sl-shadow-x-large: 0 4px 16px #6b72801a;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}