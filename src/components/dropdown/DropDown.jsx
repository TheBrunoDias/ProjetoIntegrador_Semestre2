import React, { useState } from 'react';
import styled from 'styled-components';


const ButtonDrop = styled.button`
    border: none;
    outline: none;
    background: none;
    font-size: 20px;
`;


export default function DropDown({ children, title }) {

    const [visible, setVisible] = useState(false);

    return (
        <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <ButtonDrop>{title}</ButtonDrop>
            {
                visible ? <>{children}</> : null
            }
        </div>
    );
}