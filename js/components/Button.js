export default class Button {

  constructor(buttonText, clickFunc, disabled = false) {
    this.buttonText = buttonText;
    this.clickFunc = clickFunc;
    this.disabled = false;
    this.hidden = true;
  }

}
