const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || isNaN(height) || height <= 0) {
    alert('Please enter a valid height');
    //result.innerHTML = `pls enter a valid height ${height}`;
  }else if (weight === "" || isNaN(weight) || weight <= 0) {
    alert("Please enter a valid weight");
    //result.innerHTML = `pls enter a valid weight ${weight}`;
  }else{
  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  result.textContent = `Your BMI is ${bmi}`;}
});
