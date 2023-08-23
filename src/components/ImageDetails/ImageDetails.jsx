import './ImageDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../../utils/axiosInstance";

function ImageDetails(){
    
    const {id} = useParams();
    const [details, setDetails] = useState();
    const [error , setError] = useState(false);
    
    useEffect(() =>{
        downloadDetails();
    }, [])

   async function downloadDetails() {

        const detail = await AxiosInstance.get(`/${id}`);

        if(detail.data.photo === null){
            setError(true);
            return;
        }

        const { photo } = detail.data;

        setDetails({
            desc : photo.description,
            id : photo.id,
            title : photo.title,
            url : photo.url
        });
    }

    if(error){

        return (
            <div style={{textAlign : 'center'}}>
                <h2>404 Not Found</h2>
            </div>
        )
    }

    return(
            <>
                { details && <div className='info_container'>
                        <div>
                            <img src={details.url} alt="photo" />
                        </div>
                        <div>
                            <h2>
                                {details.title}
                            </h2>
                            <p>
                                {details.desc}
                            </p>
                        </div>
                    </div>
                }
            </>
            
    )
}

export default ImageDetails;