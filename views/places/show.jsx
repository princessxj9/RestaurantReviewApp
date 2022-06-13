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
              <img src={data.place.pic} alt={data.place.name} />
            </div>

            <div className="col-sm-4">
              <p className='text-center'>
                Located in {data.place.city}, {data.place.state}
              </p>
            </div>

            <div className="col-sm-3">
           <h3> <label htmlFor="rant">Rant?</label> </h3>
                 <textarea id="rant" name="rant" rows="4" cols="50" >

                 </textarea>
            </div>
          </div>

          <div className="rowB">

          <div className="col-sm-6">
             <h3>Description</h3>
             <h4>{data.place.showEstablished()}</h4>
            </div>

            <div className="col-sm-3">

              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                  1 stars
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                  2 stars
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">
                   3 stars
                  </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label class="form-check-label" for="flexRadioDefault2">
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
