import { useRef, useState } from "react"
import { Cards } from "./components/Cards/Cards"
import { Form } from "./components/Form/Form"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"
import { Modal } from "./components/Modal/Modal"

const App = () => {
  const [reload, setReload] = useState(false)
  const tergetRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className='bg-background-gray'>
        <Intro />
        <section className='container mx-auto overflow-hidden'>
          <Cards reload={ reload } setReload={ setReload } tergetRef={ tergetRef } />
          <Form setReload={ setReload } setIsModalOpen={ setIsModalOpen } />
        </section>
      </main>
      { isModalOpen && <Modal setIsModalOpen={ setIsModalOpen } tergetRef={ tergetRef } /> }
    </>
  )
}

export { App }
