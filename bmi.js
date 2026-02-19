function Value(){
  const heightInput = document.querySelector('.js-height')
  const weightInput = document.querySelector('.js-weight')
  const result = document.querySelector('.js-result');
  const description = document.querySelector('.js-description');
  const errorMessage = document.querySelector('.js-error-message');

  result.value="";
  description.value="";
  errorMessage.textContent="";
  heightInput.classList.remove("error");
  weightInput.classList.remove("error");
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  if (!(height) || height<=0) {
    errorMessage.textContent="Please enter a valid height";
    heightInput.classList.add("error");
    return;
}
if(!(weight)|| weight<=0){
  errorMessage.textContent="Please enter a valid weight";
  weightInput.classList.add("error");
  return;
}
const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  
  let Description = "";
  let backgroundColor = "";

  if (bmi < 18.5) {
      Description = "Underweight";
      backgroundColor = "orange";
  } else if (bmi >= 18.5 && bmi < 25) {
      Description = "Normal weight";
      backgroundColor = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
      Description = "Overweight";
      backgroundColor = "red";
  } else {
      Description = "Obesity";
      backgroundColor = "darkred";
  }
  result.value = bmi;
  description.value = Description;
  description.style.backgroundColor = backgroundColor;
 

}

