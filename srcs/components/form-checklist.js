import { picturePreview } from "./picture-preview";
import { getEquipment } from "../api/get-equipment";

const _formChecklist = {
  container: document.querySelector("#section-2"),

  task: {
    template: document.querySelector("#task-template"),
    container: document.querySelector("#task-container"),
  },

  buttons: {
    prev: document.querySelector("#prev"),
    next: document.querySelector("#next"),
    save: document.querySelector("#save"),
  },

  equipment: {
    name: document.querySelector("#equipment-name"),
    type: document.querySelector("#equipment-type"),
    code: document.querySelector("#equipment-code"),
    year: document.querySelector("#equipment-year"),
    place: document.querySelector("#equipment-place"),
    picture: document.querySelector("#equipment-picture"),
    counter: document.querySelector("#equipment-counter"),
  },

  fetchEquipment(companyId) {
    // add index return to fetch one company each time.
    return getEquipment(companyId, { once: true });
  },

  hide() {
    const container = _formChecklist.container;
    container.classList.add("hidden");
  },

  show() {
    const container = _formChecklist.container;
    container.classList.remove("hidden");
  },

  save() {
    const { save: trigger } = this.buttons;

    trigger.addEventListener("click", (event) => {
      console.log("Save");
    });
  },

  prev() {
    const { prev: trigger } = this.buttons;

    trigger.addEventListener("click", (event) => {
      console.log("Prev");
    });
  },

  next() {
    const { next: trigger } = this.buttons;

    trigger.addEventListener("click", (event) => {
      console.log("Next");
    });
  },

  listen() {
    this.prev();
    this.next();
    this.save();
    picturePreview.listen();
  },
};

export const formChecklist = {
  async hydrate(companyId) {
    try
    {
      const equipment = await _formChecklist.fetchEquipment(companyId);
      
      if (equipment.length < 1) {
        throw new Error(
          "Não existem equipamentos registrados para a empresa selecionada."
        );
      }

      _formChecklist.show();
      _formChecklist.listen();
    }
    catch (error)
    {
      throw error;
    }
  },
};
