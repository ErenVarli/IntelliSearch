export function clearAllFilters() {
    (<HTMLInputElement>document.getElementById("gsc-i-id1")).value = "";
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
      if (input.type === "text" || input.type === "date") {
        input.value = "";
      } else if (input.type === "checkbox") {
        input.checked = false;
      }
    });
  }
  