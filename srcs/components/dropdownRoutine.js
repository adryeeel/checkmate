export const dropdownRoutine = {
  elements: {
    container: document.querySelector("#dropdown-routine"),
    list: document.querySelector("#dropdown-routine-options"),
    trigger: document.querySelector("#dropdown-routine-trigger"),
    selected: document.querySelector("#dropdown-routine-selected"),
    options: document.querySelectorAll("#dropdown-routine-options > li"),
  },

  _toggleAria(attribute, element) {
    const state = element.getAttribute(attribute) === "true";
    element.setAttribute(attribute, !state);
  },

  _transitionOpen() {
    const container = this.elements.container;

    const transition = {
      from: ["opacity-0", "scale-95"],
      to: ["opacity-100", "scale-100"],
      config: ["transition", "ease-out", "duration-100"],
    };

    container.classList.remove("invisible");
    container.classList.add(...transition.from);

    container.offsetHeight;

    container.classList.add(...transition.config);
    container.classList.add(...transition.to);
    container.classList.remove(...transition.from);

    container.addEventListener(
      "transitionend",
      () => {
        container.classList.remove(...transition.to);
        container.classList.remove(...transition.config);
      },
      { once: true }
    );
  },

  _transitionClose() {
    const container = this.elements.container;

    const transition = {
      from: ["opacity-100", "scale-100"],
      to: ["opacity-0", "scale-95"],
      config: ["transition", "ease-in", "duration-75"],
    };

    container.classList.add(...transition.config);
    container.classList.add(...transition.to);

    container.addEventListener(
      "transitionend",
      () => {
        container.classList.add("invisible");
        container.classList.remove(...transition.to);
        container.classList.remove(...transition.config);
      },
      { once: true }
    );
  },

  _select(index) {
    const options = this.elements.options;
    const display = this.elements.selected;

    display.setAttribute("aria-labelledby", options[index].id);
    display.innerText = options[index].innerText;
  },

  _navigation() {
    let index = 0;
    const list = this.elements.list;
    const options = this.elements.options;

    list.addEventListener(
      "click",
      (e) => {
        const options = Array.from(this.elements.options);
        const index = options.indexOf(e.target);

        this._select(index);
      },
      { once: true }
    );

    list.addEventListener(
      "focus",
      (e) => {
        options[0].focus();
      },
      { once: true }
    );

    list.addEventListener("keydown", (e) => {
      if (e.key == "ArrowUp" && index > 0) {
        index--;
      }

      if (e.key == "ArrowDown" && index < options.length - 1) {
        index++;
      }

      if (e.key == "Enter") {
        this._select(index);
        this.close();
      }

      if (e.key == "Escape") {
        this.close();
      }

      options[index].focus();
      e.preventDefault();
    });
  },

  isOpen() {
    const container = this.elements.container;
    const state = container.getAttribute("aria-hidden") === "true";

    return !state;
  },

  open() {
    this._toggleAria("aria-expanded", this.elements.trigger);
    this._toggleAria("aria-hidden", this.elements.container);

    this._transitionOpen();
    this._navigation();
  },

  close() {
    this._toggleAria("aria-expanded", this.elements.trigger);
    this._toggleAria("aria-hidden", this.elements.container);

    this._transitionClose();
  },

  toggle() {
    this.isOpen() ? this.close() : this.open();
  },
};
