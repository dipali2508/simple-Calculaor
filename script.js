let result = document.getElementById("result");

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  if (result.value === "" && operator !== "-") return;
  result.value += operator;
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

function clearResult() {
  result.value = "";
}
