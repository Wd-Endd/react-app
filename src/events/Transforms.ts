
export abstract class Transforms {
  static elements: Record<string, NodeListOf<Element>> = {};
  static update(): void {
    
  }
  static transforming(): void {
    
  }

  static start(): void {
    this.update();
    this.transforming();

    
  }
  static destroy(): void {
    this.update();
    this.transforming();

    
  }
  
}