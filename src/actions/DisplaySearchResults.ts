export function displaySearchResults(isVisible: boolean): void {
  if (isVisible) {
    displayTrue();
  } else {
    displayFalse();
  }
}

function displayTrue(): void {
  const searchResults = document.getElementsByClassName("gsc-results-wrapper-nooverlay") as HTMLCollectionOf<HTMLElement>;
  Array.from(searchResults).forEach(result => {
    result.style.display = "block";
  });
}

function displayFalse(): void {
  const searchResults = document.getElementsByClassName("gsc-results-wrapper-nooverlay") as HTMLCollectionOf<HTMLElement>;
  Array.from(searchResults).forEach(result => {
    result.style.display = "none";
  });
}