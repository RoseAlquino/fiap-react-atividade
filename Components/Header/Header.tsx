import Head from 'next/head';
import React from 'react';
import styled from '@emotion/styled';
import styles from '../styles/Home.module.css';



const HeaderContainer = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
`

export default function Header() {
  return (

      <Header>
      <h1 className={styles.title}> Bem vindo ao projeto em grupo! </h1>
      </Header>
   
  )
}
