import './ImageDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../../utils/axiosInstance";

function ImageDetails(){
    
    const {id} = useParams();
    const [details, setDetails] = useState();
    
    useEffect(() =>{
        downloadDetails();
    }, [])

   async function downloadDetails() {

        const detail = await AxiosInstance.get(`/${id}`);

        if(!detail.status === 200){
            return (
                <div>
                    <h1>Internal Server Error</h1>
                </div>
            )
        }

        if(!detail.data.success){
            return (
                <div>
                    <h1>404 Not Found</h1>
                </div>
            )
        }

        const { photo } = detail.data;

        setDetails({
            desc : photo.description,
            id : photo.id,
            title : photo.title,
            url : photo.url
        });
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