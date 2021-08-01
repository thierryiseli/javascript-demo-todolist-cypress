import { LitElement, html, css } from "lit-element";

class HeaderView extends LitElement {
    static get styles() {
        return css``;
    }

    render() {
        return html`
            <a href="/">Home</a>
            <a href="/about">About</a>
        `;
    }
}

customElements.define('header-view', HeaderView);