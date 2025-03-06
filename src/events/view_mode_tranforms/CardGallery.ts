import { Transforms } from "../Transforms";
import Animation from "../Animation.module.scss";

export default class OnlyViewMode extends Transforms {
  static update() {
    
  }

  static transforming() {
    
  }

  static start() {
    this.update();
    this.transforming();

    
  }

  static destroy() {
    this.update();
    this.transforming();

    
  }
}