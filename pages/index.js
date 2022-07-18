import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Билгүүн | Mobile Application Developer</title>
        <meta name="description" content="I’m a mobile application developer." />
        <link rel="icon" href="/fav.jpeg" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
