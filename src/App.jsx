import { useEffect, useState } from 'react'
import './App.css'
import { AxiosInstance } from './utils/axiosInstance'
import Gallery from './components/Gallery/Gallery';

function App() {

  const [data, setData] = useState();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(1);

  useEffect(() =>{
      setTimeout(()=>{
          if(limit < 20){
            setLimit((l) => l + 1);
          }
      }, 500)
  }, [limit])

  useEffect(() =>{
    handleImageFetching();
  }, [limit]);

  async function handleImageFetching(){
    try{
        const Info = await AxiosInstance.get('/', {
          params : {
            offset : {offset},
            limit
          }
        });

        const { photos } = Info.data;
        setData(photos);

    }catch(err){
        return console.log(err.message);
    }
  } 

  return (
    <>
       { data && <Gallery  list={data}/>}
    </>  
  )
}

export default App
