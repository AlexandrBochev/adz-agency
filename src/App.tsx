import { useState } from "react"
import { Cards } from "./components/Cards/Cards"
import { Form } from "./components/Form/Form"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"

const App = () => {
  const [reload, setReload] = useState(false)

  return (
    <>
      <Header />
      <main className='bg-background-gray'>
        <Intro />
        <section className='container mx-auto overflow-hidden'>
          <Cards reload={ reload } setReload={ setReload } />
          <Form setReload={ setReload } />
        </section>
      </main>
    </>
  )
}

export { App }
