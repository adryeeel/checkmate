const structure = /* html */ `
  <link rel="stylesheet" href="srcs/style/main.css">
  <h1>Shadow</h1>
`;

export class Dropdown extends HTMLElement {
  #options;
  static observedAttributes = ["searchable"];
  #shadowRoot = this.attachShadow({ mode: "closed" });

  constructor(options) {
    super();
    this.#options = options;
  }

	#render() {
    this.#shadowRoot.innerHTML = structure;
	}

	connectedCallback() {
		this.#render();
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

	attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("dropdown-list", Dropdown);