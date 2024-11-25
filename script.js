
// for undecided checkbox on "New Trip"
document.querySelector("#goingCheck").addEventListener("click", function () {
  const inputs = goingInfo.querySelectorAll('input');
  if (document.querySelector("#goingCheck").checked === true) {
    inputs.forEach(function (input) {
      input.disabled = true;
    });
  } else {
    inputs.forEach(function (input) {
      input.disabled = false;
    });
  }
});


// for flight/ferry/bus number
function checkTransport() {
  const goingRadio = document.querySelector(".goingTransport:checked");

  document.querySelectorAll("#goingFlightNum, #goingFerryNum, #goingBusNum").forEach(function (div) {
    div.style.display = 'none';
  });

  if (goingRadio) {
    let selectedValue = goingRadio.value;

    if (selectedValue === "Flight") {
      document.querySelector("#goingFlightNum").style.display = 'block';
    } else if (selectedValue === "Ferry") {
      document.querySelector("#goingFerryNum").style.display = 'block';
    } else if (selectedValue === "Bus") {
      document.querySelector("#goingBusNum").style.display = 'block';
    }
  }
}

document.querySelectorAll(".goingTransport").forEach(function (radio) {
  radio.addEventListener('click', checkTransport);
});
checkTransport();