import React from 'react'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/'>
                    <div>...</div>
                </Route>
            </Switch>
        </div>
    )
}

export default App