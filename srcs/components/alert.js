import { dropdownCompany } from "./dropdownCompany";
import { dropdownRoutine } from "./dropdownRoutine";

export const alert = {
  elements: {
    container: document.querySelector("#alert"),
    message: document.querySelector("#alert-message"),
  },

  _toggleAria(attribute, element) {
    const state = element.getAttribute(attribute) === "true";
    element.setAttribute(attribute, !state);
  },

  checkMessages() {
    const alertMessage = this.elements.message;
    const companyMessage = dropdownCompany.elements.message;
    const routineMessage = dropdownRoutine.elements.message;

    if (!alertMessage.classList.contains("hidden")) {
      return true;
    }

    if (!companyMessage.classList.contains("hidden")) {
      return true;
    }

    if (!routineMessage.classList.contains("hidden")) {
      return true;
    }
  },

  isOpen() {
    const container = this.elements.container;
    const state = container.getAttribute("aria-hidden") === "true";

    return !state;
  },

  open() {
    this._toggleAria("aria-hidden", this.elements.container);
    this.elements.container.classList.remove("hidden");
  },

  close() {
    this._toggleAria("aria-hidden", this.elements.container);
    this.elements.container.classList.add("hidden");
  },

  toggle() {
    this.isOpen() ? this.close() : this.open();
  },

  setMessage(message) {
    const messageField = this.elements.message;
    const span = messageField.querySelector("span");

    if (!message) {
      messageField.classList.add("hidden");
      return;
    }

    span.textContent = message;
    messageField.classList.remove("hidden");
  },

  observe() {
    const elements = [
      alert.elements.message,
      dropdownCompany.elements.message,
      dropdownRoutine.elements.message,
    ];

    const observer = new MutationObserver(() => {
      alert.checkMessages() ? alert.open() : alert.close();
    });

    elements.forEach((element) => {
      observer.observe(element, {
        attributes: true,
        attributeFilter: ["class"],
      });
    });
  },
};
