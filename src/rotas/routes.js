import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home/Home'
import Quemsomos from '../quemsomos/Quemsomos'
import Contatos from '../contatos/Contatos'
import Cadastroaluno from '../cadastroalunos/cadastroaluno'
import Cadastrocurso from '../cadastrocursos/cadastrocurso'
import Alunoscadastrados from '../alunos/alunoscadastrados'

export default function(){
    return(
      
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/quemsomos" component={Quemsomos}/>
            <Route exact path="/contatos" component={Contatos}/>
            <Route exact path="/cadastroaluno" component={Cadastroaluno}/>
            <Route exact path="/cadastrocurso" component={Cadastrocurso}/>
            <Route exact path="/alunoscadastrados" component={Alunoscadastrados}/>

        </Switch>
    
    )
}


