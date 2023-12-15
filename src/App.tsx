import { Cards } from "./components/Cards/Cards"
import { Form } from "./components/Form/Form"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"

const App = () => {
  return (
    <>
      <Header />
      <main className='bg-background-gray'>
        <Intro />
        <section className='container mx-auto'>
          <Cards />
          <Form />
        </section>
      </main>
    </>
  )
}

export { App }
