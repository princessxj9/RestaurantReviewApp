const React = require('react')
const places = require('../models/places')

function Def(html) {
    return (
        <html>
            <head>
                <title>RESTY RANT</title>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li key="{home}">
                            <a href='/'>Home</a>
                        </li>
                        <li key="{places}">
                            <a href='/places'>Places</a>
                        </li>
                        <li key="{newPlace}">
                            <a href='/places/new'>Add Places</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
