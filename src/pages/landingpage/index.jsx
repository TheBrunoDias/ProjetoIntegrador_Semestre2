import React from 'react';
import './Index.css';
//IMPORTANDO IMAGENS
import Logo from '../../../src/Assets/img/landingpage/Logo.png'
import Why from '../../../src/Assets/img/landingpage/why.png'
import How from '../../../src/Assets/img/landingpage/how.png'
import What from '../../../src/Assets/img/landingpage/what.png'
import Contando from '../../../src/Assets/img/landingpage/couting.png'
import Montando from '../../../src/Assets/img/landingpage/making.png'
import Criando from '../../../src/Assets/img/landingpage/creating.png'
function LandingPage(){
    return(
       <>
        <div className="teste">
                <div className="header">
                        <div div className='bem_vindo'>
                                                <img src={Logo} />
                                                <h1>Bem Vindo!</h1>
                                                <h2>Esse projeto foi desenvolvido totalmente por acadêmicos de Engenharia de Software e Análise e Desenvolvimento de Sistemas em parceria com acadêmicos de Pedagogia.<br /> Esperamos que você goste!</h2>
                                            <a href="#" className="jogue-agora">
                                                Jogue Agora
                                            </a>
                                            </div>
                                        
                        </div>
                        
                <div className='container'>

                    <div className='container-branco'>
                                    <div className='sobre'>
                                    <h1>Sobre</h1>
                                        <div className='card'>
                                            <p>A proposta do projeto surgiu de uma demanda de uma professora do ensino fundamental I de uma escola municipal, em sua sala havia 28 crianças, sendo 2 com Síndrome de Down. Para esses alunos com SD, era muito difícil acompanhar o conteúdo de matemática do restante da turma, além disso se torne essencial para a aprendizagem que eles possuem materiais didáticos como suporte. Porém, a professora não sabia o que fazer e nem como aplicar algo que funcionasse para a turma toda igualmente.<br />Essa turma também havia autistas, alunos com TDAH e dislexia, e para eles foi uma ferramenta que os auxiliou em seu aprendizado matemático. O maior objetivo do projeto era fazer com que o ensino dessa turma seja minimamente igualitário, não havendo apenas um método de ensino para alunos atípicos e outro para alunos típicos, assim facilitando a vida da professora e dos alunos.</p>

                                            <div className='card_img'>
                                                <img src={Why} />
                                                <h3>Por que?</h3>
                                            </div>
                                        </div>

                                        <div className='card'>
                                            <div className='card_img2'>
                                                <img src={How} />
                                                <h3>Como?</h3>
                                            </div>

                                        <p>Uma ferramenta inspirada no jogo Numicon que auxilia alunos atípicos (Síndrome de Down, autismo, TDAH... entre outros), a aprenderam como realizar cálculos simples com o recurso visual.</p>
                                        </div> 

                                        <div className='card'>
                                            <p>Um jogo multissensorial, que tem como objetivo ajudar as crianças atípicas denominado “Uniamericon”, o formato das peças, possibilitam ao alunos uma percepção da quantidade de cada número, facilita que os alunos vejam as operações que podem ser feitas, pretendendo favorecer seu entendimento, além das operações básicas de matemática, o jogo possibilita que seja trabalho números de pares e impares, pois a sequência de formação de números respeita agrupamentos de dois em dois, além de trabalhar dobro, triplo, adição e subtração</p>

                                            <div className='card_img'>
                                                <img src={What}/>
                                                <h3>O que?</h3>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='como_jogar'>
                                        <h1>Como Jogar</h1>
                                        <div className='card_cj'>
                                        <div>
                                            <img src={Contando}/>
                                            <h3>Contando</h3>
                                            <p>Cada peça tem seu valor de acordo com a quantidade de blocos, assim, para realizar uma soma, basta contar a quantidade de quadradinhos, simples não é mesmo?</p>                
                                        </div>

                                            <div>
                                            <img src={Montando}/>
                                            <h3>Montando</h3>
                                            <p>As peças possuem formatos que possibilita ao aluno juntar elas, auxiliando na contagem quando possui mais de uma peça na tela</p>
                                            </div>

                                            <div>
                                            <img src={Criando}/>
                                            <h3>Criando</h3>
                                            <p>Cada peça possui forma e cor diferentes, para estimular a criança a usar a imaginação tentado criar alguma imagem ou objeto</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className= 'muito_legal'>
                                        <h1>Muito Legal, né?</h1>
                                        <p>Como foi dito, esse é um projeto sem fins lucrativos totalmente feito por estudantes que visam tornar o mundo um lugar melhor para todas as pessoas. Para começar a jogar é só se inscrever no botão que está ai embaixo. Divirta-se! :)</p>

                                    </div>
                        </div>
                </div>
        </div>
        </>
    );
}

export default LandingPage;