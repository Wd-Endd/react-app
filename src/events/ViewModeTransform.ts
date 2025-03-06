import Animation from "./Animation.module.scss";
import "./view_mode_tranforms/OnlyViewMode";
import OnlyViewMode from "./view_mode_tranforms/OnlyViewMode";

const elements: Record<string, NodeListOf<Element>> = {
  
};

export default class ViewModeTransform {

  static update() {
    // elements.viewModeElements = document.querySelectorAll(".only-view-mode");
    // elements.cardPaddings = document.querySelectorAll(".card-padding");
    elements.cards = document.querySelectorAll(".card-bg");
    // elements.cardTransfer = document.querySelectorAll(".card-transfer");
    elements.cardContainer = document.querySelectorAll(".card-container");
    elements.cardGallery = document.querySelectorAll(".card-gallery");
  }

  static transforming() {
    document.body.classList.add(Animation.blocking);
    // elements.viewModeElements.forEach(el => el.classList.add(Animation.fadeTrans));
    // elements.cardTransfer.forEach(el => el.classList.add(Animation.fadeTrans));
    // elements.cardPaddings.forEach(el => {
    //   el.classList.remove(Animation.fadeTrans);
    //   el.classList.add(Animation.flexTrans);
    // });

    setTimeout(() => {
      document.body.classList.remove(Animation.blocking);
      // elements.viewModeElements.forEach(el => el.classList.remove(Animation.fadeTrans));
      // elements.cardPaddings.forEach(el => el.classList.remove(Animation.flexTrans));
    }, 1700);
  }

  static start() { 
    this.update();
    this.transforming();

    OnlyViewMode.start();

    // elements.viewModeElements.forEach(el => {
    //   el.classList.add(Animation.fadeOut);
    //   setTimeout(() => {
    //     el.classList.add(Animation.hidden);
    //   }, 1700);

    // });

    // elements.cardPaddings.forEach(el => {
    //   setTimeout(() => {
    //     el.classList.add(Animation.flexLess)
    //   }, 700);
    // });

    // elements.cardTransfer.forEach(el => {
    //   el.classList.add(Animation.fadeOut)
    //   setTimeout(() => {
    //     el.classList.add(Animation.hidden)
    //   }, 700);
    // });

    elements.cardGallery.forEach(el => {
      setTimeout(() => {
        el.classList.add("overflow-auto")
      }, 700);
    });

    // elements.cards.forEach(el => {
    //   setTimeout(() => {
    //     el.classList.add(Animation.cardsFlexing)
    //   }, 1000);
    // });
  }

  static destroy() {
    this.update();
    this.transforming();

    OnlyViewMode.destroy();

    // elements.viewModeElements.forEach(el => el.classList.remove(Animation.hidden));
    // elements.cardTransfer.forEach(el => el.classList.remove(Animation.hidden));

    setTimeout(() => {
      // elements.cardPaddings.forEach(el => el.classList.remove(Animation.flexLess));

      // setTimeout(() => {
      //   // elements.viewModeElements.forEach(el => el.classList.remove(Animation.fadeOut));
      //   // elements.cardTransfer.forEach(el => el.classList.remove(Animation.fadeOut));
      // }, 1000);

      elements.cardGallery.forEach(el => {
        setTimeout(() => {
          el.classList.remove("overflow-auto")
        }, 1000);
      });
    }, 1);
  }
}