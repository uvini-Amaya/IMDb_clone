import React from "react";
import {Link} from "@mui/material";
import  "../../Pages/Homepage/Style.css";
import "../Card/card.css";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

function Table(){
    return(
        <>

            <div className="">
                <div className="row justify-content-start">
                    <div className="col-1 " >

                    </div>

                    <div className="col-7" >
                        <p align="left" >Rank & Title</p>
                    </div>

                    <div className="col-2">
                        <p >IMDb <b/>Ranking</p>
                    </div>

                    <div className="col-1">
                        <p align="left">Your <b/>Rating</p>
                    </div>


                    <div className="col-1">
                        <p align> </p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Table;