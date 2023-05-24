import React from "react";
import "../../Pages/Homepage/Style.css";
import HomeComponent1 from "../../Components/HomeComponent/HomeComponent1";
import HomeComponent2 from "../../Components/HomeComponent/HomeComponent2";
import "../Homepage/Style.css";
import Project from "./Project";
import Table from "../../Components/HomeComponent/HomeTable";

function HomePageGrid(){
    return(
       <>
           <div className="w-100 ">
           <div className="color_bg">
                <div className="homepage1">
                    <div className="row justify-content-center">
                        <div className="col-8 border-end" >
                           <HomeComponent1/>
                           <Table/>
                           <Project/>
                        </div>
                        <div className="col-4">
                            <HomeComponent2/>
                        </div>

                    </div>
                </div>
            </div>
             

           </div>
       </>

    )
}

export default HomePageGrid;