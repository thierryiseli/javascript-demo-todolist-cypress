import { LitElement, html, css } from "lit-element";

class HeaderView extends LitElement {
    static get styles() {
        return css``;
    }

    render() {
        return html`
            <a href="${document.baseURI}">Home</a>
            <a href="${document.baseURI}about">About</a>
        `;
    }
}

customElements.define('header-view', HeaderView);