const count = document.getElementById(`counter1`);
const count2 = document.getElementById(`counter2`);
const count3 = document.getElementById(`counter3`);
//
const Text1 = document.querySelector(".t1");

// pop up function
function showPopup() {
  popup.style.transform = "scale(1)";
}
// pop up close
function closePopup() {
  popup.style.transform = "scale(0)";
}

// relod on click function
function relodWindow() {
  closePopup();
  location.reload();
}
function myFunction1() {
  for (let i = 1; i <= 33; i++) {
    setTimeout(() => {
      count.innerText = i;
    }, i * 1000);
    setTimeout(function () {
      const countVal1 = count.innerText;
      console.log(countVal1);
    }, 34000);
  }
}

// second one
function myFunction2() {
  for (let i = 1; i <= 33; i++) {
    setTimeout(() => {
      count2.innerHTML = i;
    }, i * 1000);
    setTimeout(function () {
      const countVal2 = count2.innerText;
      console.log(countVal2);
    }, 34000);
  }
}

function myFunction3() {
  for (let i = 1; i <= 34; i++) {
    setTimeout(() => {
      count3.innerHTML = i;
    }, i * 1000);
    setTimeout(function () {
      let countVal3 = count3.innerText;
      console.log(countVal3);
    }, 35000);
  }
}
