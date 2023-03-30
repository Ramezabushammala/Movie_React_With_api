
import { Container } from 'react-bootstrap';
import './App.css';
import MoviesList from './Component/MoviesList';
import NavBar from './Component/NavBar';
import {BrowserRouter,Routes,Route}from "react-router-dom"
import MovieDetails from './Component/MovieDetails';


function App() {

  return (
    <div className='font color-body'>
      <NavBar />
      <Container>
   <BrowserRouter> 
   <Routes>
    <Route path='/' element={<MoviesList />}/>
     <Route path='/movie/:id' element={<MovieDetails/>}/>
       {/* useParams change id to iddd and show consel*/}
   </Routes>
 </BrowserRouter>
      </Container>
      
    </div>
  );
}
export default App;
