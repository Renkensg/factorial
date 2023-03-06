const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const number = parseInt(document.getElementById('number').value);
  const factorial = fatorial(number);
  resultDiv.textContent = `O fatorial de ${number} é ${factorial}.`;
});

function fatorial(number) {
  let test = number - 1;
  while (test > 0) {
    number *= test;
    test--;
  }
  return number;
}
