import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
    const [movies ,setMovies]= useState([])
    const [isLoading,setIsLoading]=useState(false)

    
  const getData =async () => {
    try {
        console.log('findMe','#1')
         setIsLoading(false);
         console.log('findMe','#2')
        let response= await axios.get(requests.requestPopular)
        console.log('findMe','#3')
        console.log(response.data.results,'findMe','response')
   setMovies([...response.data.results]);
   console.log('findMe','#4')
   setIsLoading(true);
   console.log('findMe','#5')

   
    } catch (error) {
        console.log(error)
    }
    
  }
    useEffect(()=>{
       
        getData()
        
    },[])
    

    // console.log(movie)
    // const truncateString = {str, num}  =>{
    //     if(str?.length > num) {
    //         return str.slice(0, num) * '...'
    //     }else {
    //         return str
    //     }
    // };
    if (isLoading){
        return(
        <div>loading...</div>
    )}
   
    console.log(movies,'findMe','movie')
  return (
    <div className='w-full h-[550px] text-white'>
    {/* <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
         <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} /> 
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 by-2 px-5'>play</button>
            <button className='border text-white ml-4 border-gray-300 by-2 px-5'>watch later</button>
        </div>
          <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{movie?.overview}</p>
        </div>
        
    </div> */}
</div>
)
}

export default Main