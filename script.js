let trips = []

// MARK: home pg
// calendar
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let thisMth = 
let thisYr = 
let today = getDate();
function mthCalendar (thisMth, thisYr) {

}



// MARK: new trip pg
// "undecided" checkbox
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

document.querySelector("#returnCheck").addEventListener("click", function () {
  const inputs = returnInfo.querySelectorAll('input');
  if (document.querySelector("#returnCheck").checked === true) {
    inputs.forEach(function (input) {
      input.disabled = true;
    });
  } else {
    inputs.forEach(function (input) {
      input.disabled = false;
    });
  }
});

// make flight/ferry/bus number div appear
function checkGoing() {
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
  radio.addEventListener('click', checkGoing);
});
checkGoing();

function checkReturn() {
  const returnRadio = document.querySelector(".returnTransport:checked");

  document.querySelectorAll("#returnFlightNum, #returnFerryNum, #returnBusNum").forEach(function (div) {
    div.style.display = 'none';
  });

  if (returnRadio) {
    let selectedValue = returnRadio.value;

    if (selectedValue === "Flight") {
      document.querySelector("#returnFlightNum").style.display = 'block';
    } else if (selectedValue === "Ferry") {
      document.querySelector("#returnFerryNum").style.display = 'block';
    } else if (selectedValue === "Bus") {
      document.querySelector("#returnBusNum").style.display = 'block';
    }
  }
}

document.querySelectorAll(".returnTransport").forEach(function (radio) {
  radio.addEventListener('click', checkReturn);
});
checkReturn();

// alert for upcoming flight





// create trip btn


