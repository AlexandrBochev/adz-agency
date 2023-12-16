import { Button } from "../Button/Button"
import background from '../../assets/background.webp'
import { smoothScroll } from "../../models/models"

const Intro = () => {
  return (
    <section
      className='
        relative w-full h-[31.25rem] lg:h-[40.625rem] xl:container
        flex justify-center pt-10 md:pt-0 md:items-center mx-auto
      '
    >
      <img className='absolute top-0 left-0 w-full h-full object-cover' src={ background } alt="Background" />
      <div className='absolute top-0 left-0 w-full h-full bg-[#000000] opacity-50' />
      <div className='max-w-[23.75rem] text-white text-center px-4 md:px-0 z-10'>
        <h1>Test assignment for front-end developer</h1>
        <p className='mt-5 mb-8'>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <a href="#form" onClick={ (e) => smoothScroll(e, 'form') }><Button title='Sign up' /></a>
      </div>
    </section>
  )
}

export { Intro }