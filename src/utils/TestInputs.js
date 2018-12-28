export const testInputs = (id, number, direction, date_created, date_due, date_supply, comment) => {
  if (id !== "" && number !== "" && direction !== "" && date_created !== "" && date_due !== "" && date_supply !== ""
    && comment !== "") {
    return true;
  }
};