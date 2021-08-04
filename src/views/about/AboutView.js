import { html, css } from 'lit';
import { ComponentBase } from '../../ComponentBase';

class AboutView extends ComponentBase {
  render() {
    return html`
    <style>
      #about {
        width: 100%;
        padding: var(--sl-spacing-x-small) 0;
        margin-bottom: var(--sl-spacing-large);
        text-align: center;
      }
    </style>
    <div id="about">
      <h1>About</h1>
      <p>Demo todo-list with basic javascript/es6</p>
    </div>
    `;
  }
}

customElements.define('about-view', AboutView)