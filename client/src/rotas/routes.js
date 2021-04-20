import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home/Home'
import Quemsomos from '../quemsomos/Quemsomos'

export default function(){
    return(
      
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/quemsomos" component={Quemsomos}/>
        </Switch>
    
    )
}


