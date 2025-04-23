let currentExpression = "";
let currentAnswer = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem() {
  const ops = ['+', '-', '*', '/'];
  let op1 = ops[Math.floor(Math.random() * ops.length)];
  let op2 = ops[Math.floor(Math.random() * ops.length)];

  let n1, n2, n3;

  // まず普通にランダム生成
  n1 = getRandomInt(2, 30);
  n2 = getRandomInt(2, 30);
  n3 = getRandomInt(2, 30);

  // 割り算があるときは割り切れるように調整
  if (op1 === '/') {
    const divisor = getRandomInt(2, 15);
    const quotient = getRandomInt(2, 15);
    n2 = divisor;
    n1 = divisor * quotient;
  }
  if (op2 === '/') {
    const divisor = getRandomInt(2, 15);
    const quotient = getRandomInt(2, 15);
    n3 = divisor;
    n2 = divisor * quotient;
  }

  currentExpression = `${n1} ${op1} ${n2} ${op2} ${n3}`;

  try {
    currentAnswer = eval(currentExpression);
  } catch (e) {
    currentAnswer = "エラー";
  }

  document.getElementById('problem').textContent =
    currentExpression.replace(/\*/g, '×').replace(/\//g, '÷');
  document.getElementById('answer').style.display = 'none';
  document.getElementById('answer').textContent = `答え: ${currentAnswer}`;
}

function showAnswer() {
  document.getElementById('answer').style.display = 'block';
}

window.onload = generateProblem;
