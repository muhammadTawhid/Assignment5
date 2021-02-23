//---------------------------------search Button input

const inputName = document.getElementById('input-name');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () =>getMealsData(inputName.value))

const getMealsData = name => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => response.json())
      .then(data =>mealDetailInfo(data.meals[0]))
}

// -------------------------------------get data from API

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
.then(response => response.json())
.then(data => displayMeals(data.meals))

const displayMeals = meals => {
  const mealDiv = document.getElementById('meal')
  for (let i = 0; i < meals.length; i++) {
      const meal = meals[i];
      const mealsDiv = document.createElement('div')
      
      mealsDiv.className = "meal shadow p-3 mb-5 bg-body rounded";

      mealDetails = `
      <div onclick ="displayMealDetail('${meal.idMeal}')" >
          <img class = "h-50  w-100" src="${meal.strMealThumb}">
          <h3 class = meal-name> ${meal.strMeal}</h3>
          <P> ${meal.strArea} </p>
      </div>
      
      
      `
      mealsDiv.innerHTML = mealDetails;

      mealDiv.appendChild(mealsDiv);

  }
}
// ---------------------------------- showing meal details

const displayMealDetail = id => {
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
fetch(url)
.then(res => res.json())
.then(data => mealDetailInfo(data.meals[0]))
}

const mealDetailInfo = meal => {
console.log(meal)
const mealsDiv = document.getElementById("meal-detail")
mealsDiv.innerHTML = `
<div class="shadow p-3 mb-5 w-25 mt-5 text-center">
    <img src="${meal.strMealThumb}">
    <h1>${meal.strMeal}</h1>
    <h4>Food Ingredients</h4>
    <p>${meal.strMeasure1} ${meal.strIngredient1}<p>
    <p>${meal.strMeasure2} ${meal.strIngredient2}<p>
    <p>${meal.strMeasure3} ${meal.strIngredient3}<p>
    <p>${meal.strMeasure4} ${meal.strIngredient4}<p>
    <p>${meal.strMeasure5} ${meal.strIngredient5}<p>
    <p>${meal.strMeasure6} ${meal.strIngredient6}<p>
    <p>${meal.strMeasure7} ${meal.strIngredient7}<p>
    <p>${meal.strMeasure8} ${meal.strIngredient8}<p>
    <p>${meal.strMeasure9} ${meal.strIngredient9}<p>
    <p>${meal.strMeasure10} ${meal.strIngredient10}<p>    
</div>
`;
}