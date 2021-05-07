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
                            <td>{dado.id}</td>
                            <td>{dado.nome}</td>
                            <td>{dado.email}</td>
                            <td>{dado.telefone}</td>
                            <td>{dado.cpf}</td>
                            <td>{dado.curso}</td>
                            <td>{dado.cep}</td>
                            <td>{dado.endereco}</td>
                            <td>{dado.bairro}</td>
                            <td>{dado.cidade}</td>
                            <td>{dado.estado}</td>
                        </tr>
                        );       
                    })}
                    
                  
                    
                   
                </tbody>
                </table>
        </div>
    )
}
