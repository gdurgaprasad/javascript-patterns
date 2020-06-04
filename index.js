//MODULE REVEALING PATTERN

const UiCtrl = (function() {
  const text = "Hello World";

  changeText = function() {
    const element = document.querySelector("h5");
    element.textContent = text;
  };

  return {
    text:text,
    changeText
  };
})();


UiCtrl.changeText()
console.log(UiCtrl.text);
