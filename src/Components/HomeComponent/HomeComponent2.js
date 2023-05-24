import React from "react";
import"../../Pages/Homepage/Style.css";
import Divider from "@mui/material/Divider";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import {Link} from "@mui/material";

function homeComponent2(){
    return(
        <>
        <div className="flex9" align="left">
                <Link to={'/title'} >You Have Seen</Link>
            {/*<h2>You Have Seen</h2>*/}
            <div>0/250 (0%)</div>
            <div className="flex90">
                    <CheckBoxOutlineBlankOutlinedIcon/>
                    <div> Hide titles I've seen</div>

            </div>
        </div>

            <Divider style={{ background: 'black' }} variant="middle" />
                <br/>
        <div align='left'>
            <Link to={'/charts'} >IMDb Charts</Link>
                <br/>
            <Link to={'/box_office'} >Box Office</Link>
                <br/>
            <Link to={'/popular_movies'} >Most Popular Movies</Link>
                <br/>
            <Link to={'/250movies'} >Top 250 Movies</Link>
                <br/>
            <Link to={'/english'} >Top Rated English Movies</Link>
                <br/>
            <Link to={'/popular_tv'} >Most Popular TV Shows</Link>
                <br/>
            <Link to={'/250tv'} >Top 250 TV Shows</Link>
                <br/>
            <Link to={'/indian'} >op Rated Indian Movies</Link>
                <br/>
            <Link to={'/lowest_rated'} >Lowest Rated Movies</Link>
                <br/>
            <Link to={'/top_rated_ind'} >Top Rated Indian Movies</Link>
                <br/>
            <Link to={'/action'} >Action</Link>
                <br/>
            <Link to={'/adventure'} >Adventure</Link>
                <br/>
            <Link to={'/animation'} >Animation</Link>
                <br/>
             <Link to={'/biography'} >Biography</Link>
                <br/>
            <Link to={'/comedy'} >Comedy</Link>
                <br/>
            <Link to={'/crime'} >Crime</Link>
                <br/>
            <Link to={'/drama'} >Drama</Link>
                <br/>
            <Link to={'/family'} >Family</Link>
                <br/>
            <Link to={'/fantasy'} >Fantasy</Link>
                <br/>
            <Link to={'/norin'} >Film-Noirn</Link>
                <br/>
            <Link to={'/history'} >History</Link>
                <br/>
            <Link to={'/horror'} >Horror</Link>
                <br/>
            <Link to={'/music'} >Music</Link>
                <br/>
            <Link to={'/musical'} >Musical</Link>
                <br/>
            <Link to={'family'}>Family</Link>
                <br/>
            <Link to={'mystery'}>Mystery</Link>
                <br/>
            <Link to={'romance'}>Romance</Link>
                <br/>
            <Link to={'sci-fi'}>Sci-Fi</Link>
                <br/>
            <Link to={'sport'}>Sport</Link>
                <br/>
            <Link to={'thriller'}>Thriller</Link>
                <br/>
            <Link to={'war'}>War</Link>
                <br/>
            <Link to={'western'}>Western</Link>
                <br/>
        </div>

        </>
    )
}

export default homeComponent2;

