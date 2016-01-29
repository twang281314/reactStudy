import React from 'react'

class MyApp extends React.Component {
    render () {
        return <h1>Wonderful App</h1>
    }
}

React.render(<MyApp />,
    document.body)