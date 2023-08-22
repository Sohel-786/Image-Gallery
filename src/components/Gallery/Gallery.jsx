import './gallery.css'
import Card from "../Card/Card";

function Gallery({list, next, prev}) {


    return (
        <main>
            <h1>My Photo Gallery</h1>
            <div className="img_container">
                {
                    list.map((el) =>{

                            return <Card key={el.id} {...el}/>;
            
                    })
                    
                }
            </div>

            <div className='btn'>
                <button className='button-75' onClick={prev}><span className='text'>Prev</span></button>
                <button className='button-75' onClick={next}><span className='text'>Next</span></button>
            </div>
        </main>
    )
}

export default Gallery;