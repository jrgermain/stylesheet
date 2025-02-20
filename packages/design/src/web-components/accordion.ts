import css from "@jrgermain/stylesheet/components/accordion.css?raw";

export class JrgAccordionElement extends HTMLElement {
  static get variants() {
    return ["normal", "subtle"];
  }

  static get observedAttributes() {
    return ["variant", "exclusive"];
  }

  #shadowRoot: ShadowRoot;
  #variant: string;
  #exclusive: boolean;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "open" });
    this.variant = "normal";
    this.exclusive = false;
  }

  get variant() {
    return this.#variant;
  }

  set variant(value: string) {
    if (value === "" || value == null) {
      this.#variant = "normal";
      this.render();
    } else if (JrgAccordionElement.variants.includes(value)) {
      this.#variant = value;
      this.render();
    } else {
      throw new TypeError(
        `Invalid value for 'variant': ${value}. Must be one of: ${JrgAccordionElement.variants.join(
          ", "
        )}.`
      );
    }
  }

  get exclusive() {
    return this.#exclusive;
  }

  set exclusive(value: unknown) {
    switch (value) {
      case "true":
      case true:
      case "":
        this.#exclusive = true;
        this.render();
        break;
      case "false":
      case false:
        this.#exclusive = false;
        this.render();
        break;
      default:
        throw new TypeError(
          `Invalid value for 'exclusive': ${value}. Must be true or false.`
        );
    }
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "variant":
        this.variant = newValue;
        break;
      case "exclusive":
        this.exclusive = newValue;
        break;
    }
  }

  render() {
    let className = "accordion";
    if (this.#variant !== "normal") {
      className += ` ${this.#variant}`;
    }

    const style = document.createElement("style");
    style.textContent = css;

    const accordion = document.createElement("div");
    accordion.className = className;

    const slot = document.createElement("slot");
    accordion.appendChild(slot);

    this.#shadowRoot?.replaceChildren(style, accordion);
  }
}

export class JrgAccordionItemElement extends HTMLElement {}

customElements.define("jrg-accordion", JrgAccordionElement);
customElements.define("jrg-accordion-item", JrgAccordionItemElement);
