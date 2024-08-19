import React,{useEffect,useState} from "react";
import back_icon from '../../Assests/back_arrow_icon.png'
import './Player.css'
import { useNavigate, useParams } from "react-router-dom";
const Player = ()=>{
    const {id} = useParams()
    const [apiData,setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
      })
    const navigate = useNavigate();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGViNmYwMWE2MDk2MWQyMjdjODYxZjZkODk0NmY1MSIsIm5iZiI6MTcyMzQ4Mzk3Ny40NTA0OTEsInN1YiI6IjY2YmE0NjhhYjE2YTA2Mjk0M2Q3NmY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5ILSEXObwK_IYjEvcLAcc6UCiLsaf9ASmeRQKBkb0U'
        }
      };
      
      useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    
        },[])
    return(
        <div className="player">
            <img src={back_icon} alt="" onClick={()=>{navigate(-2)}} />
            <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" frameBorder="0" allowFullScreen title="Trailer"></iframe>
            <div className="info">
            <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
            </div>
        </div>
    )
}
export default Player