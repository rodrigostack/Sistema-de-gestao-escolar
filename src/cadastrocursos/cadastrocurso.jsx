import React,{useState} from 'react'
import './cadastrocursos.css'
import Axios from 'axios'


export default function(){
    const[curso,setCurso] = useState();
    const[duracao,setDuracao] = useState();
    const[mensalidade,setMensalidade] = useState();
    const[modulos,setModulos] = useState();

    const submit = () => {
        Axios.post("http://localhost:3001/api/cursos",{
            curso: curso, duracao: duracao, mensalidade: mensalidade, modulos: modulos
        }).then(() => { c
            alert('Curso cadastrado com sucesso');
        });

    }
   
    return(
        <div className="container">
            <form className="row g-3 containermain">
                <div className="col-md-6">
                    <label for="inputnome" className="form-label labelsform">Titulo Curso:</label>
                    <input type="text" className="form-control" id="inputnome" name="curso" onChange={e => setCurso(e.target.value)} value={curso} placeholder="Digite titulo do curso"/>
                </div>
      
                <div className="col-md-6">
                    <label for="inputtel" className="form-label labelsform">Duraçao curso:</label>
                    <input type="text" className="form-control" id="inputtel" name="duracao" onChange={e => setDuracao(e.target.value)} value={duracao} placeholder="Digite a duraçao"/>
                </div>
                <div className="col-md-6">
                    <label for="inputtel" className="form-label labelsform">Valor da Mensalidade:</label>
                    <input type="text" className="form-control" id="inputtel" name="mensalidade" onChange={e => setMensalidade(e.target.value)} value={mensalidade} placeholder="Valor da Mensalidade"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label labelsform">Modulos do curso:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="modulos" onChange={e => setModulos(e.target.value)} value={modulos} rows="3"></textarea>
                </div>
               
               
                <div className="col-md-12">
                <button type="submit" onClick={submit} className="btn btn-primary col-md-3">Cadastrar Curso</button>
                         
                <button type="reset" className="btn btn-secondary col-md-3">Cadastrar novo Curso</button>
                </div>
                   
                
             </form>

        </div>
    )
}