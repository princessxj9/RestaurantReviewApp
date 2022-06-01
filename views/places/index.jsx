const React = require('react')


function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-sm-6'>
          <h2>{place.name}</h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}></img> 
          <p className='text-center'>
            Located in {place.city}, {place.state}
          </p>    
            </div>
      )
    })
return (
        <main>
            <h1>Place Your Reviews Here</h1>
           <div className='row'>
           {placesFormatted}
           </div>
        </main>
   
)}


module.exports = index
