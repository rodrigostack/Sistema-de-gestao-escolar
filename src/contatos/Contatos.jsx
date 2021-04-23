import React from 'react'
import './Contatos.css'
import whats from '../imagens/whats.jpg'
import facebook from '../imagens/facebook.png'
import instagram from '../imagens/instagram.jpg'
import tel from '../imagens/telefone.png'

export default function(){
    return(
        <div className="container containerprincipal">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header cardheader">
                            <h3>Whatsapp</h3>
                        </div>
                        <div className="card-body cardbody">
                            <img src={whats} className="img-fluid"/>
                        </div>
                        <div className="card-footer cardfooter">
                            <h4>(11)97896-2583</h4>
                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header cardheader">
                            <h3>Facebook</h3>
                        </div>
                        <div className="card-body cardbody">
                            <img src={facebook} className="img-fluid"/>
                        </div>
                        <div className="card-footer cardfooter">
                            <h4>@facebookSchoolSmart</h4>
                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header cardheader">
                            <h3>Instagram</h3>
                        </div>
                        <div className="card-body cardbody">
                            <img src={instagram} className="img-fluid"/>
                        </div>
                        <div className="card-footer cardfooter">
                            <h4>@instaSchoolSmart</h4>
                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header cardheader">
                            <h3>Telefone</h3>
                        </div>
                        <div className="card-body cardbody">
                            <img src={tel} className="img-fluid"/>
                        </div>
                        <div className="card-footer cardfooter">
                            <h4>(11) 4785-3696</h4>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}