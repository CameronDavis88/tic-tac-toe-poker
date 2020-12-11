console.log('Did it work?')

const variable =[]
function play(clickedId) {
  const  playerSpan = document.getElementById('player')
  const clickedEle = document.getElementById(clickedId)
  if(playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O'
      clickedEle.innerText = 'X'
      variable[clickedId] = 'X'
  } else {
      playerSpan.innerText = 'X'
      clickedEle.innerText ='O'
      variable[clickedId] = 'O'
  }
  console.log(variable)

  const topLeft = variable[0];
  const topCenter = variable[1];
  const topRight = variable[2];
  const middleLeft = variable[3];
  const middleCenter = variable[4];
  const middleRight = variable[5];
  const bottomLeft = variable[6];
  const bottomCenter = variable[7];
  const bottomRight = variable[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`)
    return
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`)
    return
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`)
    return
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`)
    return
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`)
    return
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`)
    return
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`)
    return
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`)
    return
  }
  
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}