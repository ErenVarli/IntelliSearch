export function hideHomeMessage(isDisplay: boolean) {
  const hm = <HTMLFormElement>document.getElementById("introduction-text");
  if (isDisplay) {
    hm.style.display = "block";
  } else {
    hm.style.display = "false";
  }
}
