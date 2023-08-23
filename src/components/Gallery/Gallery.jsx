import './gallery.css'
import Card from "../Card/Card";

function Gallery({list, next, prev, offset}) {


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
                <button disabled = { offset === 0 } className='button-75' onClick={prev}><span className='text'>Prev</span></button>
                <button disabled = { list.length < 20 || offset === 132 } className='button-75' onClick={next}><span className='text'>Next</span></button>
            </div>
        </main>
    )
}

export default Gallery;