import React from 'react'
import './consulta.css'
import InputMask from 'react-input-mask'


export default function(){
    return(
        <div className="container">
            <div className="card maincard">
                <div className="card-header mainheader">
                <nav className="navbar navbar-light">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Digite o ID do aluno" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Buscar</button>
                        </form>
                </nav>
                </div>
                <div className="card-body mainbody"> 
                    <div className="col-md-6">
                            <label for="inputnome" className="form-label labelsform">Nome Completo:</label>
                            <input type="text" className="form-control" id="inputnome" name="nome" placeholder="Digite seu nome"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputemail" className="form-label labelsform">Email:</label>
                            <input type="email" className="form-control" id="inputemail" name="email"  placeholder="Informe seu email"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputtel" className="form-label labelsform">Telefone:</label>
                            <InputMask mask="(99)99999-9999" type="tel" className="form-control" id="inputtel" name="telefone"  placeholder="Informe seu telefone"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputcpf" className="form-label labelsform">CPF:</label>
                            <InputMask mask="999.999.999-99" type="text" className="form-control" id="inputcpf" name="cpf"  placeholder="Informe seu cpf"/>
                        </div>
                        <div className="col-12">
                            <label for="inputcurso" className="form-label labelsform">Curso:</label>
                            <input type="text" className="form-control" id="inputcurso" name="curso"  placeholder="Curso de interesse"/>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label labelsform" >CEP</label>
                            <InputMask mask="99999-999" type="text" className="form-control" id="inputZip" name="cep" placeholder="Informe seu CEP"/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label labelsform">Endereço:</label>
                            <input type="text" className="form-control" id="inputAddress" name="endereco"  placeholder="Digite seu endereço"/>
                        </div>
                        <div className="col-12">
                            <label for="inputbairro" className="form-label labelsform">Bairro:</label>
                            <input type="text" className="form-control" id="inputbairro" name="bairro" placeholder="Digite seu bairro"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label labelsform">Cidade</label>
                            <input type="text" className="form-control" id="inputCity" name="cidade"  placeholder="Informe sua cidade"/>
                        </div>
                        <div className="col-12">
                            <label for="inputState" className="form-label labelsform">Estado:</label>
                            <input type="text" className="form-control" id="inputState" name="estado" placeholder="Digite seu cep"/>
                        </div>
                </div>    
            </div>
        </div>
    )
}