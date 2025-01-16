export function GrowButton(isGrow: boolean) {
  let popup = <HTMLInputElement>document.getElementById("popup-button");
  if (isGrow) {
    if (popup != null){
        popup.style.width = "100vw";
        popup.style.height = "100vh";
        popup.style.zIndex = "10";
    }
  } else {
    popup.style.width = "120px";
    popup.style.height = "3.7vh";
  }
}
