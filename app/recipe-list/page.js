import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipe(){
    try{
        const apiResponse=await fetch("https://dummyjson.com/recipe");
        const data=await apiResponse.json();

        return data?.recipe;
    }catch(e){
        throw new Error(e);
    }
}

export default async function Recipes(){
    const recipeList=await fetchListOfRecipe();
    return <RecipeList recipeList={recipeList}/>;
}
