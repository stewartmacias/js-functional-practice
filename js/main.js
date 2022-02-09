const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = $('#description');
let carbs = $('#carbs');
let calories = $('#calories');
let protein = $('#protein');

let list = [];

description.keypress(()=> {
  description.removeClass('is-invalid')
})
carbs.keypress(()=> {
  carbs.removeClass('is-invalid')
})
calories.keypress(()=> {
  calories.removeClass('is-invalid')
})
protein.keypress(()=> {
  protein.removeClass('is-invalid')
})

const validateInputs = () => {
  description.val()? '': description.addClass('is-invalid');
  carbs.val()? '': carbs.addClass('is-invalid');
  calories.val()? '': calories.addClass('is-invalid');
  protein.val()? '': protein.addClass('is-invalid');

  if(
    description.val() && 
    calories.val() && 
    carbs.val() && 
    protein.val()
    ) add();

}

const add = () => {
  const newItem = {
    description: description.val(),
    calories: parseInt(calories.val()),
    carbs: parseInt(carbs.val()),
    protein: parseInt(protein.val())
  }

  list.push(newItem);
  cleanInputs();
  console.log('list',list);
}

const cleanInputs = () => {
  description.val('');
  calories.val('');
  carbs.val('');
  protein.val('');
}