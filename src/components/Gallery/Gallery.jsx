import Card from "../Card/Card";

function Gallery({list}) {
    return (
        <main>
            <h1>My Photo Gallery</h1>
            <div>
                {
                    list.map((el) =>{
                        <Card {...el}/>
                    })
                }
            </div>

            <div>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </main>
    )
}

export default Gallery;