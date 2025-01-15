export function displaySearchResults(isVisible: boolean): void {
  if (isVisible) {
    displayTrue();
  } else {
    displayFalse();
  }
}

function displayTrue(): void {
  const searchResults = document.getElementById(
    "gcse-search-bar"
  ) as HTMLFormElement;
  searchResults.style.display = "block";
}

function displayFalse(): void {
  const searchResults = document.getElementById(
    "gcse-search-bar"
  ) as HTMLFormElement;
  searchResults.style.display = "none";
}
