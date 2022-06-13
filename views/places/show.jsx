const React = require('react')
const Def = require('../default')

  function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div className="container">

          <div className="rowA">

            <div className="col-sm-8">
              <img src={data.place.pic} alt={data.place.name} />
            </div>

            <div className="col-sm-4">
              <p className='text-center'>
                Located in {data.place.city}, {data.place.state}
              </p>
            </div>

            <div className="col-sm-3">
             <h2>Comments</h2>
               {comments}
            </div>
          </div>

          <div className="rowB">

          <div className="col-sm-6">
             <h3>Description</h3>
             <h4>{data.place.showEstablished()}</h4>
            </div>

            <div className="col-sm-3">

              <div className="form-check">
                <input
                className="form-check-input" 
                type="radio"
                name="flexRadioDefault" 
                id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  1 stars
                </label>
              </div>

              <div className="form-check">
                <input 
                className="form-check-input" 
                type="radio" name="flexRadioDefault" 
                id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  2 stars
                </label>
              </div>

              <div className="form-check">
                <input 
                className="form-check-input" 
                type="radio" 
                name="flexRadioDefault" 
                id="flexRadioDefault1"/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                   3 stars
                  </label>
              </div>

              <div className="form-check">
                <input 
                className="form-check-input" 
                type="radio" 
                name="flexRadioDefault" 
                id="flexRadioDefault2"/>
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    4 stars
                  </label>
              </div>

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
/*<h3> <label htmlFor="rant">Rant?</label> </h3>
                 <textarea id="rant" name="rant" rows="4" cols="50" >

                 </textarea> */


