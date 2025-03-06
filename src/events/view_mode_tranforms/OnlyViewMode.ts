import { Transforms } from "../Transforms";
import Animation from "../Animation.module.scss";

export default class OnlyViewMode extends Transforms {
  static update() {
    this.elements.viewModeElements = document.querySelectorAll(".only-view-mode");
    this.elements.cardPaddings = document.querySelectorAll(".card-padding");
    this.elements.cardTransfer = document.querySelectorAll(".card-transfer");
  }

  static transforming() {
    this.elements.viewModeElements.forEach(el => el.classList.add(Animation.fadeTrans));
    this.elements.cardPaddings.forEach(el => {
      el.classList.remove(Animation.fadeTrans);
      el.classList.add(Animation.flexTrans);
    });
    this.elements.cardTransfer.forEach(el => el.classList.add(Animation.fadeTrans));

    setTimeout(() => {
      this.elements.viewModeElements.forEach(el => el.classList.remove(Animation.fadeTrans));
      this.elements.cardPaddings.forEach(el => el.classList.remove(Animation.flexTrans));
    }, 1700);
  }

  static start() {
    this.update();
    this.transforming();

    this.elements.viewModeElements.forEach(el => {
      el.classList.add(Animation.fadeOut);
      setTimeout(() => {
        el.classList.add(Animation.hidden);
      }, 1700);

    });

    this.elements.cardPaddings.forEach(el => {
      setTimeout(() => {
        el.classList.add(Animation.flexLess)
      }, 700);
    });

    this.elements.cardTransfer.forEach(el => {
      el.classList.add(Animation.fadeOut)
      setTimeout(() => {
        el.classList.add(Animation.hidden)
      }, 700);
    });
  }

  static destroy() {
    this.update();
    this.transforming();

    this.elements.viewModeElements.forEach(el => el.classList.remove(Animation.hidden));
    this.elements.cardTransfer.forEach(el => el.classList.remove(Animation.hidden));

    setTimeout(() => {
      this.elements.cardPaddings.forEach(el => el.classList.remove(Animation.flexLess));
    }, 1);

    setTimeout(() => {
        this.elements.viewModeElements.forEach(el => el.classList.remove(Animation.fadeOut));
        this.elements.cardTransfer.forEach(el => el.classList.remove(Animation.fadeOut));
      }, 1000);
  }
}