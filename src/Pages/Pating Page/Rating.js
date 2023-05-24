import React, {useEffect, useState} from "react";
import WindowIcon from '@mui/icons-material/Window';
import ShareIcon from '@mui/icons-material/Share';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "./rating.css";
import img1 from "../../Images/img1.png";
import img2 from "../../Images/img2.png";
import Divider from "@mui/material/Divider";
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link, useLocation} from "react-router-dom";
import img3 from "../../Images/img3.jpg";
import ReactPlayer from 'react-player'
import axios from "axios";

function Rating() {
    const state=useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log(state.state);
        getData();
    }, [])

    const getData = () => {

        axios({
            method: 'get',
            url: 'https://imdb-top-100-movies.p.rapidapi.com/'+state.state,
            headers: {
                'X-RapidAPI-Key': 'b466727290msh5fe92ca56aed55ep13db93jsn2902943a960b'
            }
        })
            .then(function (response) {
                setData(response.data);
                console.log(response.data);
            }).catch(function (error) {
            console.log(error);
        });
    }
        return (

            <div className="body">
                <div className="">
                    <div className="row justify-content-start">
                        <div className="col-5 ">
                        </div>
                        <br/>
                        <div className="col-1">
                            <p align="left">Cast & crew</p>
                        </div>
                        <div className="col-1">
                            <p>User reviews</p>
                        </div>
                        <div className="col-1">
                            <p align="left">Trivia</p>
                        </div>
                        <div className="col-1">
                            <p><b>IMDbPro</b></p>
                        </div>
                        <div className="col-1">
                            <div class="d-flex">
                                <WindowIcon/>
                                <p><b>All Topics</b></p>
                            </div>
                        </div>
                        <div className="col-2">
                            <ShareIcon/>
                        </div>
                    </div>

                </div>


                <div className="">
                    <div className="row justify-content-start">
                        <div className="col-7 ">
                            <div className="fontsizebig"><b>{data?.title}</b></div>
                            {/*<div className="fontsizebig"><b>{id.name}</b></div>*/}

                        </div>
                        <div className="col-1">
                            <p align="left">IMDb RATING</p>
                            {data?.rating}

                        </div>
                        <div className="col-1">
                            <p>YOUR RATING</p>
                            <div className="d-flex">
                                <StarOutlineIcon/>
                                <div className="blue_text"><b>RATE</b></div>
                            </div>
                        </div>
                        <div className="col-1">
                            <p align="left">POPULARITY</p>
                        </div>

                    </div>

                </div>

                <div className="d-flex">
                    <div className="aa">
                        {data?.year}
                    </div>

                    <div>
                        R.
                    </div>

                    <div>
                        22h 22min
                    </div>
                </div>

                <br/>
                <div className="">
                    <div className="row justify-content-start">
                        <div className="col-8 ">
                            <div className="d-flex">

                                <img src={data?.image} className="aa2"/>
                                <ReactPlayer
                                    url={data?.trailer}
                                    controls={true} className="ab"/>

                            </div>

                        </div>
                        <div className="col-4">
                            <img src={img1} className="ratingimg"/>

                            <br/>
                            <img src={img2} className="ratingimg"/>
                            <br/>

                        </div>

                    </div>

                </div>


                <br/>
                <br/>
                <div className="">
                    <div className="row justify-content-start">
                        <div className="col-8 ">
                            <div className="letters">
                                <div className='radius'>
                                    Drama
                                </div>

                                Over the course of several years, two convicts form a friendship, seeking consolation
                                and, eventually, redemption through basic compassion.
                                <br/>
                                <Divider style={{background: 'white'}} variant="middle"/>
                                <br/>
                                <div className="d-flex">
                                    <div>Director</div>
                                    <div className="mr"><Link to={"/director"}>{data?.director}</Link></div>
                                </div>


                                <br/>
                                <Divider style={{background: 'white'}} variant="middle"/>
                                <br/>
                                <div className="d-flex">
                                    <div>Writers</div>
                                    <div className="mr"><Link to={"/writers"}>{data?.writers}</Link></div>
                                </div>


                                <br/>
                                <Divider style={{background: 'white'}} variant="middle"/>
                                <br/>
                                <div className="flex543">
                                    <div className="d-flex">
                                        <div>Stars</div>
                                        <div className="mr"><Link to={"/star"}>Stars</Link></div>
                                    </div>
                                    <ArrowForwardIosIcon/>
                                </div>


                                <br/>
                                <Divider style={{background: 'white'}} variant="middle"/>
                                <br/>
                                <div className="d-flex">
                                    <div><b>IMBd</b></div>
                                    <div><b className="blue">PRO</b></div>

                                    <div className="mr"> See production, box office & company info</div>
                                    <div className="mr"><AssistantDirectionIcon/></div>
                                </div>


                            </div>


                        </div>
                        <div className="col-4">
                            <br/>
                            <br/>
                            <br/>

                            <div className="d-flex">
                                <div className="one">
                                    <AddIcon/>
                                    <b>Add To Watchlist</b>
                                </div>
                                <div className="two"><KeyboardArrowDownIcon/></div>


                            </div>

                             <div className="d-flex">
                            <div>
                                <Link to={"/user"}>user viewers</Link>

                            </div>

                            <div className="mr">
                                <Link to={"/critic"}>critic viewers</Link>
                            </div>

                        </div>
                            <br/>
                            <div>
                                <Link to={"/score"}>score</Link>
                            </div>


                        </div>

                    </div>

                </div>


            </div>

        )
    }
    export default Rating;