import { useEffect, useState } from 'react'
import './App.css'
import { AxiosInstance } from './utils/axiosInstance'
import Gallery from './components/Gallery/Gallery';

function App() {

  let photos;
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(0);

  
  useEffect(() =>{
    handleImageFetching();
  }, []);
  
  async function handleImageFetching(){
    try{
      const Info = await AxiosInstance.get('/', {
        params : {
          offset : {offset},
          limit : 20
        }
      });
      
      photos = Info.data.photos;
      setData([...data, photos[0]])
      
    }catch(err){
      return console.log(err.message);
    }
  } 

  useEffect(() =>{
      setTimeout(()=>{
          if(limit < 20){
            photos &&   
              setLimit((l) => l + 1);
              console.log(photos[limit]);
              setData([...data, {...photos[limit]}]);
            
          }
      }, 500)
  }, [limit])

  return (
    <>
       { data && <Gallery  list={data}/>}
    </>  
  )
}

export default App
