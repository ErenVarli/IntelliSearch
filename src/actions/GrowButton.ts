export function GrowButton(isGrow: boolean) {
  let popup = <HTMLInputElement>document.getElementById("popup-button");
  if (isGrow) {
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.zIndex = "10";
  } else {
    popup.style.width = "120px";
    popup.style.height = "35px";
  }
}
