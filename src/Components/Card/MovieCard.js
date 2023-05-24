import React from 'react';
import "./card.css";
import {Col,Row} from "react-bootstrap";
import { useNavigate,Link} from "react-router-dom";
import "../../Pages/Pating Page/rating.css";

function MovieCard({data,bg}){

    const navigate=useNavigate();

    console.log(bg);
    return<div>
       <div className={'m-2 ${bg "background1":"background2"}'}>
            <Row>
                <Col sm={8}>
                    <div className="d-flex">

                        {/*<div className="Col-1">*/}
                            <img src={data.img} alt="" className="movie1"/>

                        {/*</div>*/}
                        {/*<div className="Col-7">*/}
                            <div className=''><div onClick={()=>{navigate("/rating",{state:data.id})}}>{data.rank} &nbsp;<span className=''>{data.title}</span>{data.year}</div></div>
 
                  </div>
                </Col>

                <Col sm={2}>
                    <div>
                        {data.rating}
                    </div>
                </Col>

            </Row>
       </div>
    </div>

}

export default MovieCard;