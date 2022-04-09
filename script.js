const sliderValue = document.querySelector("strong");
const inputSlider = document.querySelector("input");
const leftValue = document.querySelector("value-b")

inputSlider.oninput = (() =>{
      let value = inputSlider.value;
      sliderValue.textContent = value;
      sliderValue.style.left = (value) + "%";
      sliderValue.classList.add("show");
    })
inputSlider.onblur = (()=>{
      sliderValue.classList.remove("show");
    });