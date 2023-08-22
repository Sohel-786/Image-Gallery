import { useEffect, useState } from 'react'
import './App.css'
import { AxiosInstance } from './utils/axiosInstance'
import Gallery from './components/Gallery/Gallery';

function App() {

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() =>{
    handleImageFetching();
  }, [])

  async function handleImageFetching(){
    try{
        const Info = await AxiosInstance.get('/', {
          params : {
            offset : {offset},
            limit : 20
          }
        });

        const { photos } = Info.data;
        
        console.log(photos);
    }catch(err){
        return console.log(err.message);
    }
  } 

  return (
    <>
        <Gallery />
    </>  
  )
}

export default App
