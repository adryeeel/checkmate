import { dropdownCompany } from "./dropdownCompany";
import { dropdownRoutine } from "./dropdownRoutine";

const options = ["Apple", "Banana", "Cookie", "Damascus", "Emerald"];

dropdownCompany.populate(options);

dropdownCompany.elements.trigger.addEventListener("click", (e) => {
  if (dropdownRoutine.isOpen()) {
    dropdownRoutine.close();
  }

  dropdownCompany.toggle();
  e.preventDefault();
});

dropdownRoutine.elements.trigger.addEventListener("click", (e) => {
	if (dropdownCompany.isOpen()) {
    dropdownCompany.close();
  }

  dropdownRoutine.toggle();
  e.preventDefault();
});
