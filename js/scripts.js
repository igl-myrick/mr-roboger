// business logic

function beepBoop(inputNum) {
  let neighborhoodArr = []
  for (let i = 0; i < inputNum; i+=1) {
    neighborhoodArr.push(i);
  }
  neighborhoodArr.push(inputNum);
  console.log(neighborhoodArr);
}

beepBoop(8);