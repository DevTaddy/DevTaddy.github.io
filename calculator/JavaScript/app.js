document.addEventListener(`DOMContentLoaded`, function () {
  //Variables
  const calculator = document.querySelector(`.calculator`);
  const result = document.querySelector(`p`);
  //Main add event listener
  calculator.addEventListener(`click`, function (e) {
    //Clear all entry
    if (e.target.className === `all-clear`) {
      result.textContent = ``;
      result.style.padding = `1.25em`;
    }
    //Delete single entry
    if (e.target.className === `delete-entry`) {
      if (result.textContent.length === 1) result.style.padding = `1.25em`;
      result.textContent = result.textContent.slice(0, -1);
    }
    //Numbers
    if (e.target.className === `numbers`) result.style.padding = `0.5em`;
    if (e.target.getAttribute(`id`) === `one`) result.textContent += 1;
    if (e.target.getAttribute(`id`) === `two`) result.textContent += 2;
    if (e.target.getAttribute(`id`) === `three`) result.textContent += 3;
    if (e.target.getAttribute(`id`) === `four`) result.textContent += 4;
    if (e.target.getAttribute(`id`) === `five`) result.textContent += 5;
    if (e.target.getAttribute(`id`) === `six`) result.textContent += 6;
    if (e.target.getAttribute(`id`) === `seven`) result.textContent += 7;
    if (e.target.getAttribute(`id`) === `eight`) result.textContent += 8;
    if (e.target.getAttribute(`id`) === `nine`) result.textContent += 9;
    if (e.target.getAttribute(`id`) === `zero`) result.textContent += 0;
    //A point that can be only inputted once between operations
    if (e.target.getAttribute(`id`) === `dot`) {
      if (result.textContent.charAt(result.textContent.length - 1) === `.`)
        return;
      else result.textContent += `.`;
    }
    //Operations
    if (e.target.className === `operations`) {
      if (
        result.textContent.length !== 0 &&
        result.textContent.charAt(result.textContent.length - 1) !== `+` &&
        result.textContent.charAt(result.textContent.length - 1) !== `-` &&
        result.textContent.charAt(result.textContent.length - 1) !== `*` &&
        result.textContent.charAt(result.textContent.length - 1) !== `/`
      ) {
        if (e.target.getAttribute(`id`) === `plus`) result.textContent += `+`;
        if (e.target.getAttribute(`id`) === `minus`) result.textContent += `-`;
        if (e.target.getAttribute(`id`) === `multiply`)
          result.textContent += `*`;
        if (e.target.getAttribute(`id`) === `divide`) result.textContent += `/`;
      } else
        window.alert(
          `Error: you need to input a number/remove the current operation`
        );
    }
    //Result
    if (e.target.className === `equals`)
      result.textContent = eval(result.textContent);
  });
});
