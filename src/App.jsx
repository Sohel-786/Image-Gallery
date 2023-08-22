import { useEffect, useState } from 'react'
import './App.css'
import { AxiosInstance } from './utils/axiosInstance'
import Gallery from './components/Gallery/Gallery';

function App() {

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

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
      
        const { photos }= Info.data;

        let count = 0;
        let id = setInterval(() => {
            console.log('sohel', count, id);
            if(count < 20){  
              setData([...data, photos[count]])
              console.log(data);
              count++;
            }else{
                clearInterval(id);
            }
        }, 500);
      
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
