import { displaySearchResults } from "./DisplaySearchResults";

export function hidePopup() {
  let popup = <HTMLInputElement>document.getElementById("t-search-window");
  let introduction_text = <HTMLInputElement>(
    document.getElementById("introduction-text")
  );

  introduction_text.style.display = "none";
  popup.style.display = "none";

  displaySearchResults(true);
  return true;
}

export function showPopup() {
  let popup = <HTMLInputElement>document.getElementById("t-search-window");
  popup.style.display = "block";
  displaySearchResults(false);
}
