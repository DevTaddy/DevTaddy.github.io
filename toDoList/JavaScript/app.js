document.addEventListener(`DOMContentLoaded`, function (e) {
  const activityList = document.querySelector(`.activity-list`);
  const main = document.querySelector(`#main`);
  const input = document.querySelector(`input[type="text"]`);
  const addButton = document.querySelector(`.add-button`);

  function addActivity(eventMedium, eventListener) {
    eventMedium.addEventListener(eventListener, function (e) {
      if (
        eventListener === `click` ||
        (eventListener === `keyup` && e.keyCode == 13)
      ) {
        if (input.value.trim().length == "") {
          window.alert(`Error: empty input`);
          input.value = ``;
        } else if (input.value.length >= 17) {
          window.alert(`Error: the maximum value of input is 16`);
        } else {
          const newDoneBtn = document.createElement(`button`);
          newDoneBtn.classList.add(`done-btn`);
          const newDeleteBtn = document.createElement(`button`);
          newDeleteBtn.classList.add(`remove-btn`);
          const newParagraph = document.createElement(`p`);
          newParagraph.classList.add(`activities`);
          newDoneBtn.textContent = "DONE";
          newParagraph.textContent = input.value;
          newDeleteBtn.textContent = "DELETE";
          activityList.appendChild(newDoneBtn);
          activityList.appendChild(newParagraph);
          activityList.appendChild(newDeleteBtn);
          input.value = ``;
        }
      }
    });
  }

  addActivity(addButton, `click`);
  addActivity(input, `keyup`);

  activityList.addEventListener(`click`, function (e) {
    if (e.target.className === `remove-btn`) {
      const rmvBtn = e.target;
      activityList.removeChild(
        rmvBtn.previousElementSibling.previousElementSibling
      );
      activityList.removeChild(rmvBtn.previousElementSibling);
      activityList.removeChild(rmvBtn);
    } else if (e.target.className === `done-btn`) {
      const doneBtn = e.target;
      const newUndoBtn = document.createElement(`button`);
      newUndoBtn.classList.add(`undo-btn`);
      newUndoBtn.textContent = "UNDO";
      activityList.replaceChild(newUndoBtn, doneBtn);
      newUndoBtn.nextElementSibling.classList.add(`done`);
    } else if (e.target.className === `undo-btn`) {
      const undoBtn = e.target;
      undoBtn.nextElementSibling.classList.remove(`done`);
      undoBtn.textContent = "DONE";
      undoBtn.classList.remove(`undo-btn`);
      undoBtn.classList.add(`done-btn`);
    }
  });

  main.addEventListener(`click`, function (e) {
    if (e.target.className === `lazy`) {
      const procrastinateBtn = e.target;
      const newBtnDontProc = document.createElement(`button`);
      newBtnDontProc.classList.add(`not-lazy`);
      newBtnDontProc.textContent = "Get your powers back!";
      activityList.classList.add(`hide`);
      main.replaceChild(newBtnDontProc, procrastinateBtn);
    } else if (e.target.className === `not-lazy`) {
      const DontProcbtn = e.target;
      DontProcbtn.classList.remove(`not-lazy`);
      DontProcbtn.classList.add(`lazy`);
      DontProcbtn.textContent = "Procrastinate";
      activityList.classList.remove(`hide`);
    }
  });
});
