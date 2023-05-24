import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";

function Search(){
    return(
        <div className="search">
            <input className="search_box" placeholder="Search IMDb"/>
            <div className="search_icon">
            <SearchIcon/>
            </div>
        </div>
    )
}
export default Search;