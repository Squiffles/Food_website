import { useState } from "react";
import { connect, useDispatch } from 'react-redux';

import { getRecipesByName } from '../../Redux/actions';

import './SearchBar.css'
//__________________________________________________


export function SearchBar ( { setSearching } ) {


        const [input, setInput] = useState('')

        const [showSearchTitle, setShowSearchTitle] = useState(true) 

        const [showsSearchSection, setShowSearchSection] = useState(false)

        const dispatch = useDispatch()


    const syncInput = (event) => {
        const actualValue = event.target.value
        setInput(actualValue)
    }

    const setDefault = () => {
        setTimeout(() => {
            setShowSearchTitle(true);
            setShowSearchSection(false);
            setInput('');
        }, 220)
    };

    const titleToSearch = () => {
        setShowSearchTitle(false);
        setShowSearchSection(true);
    }


    return (
        <div className = 'searchBar'>
            {
                showSearchTitle && (
                    <div className = 'searchButton'>
                        <h1 onClick = {titleToSearch} className = 'searchTitle'>S E A R C H</h1>
                    </div>
                )
            }
            {
                showsSearchSection && (
                    <div className = 'searchSection'>
                        <input className = 'searchInput' onChange = {syncInput} value = {input} onBlur = {setDefault} autoFocus placeholder = 'try "beef"'/>
                        <button className = 'searchButtonIconContainer' onClick = { () => {dispatch(getRecipesByName(input)); setSearching(true)} }>
                            <svg className = 'searchButtonIcon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </button>
                    </div>
                )
            }
        </div>
    )
}


//__________________________________________________
const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
}

export default connect (
    mapStateToProps,
    null
)(SearchBar)