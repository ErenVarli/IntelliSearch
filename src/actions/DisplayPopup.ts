import { displaySearchResults } from "./DisplaySearchResults";

export function displayPopup(display: boolean) {
  if (display) {
    let popup = <HTMLInputElement>document.getElementById("t-search-window");
    if (popup != null) {
      let introduction_text = <HTMLInputElement>(
        document.getElementById("introduction-text")
      );
      introduction_text.style.display = "block";
      popup.style.display = "block";
    }
    displaySearchResults(false);
  } else {
    let popup = <HTMLInputElement>document.getElementById("t-search-window");
    if (popup != null) {
      let introduction_text = <HTMLInputElement>(
        document.getElementById("introduction-text")
      );
      introduction_text.style.display = "none";
      popup.style.display = "none";
      displaySearchResults(true);
    }
    displaySearchResults(true);
  }
}
