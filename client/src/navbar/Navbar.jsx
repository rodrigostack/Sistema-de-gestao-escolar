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
          <Link className="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Quem Somos?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contatos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cadastros
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Cadastrar Alunos</a></li>
            <li><a className="dropdown-item" href="#">Cadastrar Cursos</a></li>
            <li><a className="dropdown-item" href="#">Alunos Cadastrados</a></li>
            <li><a className="dropdown-item" href="#">Cursos Cadastrados</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}