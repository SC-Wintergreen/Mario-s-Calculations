const inputA = document.getElementById("param-a");
const inputB = document.getElementById("param-b");
const inputC = document.getElementById("param-c");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let param1Value = inputA.value;
  let param2Value = inputB.value;
  let param3Value = inputC.value;

  if (!param1Value || !param2Value || !param3Value) {
    inputA.style.outline = `2px solid red`;
    inputB.style.outline = `2px solid red`;
    inputC.style.outline = `2px solid red`;

    document.getElementById(
      "param-d"
    ).innerHTML = `<h6>Values Of Either Of Param A, Param B & Param C cannot be Empty</h6>`;
  } else {
    param1Value = Number(param1Value);
    param2Value = Number(param2Value);
    param3Value = Number(param3Value);

    if (!param1Value || !param2Value || !param3Value) {
      inputA.style.outline = `2px solid red`;
      inputB.style.outline = `2px solid red`;
      inputC.style.outline = `2px solid red`;

      document.getElementById(
        "param-d"
      ).innerHTML = `<h6>Values Of Either Of Param A, Param B & Param C Cannot Be Anything Other Than Numbers</h6>`;
    } else if (param3Value === 72) {
      let res = 71.5 * param1Value + 0.5 * param2Value * 1.25;
      res = res.toFixed(2);
      document.getElementById("param-d").innerHTML = `<h1> ${res}</h1>`;
    } else if (param3Value === 12) {
      let res = 11.5 * param1Value + 0.5 * param2Value * 1.25;
      res = res.toFixed(2);
      document.getElementById("param-d").innerHTML = `<h1>${res}</h1>`;
    } else if (param3Value === 24) {
      let res = 23.5 * param1Value + 0.5 * param2Value * 1.25;
      res = res.toFixed(2);
      document.getElementById("param-d").innerHTML = `<h1>${res}</h1>`;
    }
  }
});
