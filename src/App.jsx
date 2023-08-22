import { useEffect, useState } from 'react'
import './App.css'
import { AxiosInstance } from './utils/axiosInstance'
import Gallery from './components/Gallery/Gallery';

function App() {

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() =>{
    handleImageFetching();
  }, [offset]);
  
  async function handleImageFetching(){
    try{
      const Info = await AxiosInstance.get('/', {
        params : {
          offset : offset,
          limit : 20
        }
      });
      
        const { photos }= Info.data;

        let clearTimer = setInterval(() => {
        
              setData((d) => {
                if(d.length === 19){
                    clearInterval(clearTimer);
                }
                  return [...d, photos[d.length]];
              })

        }, 500);
      
    }catch(err){
      return console.log(err.message);
    }
  } 

   function handleNextpage(){
        setOffset(offset + 20);
        setData([]);
   }

   function handlePrevpage(){
    if(offset !== 0){
      setOffset(offset - 20);
      setData([]);
    }
}

  return (
    <>
       { data && <Gallery prev={handlePrevpage} next={handleNextpage}  list={data}/>}
    </>  
  )
}

export default App
