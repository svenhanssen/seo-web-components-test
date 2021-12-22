class CustomHeader extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: yellow;
        }
      </style>
      <a href="hello-world">Hello World</a>
    `;
  }
}

window.customElements.define("custom-header", CustomHeader);
