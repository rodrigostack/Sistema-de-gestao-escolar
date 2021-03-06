import React,{useState, useEffect} from 'react'
import './cadastroaluno.css'
import InputMask from 'react-input-mask'
import Axios from 'axios'

export default function(){
 const[nome,setNome] = useState();
 const[email,setEmail] = useState();
 const[telefone,setTel] = useState();
 const[cpf,setCpf] = useState();
 const[curso,setCurso] = useState();
 const[endereco,setEndereco] = useState();
 const[bairro,setBairro] = useState();
 const[cidade,setCidade] = useState();
 const[estado,setEstado] = useState();
 const[cep,setCep] = useState("");

    useEffect(()=>{
        if (cep.length > 8) {
           Axios.get(`http://viacep.com.br/ws/${cep}/json/`)
           .then((resposta)=>{
               setEndereco(resposta.data.logradouro);
               setCidade(resposta.data.localidade);
               setBairro(resposta.data.bairro)
               setEstado(resposta.data.uf)
           }) 
        }
    },[cep])

    const submit = () => {
        Axios.post("http://localhost:3001/api/alunos",{
            nome: nome, email: email, telefone: telefone, cpf: cpf, curso: curso, cep: cep, endereco: endereco, bairro: bairro, cidade: cidade, estado: estado
        }).then(() => {
            alert('Aluno cadastrado com sucesso');
        });

    }

    return(
        <div className="container">
           <form className="row g-3 containermain">
                <div className="col-md-6">
                    <label for="inputnome" className="form-label labelsform">Nome Completo:</label>
                    <input type="text" className="form-control" id="inputnome" name="nome" onChange={e=> setNome(e.target.value)} value={nome} placeholder="Digite seu nome"/>
                </div>
                <div className="col-md-6">
                    <label for="inputemail" className="form-label labelsform">Email:</label>
                    <input type="email" className="form-control" id="inputemail" name="email" onChange={e=> setEmail(e.target.value)} value={email} placeholder="Informe seu email"/>
                </div>
                <div className="col-md-6">
                    <label for="inputtel" className="form-label labelsform">Telefone:</label>
                    <InputMask mask="(99)99999-9999" type="tel" className="form-control" id="inputtel" name="telefone" onChange={e=> setTel(e.target.value)} value={telefone} placeholder="Informe seu telefone"/>
                </div>
                <div className="col-md-6">
                    <label for="inputcpf" className="form-label labelsform">CPF:</label>
                    <InputMask mask="999.999.999-99" type="text" className="form-control" id="inputcpf" name="cpf" onChange={e=> setCpf(e.target.value)} value={cpf} placeholder="Informe seu cpf"/>
                </div>
               <div className="col-12">
                    <label for="inputcurso" className="form-label labelsform">Curso:</label>
                    <input type="text" className="form-control" id="inputcurso" name="curso" onChange={e=> setCurso(e.target.value)} value={curso} placeholder="Curso de interesse"/>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label labelsform" >CEP</label>
                    <InputMask mask="99999-999" type="text" className="form-control" id="inputZip" name="cep" onChange={e=> setCep(e.target.value)} value={cep} placeholder="Informe seu CEP"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label labelsform">Endere??o:</label>
                    <input type="text" className="form-control" id="inputAddress" name="endereco" onChange={e=> setEndereco(e.target.value)} value={endereco} placeholder="Digite seu endere??o"/>
                </div>
                <div className="col-12">
                    <label for="inputbairro" className="form-label labelsform">Bairro:</label>
                    <input type="text" className="form-control" id="inputbairro" name="bairro" onChange={e=> setBairro(e.target.value)} value={bairro} placeholder="Digite seu bairro"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label labelsform">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" name="cidade" onChange={e=> setCidade(e.target.value)} value={cidade} placeholder="Informe sua cidade"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label labelsform">Estado</label>
                    <select id="inputState" className="form-select" name="estado" onChange={e=> setEstado(e.target.value)} value={estado}>
                        <option selected></option>
                        <option value='SP'>SP</option>
                        <option value='RJ'>RJ</option>
                        <option value='MG'>MG</option>
                        <option value='ES'>ES</option>
                    </select>
                </div>
                
                   <button type="submit" className="btn btn-primary col-md-3" onClick={submit}>Cadastrar aluno</button>
                   <button type="reset" className="btn btn-secondary col-md-3">Cadastrar novo aluno</button>
                
             </form>
        </div>
    )
}