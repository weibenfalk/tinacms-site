import { css } from 'styled-components';
import { colors, paragraphSizes, textSizes } from 'utils/variables';

const code = css`
  /*

    Name:       Base16 Atelier Sulphurpool Light
    Author:     Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)

    Prism template by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/prism/)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

  */
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier,
      monospace;
    font-size: ${textSizes[300].fontSize}px;
    line-height: ${textSizes[300].lineHeight}px;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: ${colors.grey01};
    color: ${colors.plum};
    border-radius: 3px;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    background: none;
    color: ${colors.darkBurntOrange};
    font-size: ${paragraphSizes[400].fontSize}px;
    line-height: ${paragraphSizes[400].lineHeight}px;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #898ea4;
  }

  .token.punctuation {
    color: #5e6687;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: #c76b29;
  }

  .token.property {
    color: #c08b30;
  }

  .token.tag {
    color: #DFB509;
  }

  .token.string {
    color: #74B06F;
  }

  .token.selector {
    color: #6679cc;
  }

  .token.attr-name {
    color: #B58AC9;
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #C2A7FB;
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #A87B2B;
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: #C2A7FB;
  }

  .token.placeholder,
  .token.variable {
    color: #DFB509;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #202746;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #c94922;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #c94922;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
   * http://prismjs.com/plugins/line-numbers/
   */
  .line-numbers .line-numbers-rows {
    border-right-color: #dfe2f1;
  }

  .line-numbers-rows > span:before {
    color: #979db4;
  }

  /* overrides color-values for the Line Highlight plugin
   * http://prismjs.com/plugins/line-highlight/
   */
  .line-highlight {
    background: rgba(107, 115, 148, 0.2);
    background: -webkit-linear-gradient(left, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
    background: linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
  }
`;

export default code;
