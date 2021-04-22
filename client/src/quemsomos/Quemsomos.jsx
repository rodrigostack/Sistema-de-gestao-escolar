import React from 'react'
import './Quemsomos.css'

export default function(){
    return(
        <div className="container topaccordion">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Quem Somos?
                    </button>
                    </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Somos uma empresa especializada em gestao escolar.</strong> Estamos a mais de 10 anos no mercado e contamos com profissionais e administradores especializados na area de educaçao e treinamentos profissionais. Montamos um sistema que vai te oferecer total suporte para trabalhos rotineiros de uma escola particular.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Missao
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Levar um sistema de qualidade.</strong> A Todas as escolas que buscam ter um melhor controle de suas rotinas administrativas em gestao escolar. <code>Cadastre seus alunos, seus cursos, frequencia de alunos e muito mais...</code>, Oferecendo total suporte sobre duvidas e aberto a sugestoes.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Visao
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Ser a número um do seu mercado.</strong> Conquistar espaço internacional por meio da inovação; ter sedes em todas as capitais do país; ser reconhecida mundialmente como uma empresa pioneira em seu setor; estar sempre à frente dos demais: são alguns exemplos de visões empresariais.  Logo, a visão leva a ação e a ação planejada, objetiva, focada e bem estruturada traz resultados extraordinários.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Valores
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Representam as crenças e comportamentos.</strong>  Que a organização acredita, defende, prega e valoriza e sua motivação para ser o que é e fazer o que faz. Aqui no IBC, por exemplo, temos como um de nossos principais valores a Humanidade.

                  </div>
                </div>
              </div>
        </div>
    )
}