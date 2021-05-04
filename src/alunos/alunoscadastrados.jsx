import React,{useState, useEffect} from 'react'
import './alunoscadastrados.css'
import Axios from 'axios'


export default function(){

    const [dados, setDados] = useState([]);

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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                    </tr>
                  
                    
                   
                </tbody>
                </table>
        </div>
    )
}
