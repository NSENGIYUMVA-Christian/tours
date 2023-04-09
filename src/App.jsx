import {useState, useEffect} from "react" 
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
const [isLoading, setLoading] = useState(true)
const [tour, settour] = useState([])

//remove Tour Item
const removetour = (id)=>{
  const newTour = tour.filter((tr)=> tr.id !== id )
  settour(newTour)
}

//fetching data function
const getData = async () =>{
  setLoading(true)
 try {
  const resolve = await fetch(url)
  const data = await resolve.json()
  settour(data)
 console.log(data)
 } catch (error) {
  console.log(error)
 }
 setLoading(false)
}


useEffect(()=>{
getData()
},[])

if(isLoading)
{
return <main>
  <Loading/>
</main>
}
// refetch function in case all tours has been removed
if(tour.length === 0)
{
  return <main>
    <div className="title">
    <h2>no tour left</h2>
    <button onClick={()=>getData()} style={{marginTop:"2rem"}} className="btn" >refresh</button>
    </div>
  </main>
}

  return <main>
    <Tours tours={tour} remove={removetour} />
  </main>;
};
export default App;
