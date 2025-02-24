import Animation from "./Animation.module.scss";

export default function ViewModeTransform(viewMode: boolean) {
  document.querySelectorAll("[data-onlyViewMode]").forEach(el => {
    const element = el as HTMLElement;
    element.classList.add(Animation.fadeOut);
    setTimeout(() => {
      element.classList.add(Animation.hidden);
      // document.querySelectorAll("data-cardAnchor").forEach(cardAnchor => {
      //   cardAnchor.classList.add("flex-1");
      // })
    }, 1000);
  });
}