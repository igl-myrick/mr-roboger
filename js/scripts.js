// business logic

function beepBoop(inputNum) {
  let neighborhoodArr = [];
  for (let i = 0; i < inputNum; i+=1) {
    neighborhoodArr.push(i);
  }
  neighborhoodArr.push(inputNum);
  neighborhoodArr.forEach(function(number, index) {
    if (number.toString().includes(3)) {
      neighborhoodArr.splice(index, 1, "Will you be my neighbor?");
    } else if (number.toString().includes(2)) {
      neighborhoodArr.splice(index, 1, "Boop!");
    } else if (number.toString().includes(1)) {
      neighborhoodArr.splice(index, 1, "Beep!");
    }
  });
  return neighborhoodArr;
}