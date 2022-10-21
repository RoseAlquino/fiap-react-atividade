import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../Components/Content'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )}


export default function HomePage() {
  return (
    <>
        <Header/>
        <Content/>
        <Footer/>      
      </>
  )
}


//export default Home