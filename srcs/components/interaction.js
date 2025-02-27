import { alert } from "./alert";
import { getCompany } from "../api/company";
import { dropdownCompany } from "./dropdownCompany";
import { dropdownRoutine } from "./dropdownRoutine";

dropdownCompany.elements.trigger.addEventListener("click", (e) => {
  const loading = dropdownCompany.elements.loading;

  if (dropdownCompany.isFetching) {
    e.preventDefault();
    return;
  }

  if (dropdownRoutine.isOpen()) {
    dropdownRoutine.close();
  }

  dropdownCompany.isFetching = true;
  dropdownCompany.toggle();

  getCompany({ once: true })
    .then((names) => {
      console.log(names);
      loading.classList.add("hidden");
      dropdownCompany.populate(names);
    })
    .catch((error) => {
      console.error(error);
      dropdownCompany.elements.loading.classList.add("hidden");
      dropdownCompany.elements.optionEmpty.classList.remove("hidden");
      alert.setMessage(
        "Algo ocorreu mal ao buscar as empresas. Tente novamente."
      );
      alert.open();
    }).finally(() => {
      dropdownCompany.isFetching = false;
    });

  e.preventDefault();
});

dropdownRoutine.elements.trigger.addEventListener("click", (e) => {
  if (dropdownCompany.isOpen()) {
    dropdownCompany.close();
  }

  dropdownRoutine.toggle();
  e.preventDefault();
});

alert.observe();
