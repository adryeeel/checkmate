import { dropdownCompany } from "./dropdown-company";
import { dropdownRoutine } from "./dropdown-routine";

export const _alert = {
  elements: {
    container: document.querySelector("#alert"),
    message: document.querySelector("#alert-message"),
  },

  toggleAria(attribute, element) {
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
};

export const alert = {
  open() {
    const { container } = _alert.elements;

    _alert.toggleAria("aria-hidden", container);
    container.classList.remove("hidden");
  },

  close() {
    const { container } = _alert.elements;

    _alert.toggleAria("aria-hidden", container);
    container.classList.add("hidden");
  },

  setMessage(message) {
    const messageField = _alert.elements.message;
    const span = messageField.querySelector("span");

    if (!message) {
      messageField.classList.add("hidden");
      return;
    }

    span.textContent = message;
    messageField.classList.remove("hidden");
  },

  listen() {
    const elements = [
      _alert.elements.message,
      dropdownCompany.elements.message,
      dropdownRoutine.elements.message,
    ];

    const observer = new MutationObserver(() => {
      _alert.checkMessages() ? this.open() : this.close();
    });

    elements.forEach((element) => {
      observer.observe(element, {
        attributes: true,
        attributeFilter: ["class"],
      });
    });
  },
};
