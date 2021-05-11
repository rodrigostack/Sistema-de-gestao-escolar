import React,{useState, useEffect} from 'react'
import './cursos.css'
import Axios from 'axios'

export default function(){
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/cursoscadastrados').then((response) =>{
            setCursos(response.data);
        });
    },[]);

    return(
         <div className="default">
            <h2 className="h1 alunoscad">Cursos Cadastrados</h2>
            <table className="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Duraçao</th>
                        <th scope="col">Valor Mensalidade</th>
                        <th scope="col">Modulos</th>
                    </tr>
                </thead>
                
                <tbody className="tableback">
                {cursos.map((student) => {
                    return (
                        <tr>
                            <td className="tdform">{student.id}</td>
                            <td className="tdform">{student.curso}</td>
                            <td className="tdform">{student.duracao}</td>
                            <td className="tdform">{student.mensalidade}</td>
                            <td className="tdform">{student.modulos}</td>
                        </tr>
                        );       
                    })}
                    
                 
                    
                   
                </tbody>
                </table>
        </div>
    );
}
