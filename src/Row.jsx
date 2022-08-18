import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';


const Row = ({title ,fetchURL}) => {
    // const [movies, setMovies] = useState([])
    
   

    //  useEffect(()=> {
    //    axios.get(fetchURL).then((Response)=>{
    //     setMovies(Response.data.results);
    //    });
    //  },[fetchURL]);

  return (
    // <>
    //   <h2 className='text-white font-bold md:text-xl p-4 cursor-pointer'>{title}</h2>
    //   <div className='relative flex items-center'>
    //     <div id={'slider'} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
    //      {/* {movies.map((item, id) => {
    //         return( <Movie key={id} item={item} />)
            
    //      })} */}
    //      </div>
    //   </div>
    // </>
    <h1>anything</h1>
  )
        }

export default Row