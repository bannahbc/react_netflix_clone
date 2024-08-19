import React, { useEffect, useRef, useState } from 'react'
// import cards from '../../Assests/cards/Cards_data'
import './TitleCard.css'
import { Link } from 'react-router-dom';
function TitleCard({title,category}) {
    const cardRef = useRef();
    const handleWheel = event =>{
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaY
    }
    const [apiData,setApiData] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGViNmYwMWE2MDk2MWQyMjdjODYxZjZkODk0NmY1MSIsIm5iZiI6MTcyMzg3OTYxOC4wMzcwMjUsInN1YiI6IjY2YmE0NjhhYjE2YTA2Mjk0M2Q3NmY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tERrix38sSbRHdK0BJlDY-I8-gpc9Tc5ojKZCAUzkRI'
        }
      };
      
      

    useEffect(()=>{
        cardRef.current.addEventListener('wheel',handleWheel)

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));
    },[])
  return (
    <div className='title-card'>
        <h2 className='title'>{title?title:"Popular Movies"}</h2>
        <div className="cards" ref={cardRef}>
        {
            apiData.map((card,index)=>{
                return <Link to={`/player/${card.id}`} className="card-list" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`} alt="" />
                    <p>{card.original_title}</p>
            
                </Link>
            })
        }
        </div>
    </div>
  )
}

export default TitleCard