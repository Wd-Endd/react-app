export function convertingViewMode() {
  document.querySelectorAll(".view-mode-only").forEach(el => {
    const element = el as HTMLElement;
    element.style.display = "";
    setTimeout(() => {
      element.style.opacity = "1";
    }, 500);
  });
}

export function convertingDefaultMode() {
  document.querySelectorAll(".view-mode-only").forEach(el => {
    const element = el as HTMLElement;
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.display = "none";
    }, 500);
  });
}