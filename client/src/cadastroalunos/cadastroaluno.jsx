import React from 'react'
import './cadastroaluno.css'

export default function(){
    return(
        <div className="container">
           <form className="row g-3 containermain">
                <div className="col-md-6">
                    <label for="inputnome" className="form-label labelsform">Nome Completo:</label>
                    <input type="text" className="form-control" id="inputnome" placeholder="Digite seu nome"/>
                </div>
                <div className="col-md-6">
                    <label for="inputemail" className="form-label labelsform">Email:</label>
                    <input type="email" className="form-control" id="inputemail" placeholder="Informe seu email"/>
                </div>
                <div className="col-md-6">
                    <label for="inputtel" className="form-label labelsform">Telefone:</label>
                    <input type="tel" className="form-control" id="inputtel" placeholder="Informe seu telefone"/>
                </div>
                <div className="col-md-6">
                    <label for="inputcpf" className="form-label labelsform">CPF:</label>
                    <input type="text" className="form-control" id="inputcpf" placeholder="Informe seu cpf"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label labelsform">Endereço:</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Digite seu endereço"/>
                </div>
                <div className="col-12">
                    <label for="inputcurso" className="form-label labelsform">Curso:</label>
                    <input type="text" className="form-control" id="inputcurso" placeholder="Curso de interesse"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label labelsform">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Informe sua cidade"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label labelsform">Estado</label>
                    <select id="inputState" className="form-select">
                        <option selected>Escolha...</option>
                        <option value='SP'>SP</option>
                        <option value='RJ'>RJ</option>
                        <option value='MG'>MG</option>
                        <option value='ES'>ES</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label labelsform">CEP</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                   <button type="submit" className="btn btn-primary col-md-3">Cadastrar aluno</button>
                         
                    <button type="reset" className="btn btn-secondary col-md-3">Cadastrar novo aluno</button>
                
             </form>
        </div>
    )
}