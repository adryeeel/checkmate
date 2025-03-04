import { getTasks } from "../api/get-tasks";
import { picturePreview } from "./picture-preview";
import { getEquipment } from "../api/get-equipment";

const _formChecklist = {
  container: document.querySelector("#section-2"),

  task: {
    empty: document.querySelector("#task-empty"),
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
    pictureEmpty: document.querySelector("#equipment-picture-empty"),
  },

  counter: {
    total: document.querySelector("#equipment-counter-total"),
    current: document.querySelector("#equipment-counter-current"),
  },

  async fetchTasks(equipmentId) {
    try {
      const data = await getTasks(equipmentId, { once: true });
      return data;
    }
    catch (error)
    {
      throw error;
    }
  },

  async fetchEquipment(companyId) {
    try {
      const data = await getEquipment(companyId, { once: true });
      
      if (data.length < 1) {
        throw new Error(
          "Não existem equipamentos registrados para a empresa selecionada."
        );
      }

      return data;
    }
    catch (error)
    {
      throw error;
    }
  },

  fillTasks(data) {
    const { empty, template, container } = _formChecklist.task;

    if (data.length < 1) {
      empty.classList.remove("hidden");
      return;
    }

    data.forEach((task, index) => {
      const checkbox = template.content.cloneNode(true).querySelector("div");
      const input = checkbox.querySelector("input");
      const labels = checkbox.querySelectorAll("label");
      const description = checkbox.querySelector("#task-description");

      if (index === data.length - 1) {
        checkbox.classList.remove("border-b-1");
      }

      input.id = `checkbox-${index}`;
      description.textContent = task.description;
      labels[0].setAttribute("for", `checkbox-${index}`);
      labels[1].setAttribute("for", `checkbox-${index}`);
      container.insertAdjacentElement("beforeend", checkbox);
    });
  },

  fillEquipment(data) {
    const { name, type, year, place, code, picture, pictureEmpty } = this.equipment;
    const { total } = this.counter;

    type.textContent = data.type;
    name.textContent = data.name;
    year.textContent = data.year;
    code.textContent = data.code;
    place.textContent = data.place;
    total.textContent = data.total;
    total.setAttribute("data-value", data.total);

    if (!data.image) {
      return;
    }

    picture.src = `https://checkmatebucket.s3.eu-west-3.amazonaws.com/${data.image}`;
    picture.classList.remove("hidden");
    pictureEmpty.classList.add("hidden");
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
      window.print();
    });
  },

  prev() {
    const { prev: trigger } = this.buttons;

    trigger.addEventListener("click", (event) => {
      console.log("Prev");
    });
  },

  next() {
    const { next: trigger, save } = this.buttons;
    const { current, total } = this.counter;

    trigger.addEventListener("click", (event) => {
      const totalValue = Number(total.getAttribute("data-value"));
      let currentValue = Number(current.getAttribute("data-value"));

      if (++currentValue === totalValue) {
        save.textContent = "Finalizar";
        return;
      }

      console.log(currentValue);

      current.textContent = currentValue;
      current.setAttribute("data-value", currentValue);
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
      const equipmentData = await _formChecklist.fetchEquipment(companyId);
      const taskData = await _formChecklist.fetchTasks(equipmentData.id);

      _formChecklist.fillEquipment(equipmentData);
      _formChecklist.fillTasks(taskData);
      _formChecklist.show();
      _formChecklist.listen();
    }
    catch (error)
    {
      throw error;
    }
  },
};
