import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home/Home'

export default function(){
    return(
      
        <Switch>
            <Route exact path="/home" component={Home}/>
        </Switch>
    
    )
}


