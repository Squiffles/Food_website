import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import Detail from './Components/Detail/Detail';


function App () {
    

    const [recipes, setRecipes] = useState({
        recipes: []
    })

    const { pathname } = useLocation()


    useEffect(() => {
        console.log(recipes)
    }, [recipes])


        const getRecipeByName = async (name) => { // asks for the recipes that matches the name.

            try {

                const URL = 'http://localhost:3001/recipes'
                const { data } = await axios(`${URL}?name=${name}`)
                const recipesFound = data // recipesFound is an array
                setRecipes(recipesFound)

            } catch (error) {
                throw new Error(error.message)
            }
        }


    return (
        <div className="App">
            {
                pathname !== '/' && <NavBar getRecipeByName = {getRecipeByName}/>
            }
            <Routes>
                <Route path = '/' element = { <Landing/> }/>
                <Route path = '/home' element = { <Home recipes = {recipes}/> }/>
                <Route path = '/form' element = { <Form/> }/>
                <Route path = '/detail:id' element = { <Detail/> }/>
            </Routes>
        </div>
    );
}

export default App;