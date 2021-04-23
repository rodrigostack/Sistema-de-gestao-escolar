import React,{useState} from 'react'
import './cadastroaluno.css'
import InputMask from 'react-input-mask'

export default function(){
 const[nome,setNome] = useState();
 const[email,setEmail] = useState();
 const[tel,setTel] = useState();
 const[cpf,setCpf] = useState();
 const[curso,setCurso] = useState();
 const[endereco,setEndereco] = useState();
 const[cidade,setCidade] = useState();
 const[estado,setEstado] = useState();
 const[cep,setCep] = useState();


    return(
        <div className="container">
           <form className="row g-3 containermain">
                <div className="col-md-6">
                    <label for="inputnome" className="form-label labelsform">Nome Completo:</label>
                    <input type="text" className="form-control" id="inputnome" name="nome" onChange={e=> setNome(e.target.value)} placeholder="Digite seu nome"/>
                </div>
                <div className="col-md-6">
                    <label for="inputemail" className="form-label labelsform">Email:</label>
                    <input type="email" className="form-control" id="inputemail" name="email" onChange={e=> setEmail(e.target.value)} placeholder="Informe seu email"/>
                </div>
                <div className="col-md-6">
                    <label for="inputtel" className="form-label labelsform">Telefone:</label>
                    <InputMask mask="(99)99999-9999" type="tel" className="form-control" id="inputtel" name="tel" onChange={e=> setTel(e.target.value)} placeholder="Informe seu telefone"/>
                </div>
                <div className="col-md-6">
                    <label for="inputcpf" className="form-label labelsform">CPF:</label>
                    <InputMask mask="999.999.999-99" type="text" className="form-control" id="inputcpf" name="cpf" onChange={e=> setCpf(e.target.value)} placeholder="Informe seu cpf"/>
                </div>
               <div className="col-12">
                    <label for="inputcurso" className="form-label labelsform">Curso:</label>
                    <input type="text" className="form-control" id="inputcurso" name="Curso" onChange={e=> setCurso(e.target.value)} placeholder="Curso de interesse"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label labelsform">Endereço:</label>
                    <input type="text" className="form-control" id="inputAddress" name="endereco" onChange={e=> setEndereco(e.target.value)} placeholder="Digite seu endereço"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label labelsform">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" name="cidade" onChange={e=> setCidade(e.target.value)} placeholder="Informe sua cidade"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label labelsform">Estado</label>
                    <select id="inputState" className="form-select" name="estado" onChange={e=> setEstado(e.target.value)}>
                        <option selected>Escolha...</option>
                        <option value='SP'>SP</option>
                        <option value='RJ'>RJ</option>
                        <option value='MG'>MG</option>
                        <option value='ES'>ES</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label labelsform" name="cep" onChange={e=> setCep(e.target.value)}>CEP</label>
                    <InputMask mask="99999-999" type="text" className="form-control" id="inputZip" placeholder="Informe seu CEP"/>
                </div>
                   <button type="submit" className="btn btn-primary col-md-3">Cadastrar aluno</button>
                         
                    <button type="reset" className="btn btn-secondary col-md-3">Cadastrar novo aluno</button>
                
             </form>
        </div>
    )
}