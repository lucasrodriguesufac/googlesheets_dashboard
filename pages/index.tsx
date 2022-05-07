import Head from 'next/head'
import Cabecalho from '../components/Cabecalho'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Buscador de Armas do Dark Souls III</title>
        <meta name="description" content="Buscador de armas" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="main">
        <Cabecalho/>
      </main>

      <footer className="footer">
        <a href='https://github.com/yuuta-togashi'>
          Criado por: @lucaslrodri
        </a>
      </footer>
    </div>
  )
}
