import React,{useState, useEffect} from 'react'
import './alunoscadastrados.css'
import Axios from 'axios'


export default function(){

    const [dados, setDados] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/alunoscadastrados').then((response) =>{
            setDados(response.data);
        });
    },[]);

    return(
        <div className="default">
            <h2 className="h1 alunoscad">Alunos Cadastrados</h2>
            <table className="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome_Aluno</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Cep</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody className="tableback">
                  {dados.map((dado) => {
                    return (
                        <tr>
                            <td className="tdform">{dado.id}</td>
                            <td className="tdform"> {dado.aluno}</td>
                            <td className="tdform">{dado.email}</td>
                            <td className="tdform">{dado.telefone}</td>
                            <td className="tdform">{dado.cpf}</td>
                            <td className="tdform">{dado.curso}</td>
                            <td className="tdform">{dado.CEP}</td>
                            <td className="tdform">{dado.endereco}</td>
                            <td className="tdform">{dado.bairro}</td>
                            <td className="tdform">{dado.cidade}</td>
                            <td className="tdform">{dado.estado}</td>
                        </tr>
                        );       
                    })}
                    
                  
                    
                   
                </tbody>
                </table>
        </div>
    )
}
