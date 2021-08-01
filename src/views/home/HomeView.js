import { LitElement, html, css } from "lit-element";

class HomeView extends LitElement {
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
                Todolist works!
            </h1>
        `;
    }
}

customElements.define('home-view', HomeView);