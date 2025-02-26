import { getCompany } from "../api/company";
import { dropdownCompany } from "./dropdownCompany";
import { dropdownRoutine } from "./dropdownRoutine";

dropdownCompany.elements.trigger.addEventListener("click", (e) => {
  const loading = dropdownCompany.elements.loading;

  if (dropdownRoutine.isOpen()) {
    dropdownRoutine.close();
  }

  dropdownCompany.toggle();

  getCompany({ once: true }).then((names) => {
    loading.classList.add("hidden");
    dropdownCompany.populate(names);
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
