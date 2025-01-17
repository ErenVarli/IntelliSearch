import { displaySearchResults } from "./DisplaySearchResults";
import { GrowButton } from "./GrowButton";

export async function displayPopup(display: boolean) {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  if (display) {
    GrowButton(true);
    let popup = <HTMLInputElement>document.getElementById("t-search-window");
    if (popup != null) {
      await sleep(200);
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
    GrowButton(false);
    displaySearchResults(true);
  }
}
