let inputMark = document.getElementById("iits-inp");
let addBtn = document.querySelector("#iits-formSubmit button");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let mark = parseInt(inputMark.value);

  // Check mark is valid or not
  if (mark > 100) {
    alert("Your Maximum Mark is 100!");
    return; 
  }

  if (mark >= 81 && mark <= 100) {
    incrementCount("iits-a_count");
  } else if (mark >= 71 && mark <= 80) {
    incrementCount("iits-bp_count");
  } else if (mark >= 61 && mark <= 70) {
    incrementCount("iits-b_count");
  } else if (mark >= 51 && mark <= 60) {
    incrementCount("iits-bm_count");
  } else if (mark >= 40 && mark <= 50) {
    incrementCount("iits-c_count");
  } else if (mark < 40) {
    incrementCount("iits-f_count");
  }

  inputMark.value = "";  // For Clear the input
});
// Function for increment count
function incrementCount(ncount) {
  let countMark = document.getElementById(ncount);
  let count = parseInt(countMark.textContent);
  countMark.textContent = ++count;
}