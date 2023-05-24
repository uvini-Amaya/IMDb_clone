import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import img1 from "../../Images/img1.jpg";
import "./Navbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from "../Search/Search";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
// import WatchlistIcon from '@mui/icons-material/';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import button from "react-bootstrap/Button";
function Navbar() {
    return (
        <div className="flex">
             <img src={img1} className="nav_image"/>

            <IconButton className="menu_icon" style={{ color: '#fff' }}>
                <MenuIcon />
                <div className="title">MENU</div>
            </IconButton>

            <div className="search_flex">
                <NavDropdown href="#all" title="All" id="basic-nav-dropdown" className='nav_inside'>
                    <div className="dropdown">
                        <NavDropdown.Item className="item1">All</NavDropdown.Item>
                        <NavDropdown.Item >Title</NavDropdown.Item>
                        <NavDropdown.Item >Celebs</NavDropdown.Item>
                        <NavDropdown.Item >Companies</NavDropdown.Item>
                        <NavDropdown.Item >Keywords</NavDropdown.Item>
                        <NavDropdown.Item >Advanced Search</NavDropdown.Item>

                        {/*<Nav.Link className="navinside"><Link to={'/home'} >Homepage</Link></Nav.Link>*/}

                    </div>
                </NavDropdown>

                <SearchBar/>

                {/*<input type="search" className="search"/>*/}

                {/*<i className="fas fa-search"></i>*/}

         </div>
            <button className="mt-1 bg-black">
                <div className="flex4">
                    <div className="IMDb">IMBd</div>
                    <div className="Pro">Pro</div>
                </div>
            </button>

            <div className="flex4">
                <div className="mt-2 text-white" ><BookmarkAddIcon/></div>
                <div className="IMDb">Watchlist</div>
            </div>


            <div className="IMDb">SignIn</div>

            <NavDropdown href="#language" title="En" id="basic-nav-dropdown" className='navinside'>

                    <NavDropdown.Item >e</NavDropdown.Item>
                    <NavDropdown.Item  >v</NavDropdown.Item>
                    <NavDropdown.Item >x</NavDropdown.Item>

            </NavDropdown>
        </div>
    );
}
export default Navbar;