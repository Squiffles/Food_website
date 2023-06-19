import styled from "styled-components";
import Card from "../Card/Card";
//__________________________________________________


const StyledCardBox = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;;
    justify-content: space-evenly;
    gap: 5rem;

    margin: 50px;
`
//__________________________________________________


export default function CardBox ( { searching, currentAllRecipes, currentSearchResults } ) {


    // handles lowercase and uppercase diets, if comes fron the API, or Diets, if comes from the DB) property.
    // const getDiets = (recipe) => {
    //     const diets = recipe.diets || recipe.Diets || [];
    //     return Array.isArray(diets) ? diets : [diets];
    //   };
    // *NOT NECESSARY FOR NOW.

    if (searching) {
        return (
            <StyledCardBox>
                {
                    currentSearchResults?.map((recipe) => {
                        // const diets = getDiets(recipe); // to handle the lowcase/uppercase matter.
                        return (
                            <Card
                                id = {recipe?.id}
                                title = {recipe?.title}
                                summary = {recipe?.summary}
                                image = {recipe?.image}
                                healthScore = {recipe?.healthScore}
                                steps = {recipe?.stepByStep}
                                diets = {recipe?.diets}
                            />
                        )
                    })
                }
            </StyledCardBox>
        )
    }

    if (!searching) {
        return (
            <StyledCardBox>
                {/* { loading && <h2>Loading...</h2>} */}
                {
                    currentAllRecipes?.map((recipe) => {
                        return (
                            <Card
                                id = {recipe?.id}
                                title = {recipe?.title}
                                summary = {recipe?.summary}
                                image = {recipe?.image}
                                healthScore = {recipe?.healthScore}
                                steps = {recipe?.stepByStep}
                                diets = {recipe?.diets}
                            />
                        )
                    })
                }
            </StyledCardBox>
        )
    }

};