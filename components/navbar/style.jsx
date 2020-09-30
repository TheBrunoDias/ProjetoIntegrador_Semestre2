import React from 'react';
import styled from 'styled-components';

const Nav = styled.ul`
    width: 60%;
    display: flex;
    justify-content: space-between;
`;

const Li = styled.li`
    list-style: none;
    a{
        text-decoration: none;
    }
`;


export{
    Nav,
    Li

}