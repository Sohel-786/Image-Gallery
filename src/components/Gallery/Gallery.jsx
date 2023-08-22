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
                <button className='button-85' onClick={prev}>Prev</button>
                <button className='button-85' onClick={next}>Next</button>
            </div>
        </main>
    )
}

export default Gallery;