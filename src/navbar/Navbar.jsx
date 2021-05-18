import React from 'react'
import './Navbar.css'
import logo from '../imagens/smart.png'
import { Link } from 'react-router-dom'

export default function(){
    return(
        <div>
              <nav className="navbar navbar-expand-lg navbar-light navback">
                  <div className="container-fluid">
                        <img src={logo} className="img-fluid imgclass"/>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/quemsomos">Quem Somos?</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contatos">Contatos</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cadastros
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/cadastroaluno">Cadastrar Alunos</Link></li>
                        <li><Link className="dropdown-item" to="/cadastrocurso">Cadastrar Cursos</Link></li>
                        <li><Link className="dropdown-item" to="/alunoscadastrados">Alunos Cadastrados</Link></li>
                        <li><Link className="dropdown-item" to="/cursoscadastrados">Cursos Cadastrados</Link></li>
                      </ul>
                      
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Consultas
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/consulta">Consultar alunos</Link></li>
                        <li><Link className="dropdown-item" to="/cadastrocurso">Consultar Cursos</Link></li>
                      </ul>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    )
}