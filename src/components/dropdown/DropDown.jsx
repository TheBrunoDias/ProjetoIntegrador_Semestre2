import React, { useState } from 'react';
import styled from 'styled-components';


const Title = styled.button`
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 22px;
    background: none;
    border: none;
    outline: none;
`;

export default function DropDown({ children, title, width = '10vw' }) {

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