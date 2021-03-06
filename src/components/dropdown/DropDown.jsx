import React, { useState } from 'react';
import styled from 'styled-components';


const Title = styled.button`
    display: flex; 
    justify-content: center;
    cursor: pointer;
    align-items: center;
    font-size: 22px;
    background: none;
    border: none;
    outline: none;
    transition: 1s;
`;

export default function DropDown({ children, title, width = '10vw' }) { //View Width = 10% da largura da tela 

    const [visible, setVisible] = useState(false);

    return (
        <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <Title style={{width: `${width}`}}>{title}</Title>
            {
                visible ? <>{children}</> : null
            }
        </div>
    );
}