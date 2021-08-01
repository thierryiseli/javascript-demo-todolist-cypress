import { LitElement, html, css } from "lit-element";

class AboutView extends LitElement {
    static get styles() {
        return css`
            .title {
                font-size: 30px;
                text-decoration: underline;
            }
        `;
    }

    render() {
        return html`
            <h1 class="title">
                About
            </h1>
        `;
    }
}

customElements.define('about-view', AboutView);