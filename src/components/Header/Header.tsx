import logo from '../../assets/logo.png'
import { smoothScroll } from '../../models/models'
import { Button } from '../Button/Button'

const Header = () => {
  return (
    <header className='container w-full flex items-center justify-between h-[3.75rem] mx-auto' id='header'>
      <a href="/"><img src={logo} alt="Logo" height={26} width={104} /></a>
      <div className='flex justify-between w-[13.12rem]'>
        <a href="#users" onClick={ (e) => smoothScroll(e, 'users') }>
          <Button title='Users' onClick={ ()=> console.log('Users Click') } />
        </a>
        <a href="#form" onClick={ (e) => smoothScroll(e, 'form') }>
          <Button title='Sign up' onClick={ ()=> console.log('Sign up Click') } />
        </a>
      </div>
    </header>
  )
}

export { Header }