import React from 'react'
import './Home.css'
import logo from '../imagens/smart.png'

export default function(){
    return(
        <div className="container classfundo">
            <div className="row">
                
                <div className="col-md-5">
                    <img src={logo} className="img-fluid imghome"/>
                   
                </div>
                <div className="col-md-7">
                  <h2 className="h1">A Smart School</h2><br/>
                  <p>Sistema de gestao escolar que auxilia em gerenciamento de rotinas escolares</p><br/>
                  <p>Cadastro de alunos, cursos novos, calculos de notas, catalogo de cursos, cancelamentos e muito mais...</p><br/>
                  <p>Trabalhe agora mesmo com nosso sistema e tenha produtividade com todas as rotinas escolares</p><br/>
                </div>
               
            </div>
        </div>
    )
}
