document.addEventListener(`DOMContentLoaded`, function () {
  //Variables
  //Inputs
  const birthYear = document.querySelector(`.birth-year`);
  const birthMonth = document.querySelector(`.birth-month`);
  const birthDay = document.querySelector(`.birth-day`);
  const currentYear = document.querySelector(`.current-year`);
  const currentMonth = document.querySelector(`.current-month`);
  const currentDay = document.querySelector(`.current-day`);
  //Submit
  const submit = document.querySelector(`.submit`);

  submit.addEventListener(`click`, function (e) {
    if (
      birthYear.value.trim().length == "" ||
      birthMonth.value.trim().length == "" ||
      birthDay.value.trim().length == "" ||
      currentYear.value.trim().length == "" ||
      currentMonth.value.trim().length == "" ||
      currentDay.value.trim().length == ""
    ) {
      window.alert(`Error: please fill everything`);
    } else if (
      birthYear.value != parseInt(birthYear.value) ||
      birthMonth.value != parseInt(birthMonth.value) ||
      birthDay.value != parseInt(birthDay.value) ||
      currentYear.value != parseInt(currentYear.value) ||
      currentMonth.value != parseInt(currentMonth.value) ||
      currentDay.value != parseInt(currentDay.value)
    ) {
      window.alert(`Error: input must be numbers`);
    } else {
      let age = currentYear.value - birthYear.value;
      if (parseInt(currentMonth.value) < parseInt(birthMonth.value)) {
        age--;
      } else if (parseInt(currentDay.value) < parseInt(birthDay.value)) {
        age--;
      }
      document.querySelector(`.change-age`).textContent = ` ` + age;
      document.querySelector(`.age-months`).textContent =
        ` ` + age * 12 + ` months`;
      document.querySelector(`.age-days`).textContent =
        ` ` + age * 12 * 30 + ` days`;
      document.querySelector(`.age-hours`).textContent =
        ` ` + age * 12 * 30 * 24 + ` hours`;
      document.querySelector(`.age-minutes`).textContent =
        ` ` + age * 12 * 30 * 24 * 60 + ` minutes`;
      document.querySelector(`.age-seconds`).textContent =
        ` ` + age * 12 * 30 * 24 * 60 * 60 + ` seconds`;
    }
  });
});
