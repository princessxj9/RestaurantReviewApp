const React = require('react')
const Def = require('../default')


function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div className="container">

          <div className="rowA">

            <div className="col-sm-8">
            <img src={data.place.pic} alt={data.place.name}/>
                <p className='text-center'>
                    Located in {data.place.city}, {data.place.state}
                </p>
            </div>

            <div className="col-sm-4">
             place/location
            </div>

          </div>

          <div className="rowB">

            <div className="col-sm-3">
            rating
            </div>

            <div className="col-sm-3">
             rave
            </div>

            <div className="col-sm-3">
             rant
            </div>

          </div>

        </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  )
}


module.exports = show
