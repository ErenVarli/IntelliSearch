export function settingsSearchBar() {
  const TEXT = "Use the dynamic island to dorking.";
  const observer = new MutationObserver(() => {
    const searchBar = document.getElementById("gsc-i-id1") as HTMLInputElement;
    if (searchBar) {
      observer.disconnect();
      searchBar.placeholder = TEXT;
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}
