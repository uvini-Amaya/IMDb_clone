import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "../../Components/Card/MovieCard";
function Project(){
    
    const [data,setData]=useState([]);
    

    useEffect(()=>{
        getData();
    },[])

    const getData=()=>{
        axios({
            method : 'get',
            url : 'https://imdb-top-100-movies.p.rapidapi.com',
            headers : {
                'X-RapidAPI-Key':'b466727290msh5fe92ca56aed55ep13db93jsn2902943a960b'
            }
        })
            .then(function (response){
                const array=[];
                response.data.forEach((val)=>{

                    array.push({
                       id:val.id,
                       img:val.thumbnail,
                       title:val.title,
                       year:val.year,
                       rating:val.rating
                    })
                })
                setData(array);

            }).catch(function(err){
                console.log(err);
        });
    }
    return(
       <div className=" d-flex justify-content-center align-items-center">
           <div className=" m-0 mt-4">
               {data.map((val,index)=>(
                   <MovieCard data={val} bg={index%2==1} index={index+1} key={index}/>
                   ))}
           </div>

       </div>
    )
}

export default Project;