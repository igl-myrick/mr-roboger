// business logic

function beepBoop(inputNum, inputName) {
  const invalidChars = inputName.match(/[^-' \w]/g);
  if (inputName.trim() === "" || invalidChars !== null) {
    return "Please enter a valid name."
  }
  let neighborhoodArr = [];
  for (let i = 0; i < inputNum; i+=1) {
    neighborhoodArr.push(i);
  }
  neighborhoodArr.push(parseInt(inputNum));
  neighborhoodArr.forEach(function(number, index) {
    if (number.toString().includes(3)) {
      neighborhoodArr.splice(index, 1, "Will you be my neighbor, " + inputName.trim() + "?");
    } else if (number.toString().includes(2)) {
      neighborhoodArr.splice(index, 1, "Boop!");
    } else if (number.toString().includes(1)) {
      neighborhoodArr.splice(index, 1, "Beep!");
    }
  });
  return neighborhoodArr;
}

// ui logic

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
})

function handleForm(e) {
  e.preventDefault();
  const form = document.querySelector("form");
  const userNum = document.getElementById("user-input").value;
  const userName = document.getElementById("user-name").value;
  const output = document.getElementById("output");
  const result = beepBoop(userNum, userName);
  const p = document.createElement("p");
  const order = document.querySelector("input[name='order']:checked").value;
  if (result === "Please enter a valid name.") {
    p.append(result);
  } else if (order === "reverse") {
    result.reverse();
    p.append(result.join(", "));
  } else {
    p.append(result.join(", "));
  }
  output.append(p);
  form.addEventListener("submit", function() {
    p.remove();
  });
}