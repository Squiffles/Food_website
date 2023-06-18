// uncomment dispatch, to continue working.

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getAllRecipes } from './Redux/actions';

import './App.css';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
//__________________________________________________


export function App ( { allRecipes, searchResults } ) {


        // const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [recipesPerPage] = useState(9);

        const [searching, setSearching] = useState(false)


    const { pathname } = useLocation();

    const dispatch = useDispatch();


    // // get current posts:
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentAllRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const currentSearchResults = searchResults.slice(indexOfFirstRecipe, indexOfLastRecipe)
    // changes the page:
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    useEffect(() => {
        console.log(allRecipes);
    }, [allRecipes])

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    useEffect(() => {
        // dispatch(getAllRecipes());
        console.log(searching)
    }, [searching])


    return (
        <div className="App">
            {
                pathname !== '/' && <NavBar setSearching = {setSearching}/>
            }
            <Routes>
                <Route path = '/' element = { <Landing/> }/>
                <Route path = '/home' element = { <Home searching = {searching} allRecipes = {allRecipes} currentAllRecipes = {currentAllRecipes} searchResults = {searchResults} currentSearchResults = {currentSearchResults} recipesPerPage = {recipesPerPage} paginate = {paginate}/>}/>
                <Route path = '/detail/:id' element={ <Detail /> } />
                <Route path = '/form' element = { <Form/> }/>
            </Routes>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        allRecipes : state.allRecipes,
        searchResults: state.searchResults
    }
}

export default connect (
    mapStateToProps,
    null
)(App)