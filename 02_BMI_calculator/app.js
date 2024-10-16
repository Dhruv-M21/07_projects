const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || isNaN(height) || height < 0) {
    result.innerHTML = `Enter a valid height`;
  } else if (weight === '' || isNaN(weight) || weight < 0) {
    result.innerHTML = `Enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message = '';

    if (bmi < 18.6) {
      message = 'Underweight';
    } else if (bmi > 24.9) {
      message = 'Overweight';
    } else {
      message = 'Normal range';
    }

    result.innerHTML = `<span>${bmi}</span><p>${message}</p>`;
  }
});
