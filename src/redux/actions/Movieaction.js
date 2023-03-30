import { AllMOVIS ,MovieApi } from "../types/MoviesType"
import axios from 'axios';

export const getallMoviess =  ()=>{

     return async(dispatch)=>{

         const res = await axios.get(MovieApi);
         dispatch({type:AllMOVIS ,data:res.data.results,pages:res.data.total_pages})
     }
}
// وهنا الديسبتش عشان ترجع الاوبجكت زيها زي الريترن
// الريدكس لا تاخذ الاسنك اويت الا بهير اوردر فنكشن وتعمل الثنك ب الستور

export const getallMovieSearch =  (word)=>{

    return async(dispatch)=>{

        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`);
        dispatch({type:AllMOVIS ,data:res.data.results,pages:res.data.total_pages})
    }
}

export const getallMoviePage =  (page)=>{

    return async(dispatch)=>{

        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`);
        dispatch({type:AllMOVIS ,data:res.data.results,pages:res.data.total_pages})
    }
}