import './gallery.css'
import Card from "../Card/Card";

function Gallery({list, next}) {


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

            <div>
                <button>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </main>
    )
}

export default Gallery;