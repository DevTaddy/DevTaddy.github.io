document.addEventListener(`DOMContentLoaded`, function (e) {
  /* VARIABLES */
  //Buttons
  const buttons = document.querySelector(`.customize-buttons`);
  //Audio
  const audioBreak = document.querySelector(`.break-audio`);
  const audioWork = document.querySelector(`.work-audio`);
  const congratsWork = document.querySelector(`.congrats-audio`);
  //Increments and decrements
  const decrementTomato = document.querySelector(`.decrement-tomato`);
  const incrementTomato = document.querySelector(`.increment-tomato`);
  const decrementShortBrk = document.querySelector(`.decrement-shortBrk`);
  const incrementShortBrk = document.querySelector(`.increment-shortBrk`);
  const decrementLongBrk = document.querySelector(`.decrement-longBrk`);
  const incrementLongBrk = document.querySelector(`.increment-longBrk`);
  const decrementSession = document.querySelector(`.decrement-session`);
  const incrementSession = document.querySelector(`.increment-session`);
  //Pomodoro timer
  const tomatoMinutes = document.querySelector(`.tomato-minutes`);
  let tomatoMntsValue = parseInt(tomatoMinutes.textContent);
  const tomatoSeconds = document.querySelector(`.tomato-seconds`);
  let tomatoScdsValue = parseInt(tomatoSeconds.textContent);
  //Short break
  const shortBrkMinutes = document.querySelector(`.shortBrk-minutes`);
  let shortBrkMinutesVal = parseInt(shortBrkMinutes.textContent);
  const shortBrkSeconds = document.querySelector(`.shortBrk-seconds`);
  let shortBrkSecondsVal = parseInt(shortBrkSeconds.textContent);
  //Long break
  const longBrkMinutes = document.querySelector(`.longBrk-minutes`);
  let longBrkMinutesVal = parseInt(longBrkMinutes.textContent);
  const longBrkSeconds = document.querySelector(`.longBrk-seconds`);
  let longBrkSecondsVal = parseInt(longBrkSeconds.textContent);
  //Session
  const session = document.querySelector(`#session`);
  let sessionValue = parseInt(session.textContent);
  //counters
  let decrementTomatoCounter = 0;
  let incrementomatoCounter = 0;
  let decrementShtBrkCounter = 0;
  let incrementShtBrkCounter = 0;
  let incrementLngBrkCounter = 0;
  let decrementLngBrkCounter = 0;
  let decrementSessionCounter = 0;
  let incrementSessionCounter = 0;

  decrementTomato.addEventListener(`click`, function (e) {
    if (tomatoMntsValue < 2) {
      window.alert(`Error: tomato timer cannot be less than 1`);
    } else {
      tomatoMntsValue--;
      tomatoMinutes.textContent = ` ` + tomatoMntsValue;
      decrementTomatoCounter--;
    }
  });

  incrementTomato.addEventListener(`click`, function (e) {
    tomatoMntsValue++;
    tomatoMinutes.textContent = ` ` + tomatoMntsValue;
    incrementomatoCounter++;
  });

  decrementShortBrk.addEventListener(`click`, function (e) {
    if (shortBrkMinutesVal < 2) {
      window.alert(`Error: short break timer cannot be less than 1`);
    } else {
      shortBrkMinutesVal--;
      shortBrkMinutes.textContent = ` ` + shortBrkMinutesVal;
      decrementShtBrkCounter--;
    }
  });

  incrementShortBrk.addEventListener(`click`, function (e) {
    shortBrkMinutesVal++;
    shortBrkMinutes.textContent = ` ` + shortBrkMinutesVal;
    incrementShtBrkCounter++;
  });

  decrementLongBrk.addEventListener(`click`, function (e) {
    if (longBrkMinutesVal < 2) {
      window.alert(`Error: long break timer cannot be less than 1`);
    } else {
      longBrkMinutesVal--;
      longBrkMinutes.textContent = ` ` + longBrkMinutesVal;
      incrementLngBrkCounter--;
    }
  });

  incrementLongBrk.addEventListener(`click`, function (e) {
    longBrkMinutesVal++;
    longBrkMinutes.textContent = ` ` + longBrkMinutesVal;
    incrementLngBrkCounter++;
  });

  decrementSession.addEventListener(`click`, function (e) {
    if (sessionValue < 2) {
      window.alert(`Error: session cannot be less than 1`);
    } else {
      sessionValue--;
      session.textContent = ` ` + sessionValue + ` `;
      decrementSessionCounter--;
    }
  });

  incrementSession.addEventListener(`click`, function (e) {
    sessionValue++;
    session.textContent = ` ` + sessionValue + ` `;
    incrementSessionCounter++;
  });

  buttons.addEventListener(`click`, function (e) {
    if (e.target.className === `start button-stlye`) {
      audioWork.play();
      timer = setInterval(function () {
        if (sessionValue > 0) {
          if (tomatoScdsValue > 0) {
            if (tomatoScdsValue < 11) {
              tomatoScdsValue--;
              tomatoSeconds.textContent = `0` + tomatoScdsValue + ` `;
            } else {
              tomatoScdsValue--;
              tomatoSeconds.textContent = tomatoScdsValue + ` `;
            }
          } else if (tomatoScdsValue === 0 && tomatoMntsValue > 0) {
            tomatoMntsValue--;
            tomatoMinutes.textContent = ` ` + tomatoMntsValue;
            tomatoScdsValue = 59;
            tomatoSeconds.textContent = tomatoScdsValue + ` `;
          } else if (tomatoScdsValue === 0 && tomatoMntsValue === 0) {
            if (
              shortBrkMinutesVal ===
              5 + (decrementShtBrkCounter + incrementShtBrkCounter)
            ) {
              audioBreak.play();
            }
            if (sessionValue === 1) {
              shortBrkMinutesVal = 0;
              shortBrkMinutes.textContent = ` ` + shortBrkMinutesVal;
              if (longBrkSecondsVal > 0) {
                if (longBrkSecondsVal < 11) {
                  longBrkSecondsVal--;
                  longBrkSeconds.textContent = `0` + longBrkSecondsVal + ` `;
                } else {
                  longBrkSecondsVal--;
                  longBrkSeconds.textContent = longBrkSecondsVal + ` `;
                }
              } else if (longBrkSecondsVal === 0 && longBrkMinutesVal > 0) {
                longBrkMinutesVal--;
                longBrkMinutes.textContent = ` ` + longBrkMinutesVal;
                longBrkSecondsVal = 59;
                longBrkSeconds.textContent = longBrkSecondsVal + ` `;
              } else if (longBrkSecondsVal === 0 && longBrkMinutesVal === 0) {
                congratsWork.play();
                sessionValue--;
                session.textContent = ` ` + sessionValue + ` `;
                clearInterval(timer);
              }
            } else {
              if (shortBrkSecondsVal > 0) {
                if (shortBrkSecondsVal < 11) {
                  shortBrkSecondsVal--;
                  shortBrkSeconds.textContent = `0` + shortBrkSecondsVal + ` `;
                } else {
                  shortBrkSecondsVal--;
                  shortBrkSeconds.textContent = shortBrkSecondsVal + ` `;
                }
              } else if (shortBrkSecondsVal === 0 && shortBrkMinutesVal > 0) {
                shortBrkMinutesVal--;
                shortBrkMinutes.textContent = ` ` + shortBrkMinutesVal;
                shortBrkSecondsVal = 59;
                shortBrkSeconds.textContent = shortBrkSecondsVal + ` `;
              } else if (shortBrkSecondsVal === 0 && shortBrkMinutesVal === 0) {
                audioWork.play();
                sessionValue--;
                session.textContent = ` ` + sessionValue + ` `;
                tomatoMntsValue =
                  25 + (decrementTomatoCounter + incrementomatoCounter);
                tomatoMinutes.textContent = ` ` + tomatoMntsValue;
                shortBrkMinutesVal =
                  5 + (decrementShtBrkCounter + incrementShtBrkCounter);
                shortBrkMinutes.textContent = ` ` + shortBrkMinutesVal;
              }
            }
          }
        }
      }, 1000);
    } else if (e.target.className === `reset button-stlye`) {
      congratsWork.pause();
      tomatoMntsValue = 25 + (decrementTomatoCounter + incrementomatoCounter);
      tomatoMinutes.textContent = ` ` + tomatoMntsValue;
      tomatoScdsValue = 0;
      tomatoSeconds.textContent = `0` + tomatoScdsValue + ` `;
      shortBrkMinutesVal =
        5 + (decrementShtBrkCounter + incrementShtBrkCounter);
      shortBrkMinutes.textContent = ` ` + shortBrkMinutesVal;
      shortBrkSecondsVal = 0;
      shortBrkSeconds.textContent = `0` + shortBrkSecondsVal + ` `;
      longBrkMinutesVal =
        10 + (decrementLngBrkCounter + incrementLngBrkCounter);
      longBrkMinutes.textContent = ` ` + longBrkMinutesVal;
      longBrkSecondsVal = 0;
      longBrkSeconds.textContent = `0` + longBrkSecondsVal + ` `;
      sessionValue = 4 + (decrementSessionCounter + incrementSessionCounter);
      session.textContent = ` ` + sessionValue + ` `;
    } else if (e.target.className === `stop button-stlye`) {
      clearInterval(timer);
    }
  });
});
