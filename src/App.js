import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
const MY_ID = "a61c2027";
const MY_KEY = "c8da14b8851b4c8f8a2e25f0ec4bfdfc";

const[mySearch, setMySearch] = useState("");
const[myRecipes, setMyRecipes] =useState([]);
const[wordSubmitted, setWordSubmitted] = useState('avocado');

useEffect(() => {
  const getRecipe = async() =>{
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setMyRecipes(data.hits);
  }
  getRecipe();
  }, [wordSubmitted])

const myRecipeSearch = (e) =>{
   console.log(e.target.value);
   setMySearch(e.target.value)
}
const finalSearch =(e)=>{
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src = {video} type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <form onSubmit={finalSearch}>
          <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
        </form>
        </div>
     <div className="container">
      <button>
        <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="btn" className="icons"/>
      </button>
     </div>
     <div>
     {myRecipes.map((element, index) =>(
  <MyRecipesComponent key={index} label={element.recipe.label} image={element.recipe.image}  calories={element.recipe.calories} ingredients={element.recipe.ingredientLines}/>
))}
</div>
    </div> 
  );
}

export default App;
