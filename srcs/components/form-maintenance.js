import { alert } from "./alert";
import { formChecklist } from "./form-checklist";
import { dropdownCompany } from "./dropdown-company";
import { dropdownRoutine } from "./dropdown-routine";

const _formMaintenance = {
  container: document.querySelector("#section-1"),

  trigger: {
    self: document.querySelector("#start"),
    title: document.querySelector("#start-title"),
    loading: document.querySelector("#start-loading"),
  },

  validate() {
    const companyIsValid = dropdownCompany.validate();
    const routineIsValid = dropdownRoutine.validate();

    if (!companyIsValid || !routineIsValid) {
      return false;
    }

    return true;
  },

  showLoading() {
    this.trigger.title.classList.add("hidden");
    this.trigger.loading.classList.remove("hidden");
  },

  hideLoading() {
    this.trigger.title.classList.remove("hidden");
    this.trigger.loading.classList.add("hidden");
  },
};

export const formMaintenance = {
  hide() {
    const container = _formMaintenance.container;
    container.classList.add("hidden");
  },

  show() {
    const container = _formMaintenance.container;
    container.classList.remove("hidden");
  },

  listen() {
    const { self: trigger } = _formMaintenance.trigger;

    dropdownCompany.listen();
    dropdownRoutine.listen();

    trigger.addEventListener("click", (e) => {
      const data = {
        companyId: dropdownCompany.getSelected(),
        routine: dropdownRoutine.getSelected(),
      };

      if (!_formMaintenance.validate()) {
        return;
      }

      _formMaintenance.showLoading();

      formChecklist
        .hydrate(data.companyId)
        .then(() => this.hide())
        .catch((error) => alert.setMessage(error.message))
        .finally(() => _formMaintenance.hideLoading());
    });
  },
};
