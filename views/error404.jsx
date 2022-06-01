const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src='/images/404errorsorry.jpg' alt='sorry, please forgive me, error 404'></img>
                <div>
                Photo by <a href="https://unsplash.com/photos/L7TkIKc0XnU">mark tulin</a> on <a href="https://unsplash.com/s/photos/sorry">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
