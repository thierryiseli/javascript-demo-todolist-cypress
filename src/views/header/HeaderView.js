import { html, css } from "lit";
import { ComponentBase } from "../../ComponentBase";

class HeaderView extends ComponentBase {
  static get properties() {
    return {
      theme: { type: String },
      version: { type: String }
    };
  }

  constructor() {
    super();
    this.theme = localStorage.getItem("theme");
    this.version = "";
    this.setTheme(this.theme);
  }

  async firstUpdated() {
      this.version = await this.getVersion();
  }

  render() {
    return html`
      <style>
        #header {
          width: 100%;
          padding: var(--sl-spacing-x-small) 0;
          box-shadow: var(--sl-shadow-x-small);
          margin-bottom: var(--sl-spacing-large);
          text-align: center;
        }

        #header-title {
          font-size: var(--sl-font-size-xx-large);
          margin-top: 10px;
        }

        a {
          display: inline-block;
          text-decoration: none;
          color: var(--sl-color-primary-700);
          padding: var(--sl-spacing-large);
          padding-top: 0;
        }

        a:visited {
          color: var(--sl-color-primary-700);
        }

        a:hover {
          color: var(--sl-color-primary-400);
        }

        .theme-mode-button::part(base) {
          padding: 0;
        }
      </style>
      <div id="header">
        <pwa-install-button>
          <sl-button type="default" size="small">
            <sl-icon slot="prefix" library="ionicons" name="download"></sl-icon>
            Install
          </sl-button>
        </pwa-install-button>
        <pwa-update-available>
          <sl-button type="default" size="small">
            <sl-icon slot="prefix" library="ionicons" name="sync"></sl-icon>
            Update
          </sl-button>
        </pwa-update-available>
        <span id="version">${this.version}</span>
        <br />
        <h1 id="header-title">todo-list-demo ${this.renderThemeButton()}</h1>        
        <a href="${document.baseURI}" @click="${this.closeDrawer}"> Home </a>
        <a href="${document.baseURI}about" @click="${this.closeDrawer}">
          About
        </a>
      </div>
    `;
  }

  async getVersion() {
    return await fetch(document.baseURI + "config.json")
      .then(res => res.json())
      .then(config => config.version);
  }

  renderThemeButton() {
    if (this.theme === "dark") {
      return html`<sl-icon-button
        class="theme-mode-button"
        library="ionicons"
        name="moon-outline"
        @click="${(e) => this.setTheme("light")}"
      ></sl-icon-button>`;
    } else {
      return html`<sl-icon-button
        class="theme-mode-button"
        library="ionicons"
        name="moon"
        @click="${(e) => this.setTheme("dark")}"
      ></sl-icon-button>`;
    }
  }

  setTheme(theme) {
    this.theme = theme;

    if (this.theme === "dark") {
      document.querySelector("body").classList.add("sl-theme-dark");
    } else {
      document.querySelector("body").classList.remove("sl-theme-dark");
    }

    localStorage.setItem("theme", this.theme);
  }
}

customElements.define("header-view", HeaderView);
