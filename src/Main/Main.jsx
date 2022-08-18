import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(false);
      let response = await axios.get(requests.requestPopular)
      setMovies(response.data.results);
      setIsLoading(true);
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getData()
  }, []);

  if (isLoading && movies.length > 0) {
    return (
      <div>
        {movies.map((item) => (
          <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-5xl font-bold'
                style={{
                  color: 'red'
                }}
              >{item.title}</h1>
              <div className='my-4'>
                <button className='border bg-gray-300 text-black border-gray-300 by-2 px-5'>play</button>
                <button className='border text-white ml-4 border-gray-300 by-2 px-5'>watch later</button>
              </div>
              <p className='text-gray-400 text-sm'>Released: {item.release_date}</p>
              <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{item.overview}</p>
            </div>

          </div>
        ))}
      </div>


    )
  }
 
}

export default Main