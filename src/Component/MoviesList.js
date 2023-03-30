import React from 'react'
import {Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Paginationn from './Paginationn'
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getallMoviess } from '../redux/actions/Movieaction';
export default function MoviesList() {
  
  const [movies ,setMovies]=useState([]);
  //get all movies by axios
  const dispatch =useDispatch();
 const dataMovies = useSelector((state)=> state.moviess)

useEffect(()=>{
   dispatch(getallMoviess())
}, []);

useEffect(()=>{
  setMovies(dataMovies)
},[dataMovies])
  
  return (
    <Row className='mt-3'>
        {movies.length >=1 ?(movies.map((mov)=>{
          return (<CardMovie key={mov.id} mov={mov}/>)  
        })):<h1 className='text-center p-2'>Not found movies</h1>}

        {movies.length >=1 ?(<Paginationn/>):null}
    </Row>
  )
}
