import { Button,Card,Container } from "react-bootstrap";


import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import {movies} from "./constants/movies"


function App() {
  return (
    <>
    
    <Header/>
      
      {/* <Container className="mt-5"> */}
<SearchBar/>
<div className= "d-flex flex-wrap">
{movies.map(movie(({title,id}) =>{
         return (
           <Card key ={id} className="m-3">
             <Card.Body>
               <Card.Title>
                 {title}
               </Card.Title>
               <Card.Text>
                lorem hhhhvcxdgnmkkjugvm,,mbvcx
               </Card.Text>
               <Button varient ="sucess"> Book Movie</Button>
             </Card.Body>
           </Card>
         )
          })
</div>
     
      </Container> 
    </>
       
  );
}

export default App;









