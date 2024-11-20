
document.querySelector("#goingCheck").addEventListener("click", function () {
  const inputs = goingInfo.querySelectorAll('input');
  if (document.querySelector("#goingCheck").checked === true) {
    inputs.forEach(input => {
          input.disabled = true;
        });
  } else {
    inputs.forEach(input => {
          input.disabled = false;
    });
  }
});

document.querySelector("#returnCheck").addEventListener("click", function () {
  const inputs = returnInfo.querySelectorAll('input');
  if (document.querySelector("#returnCheck").checked === true) {
    inputs.forEach(input => {
          input.disabled = true;
        });
  } else {
    inputs.forEach(input => {
          input.disabled = false;
    });
  }
});
