import {useState, useEffect} from "react" 
import Loading from "./Loading";
import Tours from "./Tours";


const url = 'https://course-api.com/react-tours-project';
const myPic = `https://media.licdn.com/dms/image/D4D03AQFFov7JZu54Qg/profile-displayphoto-shrink_400_400/0/1667823935550?e=1686182400&v=beta&t=ioXd5MIbYYaPXTTc-SceDVbkSPqgh1lMopqkYFtoKVI`
// linkedIn icon
const linkedIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    class="bi bi-linkedin"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);
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
    <main style={{width:"400px", display:"flex",padding:"5px", borderTopLeftRadius:"50PX",border:"2px solid gray",}} >
      <img className="chris" src={myPic} alt="chris" width="100px"  style={{borderRadius:"50%"}} />
      <strong  style={{margin:"auto", marginLeft:"20px"}} >NSENGIYUMVA CHRISTIAN</strong>
      <a
            href="https://www.linkedin.com/in/nsengiyumva-christian-b9947a233/"
            target="blank"
            style={{margin:"auto", color:"#587ef1"}}
          >
            {linkedIn}
          </a>
    </main>
    <Tours tours={tour} remove={removetour} />
  </main>;
};
export default App;
