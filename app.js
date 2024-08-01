const searchBtn = document.querySelector(".searchBtn");
const searchBox = document.querySelector(".searchBox");
const recipeContainer = document.querySelector(".recipe-container");
// function to get recipes
const fetchRecipes = async (query)=>{
    recipeContainer.innerHTML = "<h2>Fetching Recipes ...</h2>"
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json()
  
    recipeContainer.innerHTML="";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}"/>
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs to <span>${meal.strCategory} </span> Category</p>`
        const viewRecipe = document.createElement('button');
        viewRecipe.textContent = "View Recipe";
        recipeDiv.appendChild(viewRecipe);
        recipeContainer.appendChild(recipeDiv);
    });
}


searchBtn.addEventListener("click",(e)=>{
    e.preventDefault(); 
    const searchInput = searchBox.value.trim();
    console.log(searchInput);
    fetchRecipes(searchInput);
})