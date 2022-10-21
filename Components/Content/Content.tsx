import React from 'react'
import styled from '@emotion/styled' 
import styles from '../styles/Home.module.css'

export default function Content() {
  return (
	<div>
    <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao projeto em grupo!
        </h1>

        <p className={styles.description}>
          Agora analisem o arquivo index.tsx na pasta pages
        </p>

        <div className={styles.grid}>
          <p className={styles.card}>
            <h2>Encontramos o erro  &rarr;</h2>
          <p>Não existe mais erro. Veja que foi corrigido com sucesso.</p>
          </p>



          <a href="https://nextjs.org/learn" 
            className={styles.card}
            >
            <h2>Crie um repositório &rarr;</h2>
            <p>Após concluir o trabalho suba o código no github do grupo</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Evite componentes demais &rarr;</h2>
            <p>Crie somente componentes essenciais.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Trabalho em grupo &rarr;</h2>
            <p>
              Ajude para que todos do grupo participe, envolva-se.
            </p>
          </a>
        </div>
      </main>
  </div>
  )
}
