import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Featured Listed Property</h2>
            </div>
            <div>
                <p className='para'>Real estate can be bought, sold, leased, or rented, and can be a <br />valuable investment opportunity. The value of real estste can be...</p>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} 
                        ></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;