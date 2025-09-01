(function(){

  const sliders = [...document.querySelectorAll(".slider_body")];
  const arrowNext = document.querySelector("#next");
  const arrowBefore = document.querySelector("#before");
  let value;

  arrowNext.addEventListener("click", ()=>changePosition(1));
  arrowBefore.addEventListener("click", ()=>changePosition(-1));

  function changePosition(change){
    const currentElement = Number(document.querySelector(".slider_body--show").dataset.id);
    
    value = currentElement + change;

    if (value === 0 || value > sliders.length){
      value = value === 0 ? sliders.length : 1;
    }

    sliders[currentElement-1].classList.remove("slider_body--show");
    sliders[value-1].classList.add("slider_body--show");
  }
})();
