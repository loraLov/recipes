function MyRecipesComponent({label, image, calories, ingredients}){
    return(
        <div>
            <div className="container">
            <h2>{label}</h2>
            <img src={image} alt="pic"/>
            <h2>{calories.toFixed()} calories</h2>
            </div>
            
            <ul className="list">
                {ingredients.map((ingredient, index) =>(
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            
        </div>
    );
}
export default MyRecipesComponent;