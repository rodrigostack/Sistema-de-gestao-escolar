import React from 'react'
import './cadastrocursos.css'

export default function(){
    return(
        <div className="container">
            <form className="row g-3 containermain">
                <div className="col-md-6">
                    <label for="inputnome" className="form-label labelsform">Titulo Curso:</label>
                    <input type="text" className="form-control" id="inputnome"  placeholder="Digite titulo do curso"/>
                </div>
      
                <div className="col-md-6">
                    <label for="inputtel" className="form-label labelsform">Duraçao curso:</label>
                    <input type="text" className="form-control" id="inputtel"  placeholder="Digite a duraçao"/>
                </div>
                <div className="col-md-6">
                    <label for="inputtel" className="form-label labelsform">Valor da Mensalidade:</label>
                    <input type="text" className="form-control" id="inputtel"  placeholder="Valor da Mensalidade"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label labelsform">Modulos do curso:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
               
               
                <div className="col-md-12">
                <button type="submit" className="btn btn-primary col-md-3">Cadastrar Curso</button>
                         
                <button type="reset" className="btn btn-secondary col-md-3">Cadastrar novo Curso</button>
                </div>
                   
                
             </form>

        </div>
    )
}