import React,{useState} from 'react'
import './consulta.css'
import InputMask from 'react-input-mask'
import Axios from 'axios'


export default function(){
    const[id, setId] = useState();
    const[alunosdados, setAlunosdados] = useState();
    const[email, setEmail] = useState();
    const[telefone,setTel] = useState();
    const[cpf,setCpf] = useState();
    const[curso,setCurso] = useState();
    const[endereco,setEndereco] = useState();
    const[bairro,setBairro] = useState();
    const[cidade,setCidade] = useState();
    const[estado,setEstado] = useState();
    const[cep,setCep] = useState();

    const submitid = (e) =>{
        e.preventDefault();

        Axios.get(`http://localhost:3001/api/consultaalunos/${id}`,{
            
        }).then((response) => {
            setAlunosdados(response.data.aluno);
            setEmail(response.data.email);
            setTel(response.data.telefone);
            setCpf(response.data.cpf);
            setCurso(response.data.curso);
            setEndereco(response.data.endereco);
            setBairro(response.data.bairro);
            setCidade(response.data.cidade);
            setEstado(response.data.estado);
            setCep(response.data.CEP);
        }).catch((erro)=>{
            console.log(erro);
            alert("Aluno nao existente!")
        });
    }


    return(
        <div className="container">
            <div className="card maincard">
                <div className="card-header mainheader">
                <nav className="navbar navbar-light">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" name="id" value={id} onChange={e=> setId(e.target.value)} placeholder="Digite o ID do aluno" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit" onClick={submitid}>Buscar</button>
                        </form>
                </nav>
                </div>
                <div className="card-body mainbody"> 
                    <div className="col-md-6">
                            <label for="inputnome" className="form-label labelsform">Nome Completo:</label>
                            <input type="text" className="form-control" id="inputnome" name="aluno" value={alunosdados} onChange={e=> setAlunosdados(e.target.value)} placeholder="Digite seu nome"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputemail" className="form-label labelsform">Email:</label>
                            <input type="email" className="form-control" id="inputemail" name="email" value={email} onChange={e=> setEmail(e.target.value)}  placeholder="Informe seu email"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputtel" className="form-label labelsform">Telefone:</label>
                            <InputMask mask="(99)99999-9999" type="tel" className="form-control" id="inputtel" name="telefone" value={telefone} onChange={e=> setTel(e.target.value)}  placeholder="Informe seu telefone"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputcpf" className="form-label labelsform">CPF:</label>
                            <InputMask mask="999.999.999-99" type="text" className="form-control" id="inputcpf" name="cpf" value={cpf} onChange={e=> setCpf(e.target.value)} placeholder="Informe seu cpf"/>
                        </div>
                        <div className="col-12">
                            <label for="inputcurso" className="form-label labelsform">Curso:</label>
                            <input type="text" className="form-control" id="inputcurso" name="curso" value={curso} onChange={e=> setCurso(e.target.value)} placeholder="Curso de interesse"/>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label labelsform" >CEP</label>
                            <InputMask mask="99999-999" type="text" className="form-control" id="inputZip" name="cep" value={cep} onChange={e=> setCep(e.target.value)} placeholder="Informe seu CEP"/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label labelsform">Endereço:</label>
                            <input type="text" className="form-control" id="inputAddress" name="endereco" value={endereco} onChange={e=> setEndereco(e.target.value)} placeholder="Digite seu endereço"/>
                        </div>
                        <div className="col-12">
                            <label for="inputbairro" className="form-label labelsform">Bairro:</label>
                            <input type="text" className="form-control" id="inputbairro" name="bairro" value={bairro} onChange={e=> setBairro(e.target.value)} placeholder="Digite seu bairro"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label labelsform">Cidade</label>
                            <input type="text" className="form-control" id="inputCity" name="cidade" value={cidade} onChange={e=> setCidade(e.target.value)} placeholder="Informe sua cidade"/>
                        </div>
                        <div className="col-12">
                            <label for="inputState" className="form-label labelsform">Estado:</label>
                            <input type="text" className="form-control" id="inputState" name="estado" value={estado} onChange={e=> setEstado(e.target.value)} placeholder="Digite seu cep"/>
                        </div>
                </div>    
            </div>
        </div>
    )
}