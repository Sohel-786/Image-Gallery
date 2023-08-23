import { useEffect, useState } from 'react'
import './App.css'
import { AxiosInstance } from './utils/axiosInstance'  // Instance of Axios
import Gallery from './components/Gallery/Gallery';
import ImageDetails from './components/ImageDetails/ImageDetails';
import { Route, Routes } from 'react-router-dom';

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
        setData(photos);
      
    }catch(err){
      return console.log(err.message);
    }
  } 

   function handleNextpage(){
        setOffset(offset + 20);
        
   }

   function handlePrevpage(){
    if(offset !== 0){
      setOffset(offset - 20);
    }
}

  return (
    <>

      <Routes>
          <Route path='/'  element={ data && <Gallery offset={offset} prev={handlePrevpage} next={handleNextpage}  list={data}/>} />

          <Route path='details/:id' element={<ImageDetails />}/>
          <Route path='*' element={<h2>Page Not Found</h2>}/>
          
      </Routes>
       
    </>  
  )
}

export default App
