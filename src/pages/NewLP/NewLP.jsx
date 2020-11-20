import React, {useState} from 'react';
import './NewLP.css';

function ChildrenExemple({children, color="green", title="titulo"}){
    console.log(children)
return (
    <div style={{color: color}}>
        <h1>Titulo  = {title}</h1>
        {children}
        <br/><br/><br/>
    </div>
)
}   


function NewLP() {
    return (
        <>
        <div className='suaveira'>
            <ChildrenExemple color="red" title="Children 1">
                    <h1>Hello World</h1>
            </ChildrenExemple>

            <ChildrenExemple color="blue" title="Children 2">
                    <h1>Hello 2</h1>
                    <h3>Conteudo diferente do outro children</h3>
            </ChildrenExemple>

            <ChildrenExemple title="Children 3">
                    <h1>Hello 3</h1>
                    <h3>Conteudo diferente do outro children</h3>
            </ChildrenExemple>
        </div>
        </>
    );
}
export default NewLP;