export const dropdownCompany = {
  isFetching: false,

  elements: {
    container: document.querySelector("#dropdown-company"),
    list: document.querySelector("#dropdown-company-options"),
    search: document.querySelector("#dropdown-company-search"),
    loading: document.querySelector("#company-option-loading"),
    message: document.querySelector("#dropdown-company-message"),
    trigger: document.querySelector("#dropdown-company-trigger"),
    selected: document.querySelector("#dropdown-company-selected"),
    optionEmpty: document.querySelector("#company-option-empty"),
    options: document.getElementsByClassName("dropdown-company-option"),
    optionTemplate: document.querySelector("#dropdown-company-option-template"),
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
    const value = options[index].textContent.trim();

    display.setAttribute("aria-labelledby", options[index].id);
    display.setAttribute("data-value", value.toLowerCase());
    display.textContent = value;

    this.validate();
  },

  _navigation() {
    let index = 0;
    const list = this.elements.list;
    const options = this.elements.options;

    list.addEventListener(
      "click",
      (e) => {
        const li = e.target.closest("li");

        if (!li) {
          return;
        }

        const options = Array.from(this.elements.options);
        const index = options.indexOf(li);

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

  _search() {
    const input = this.elements.search;

    input.addEventListener("input", (e) => {
      let hasResults = false;
      const value = input.value.toLowerCase();
      const options = Array.from(this.elements.options);

      options.forEach((option) => {
        const text = option.textContent.toLowerCase();

        if (text.includes(value)) {
          this.elements.optionEmpty.classList.add("hidden");
          option.style.display = "block";
          hasResults = true;
          return;
        }
        option.style.display = "none";
      });

      if (!hasResults) {
        this.elements.optionEmpty.classList.remove("hidden");
      }
    });
  },

  _valid() {
    const borderValid = ["border-1", "border-gray-300", "dark:border-gray-700"];
    const borderInvalid = ["border-2", "border-rose-300", "dark:border-red-900"];

    this.elements.trigger.classList.remove(...borderInvalid);
    this.elements.trigger.classList.add(...borderValid);
  },

  _invalid() {
    const borderValid = ["border-1", "border-gray-300", "dark:border-gray-700"];
    const borderInvalid = ["border-2", "border-rose-300", "dark:border-red-900"];

    this.elements.trigger.classList.remove(...borderValid);
    this.elements.trigger.classList.add(...borderInvalid);
  },

  populate(options) {
    const { list, optionTemplate } = this.elements;

    options.forEach((content, index) => {
      const element = optionTemplate.content
        .cloneNode(true)
        .querySelector("li");
      element.id = `company-option-${index}`;
      element.textContent = content;

      list.insertAdjacentElement("beforeend", element);
    });
  },

  getSelected() {
    return this.elements.selected.getAttribute("data-value");
  },

  validate() {
    const { message } = this.elements;
    const isSelected = this.getSelected();

    if (!isSelected) {
      this._invalid();
      message.classList.remove("hidden");
      return false;
    }

    this._valid();
    message.classList.add("hidden");
    return true;
  },

  isOpen() {
    const container = this.elements.container;
    const state = container.getAttribute("aria-hidden") === "true";

    return !state;
  },

  open() {
    this._toggleAria("aria-expanded", this.elements.search);
    this._toggleAria("aria-expanded", this.elements.trigger);
    this._toggleAria("aria-hidden", this.elements.container);

    this._transitionOpen();
    this._navigation();
    this._search();
  },

  close() {
    this._toggleAria("aria-expanded", this.elements.search);
    this._toggleAria("aria-expanded", this.elements.trigger);
    this._toggleAria("aria-hidden", this.elements.container);

    this._transitionClose();
  },

  toggle() {
    this.isOpen() ? this.close() : this.open();
  },
};
