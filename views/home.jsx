const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Review! Rave! Rant!</h1>
              <div>
                <img height="300" width="500" src="/images/mushroomburger-fries.jpg" alt="Mushroom Burger With Fries"></img>
                <div> 
                  Photo by <a href="https://unsplash.com/photos/bMvXpKuRN3g"> GoodEats YQR</a> on <a href="https://unsplash.com/s/photos/free-food">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Return to Places Page</button>
              </a>
          </main>
          
      </Def>
    )
  }
  
module.exports = home
