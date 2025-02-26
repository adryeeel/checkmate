import { dropdownCompany } from "../components/dropdownCompany";
import { dropdownRoutine } from "../components/dropdownRoutine";

const trigger = document.querySelector("button#start");

trigger.addEventListener("click", (e) => {
  const companyIsValid = dropdownCompany.validate();
  const routineIsValid = dropdownRoutine.validate();

  if (!companyIsValid || !routineIsValid) {
    return;
  }

  const data = {
    company: dropdownCompany.getSelected(),
    routine: dropdownRoutine.getSelected(),
  };
});

