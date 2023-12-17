import successImage from '../../assets/success-image.png' 
import { ModalProps } from '../../models/models'
import { Button } from '../Button/Button'

const Modal = ({ setIsModalOpen }: ModalProps) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-4 z-30 transition-all'>
      <div className='absolute top-0 left-0 w-full h-screen bg-black z-40' onClick={ () => setIsModalOpen(false) } />
      <div className='flex flex-col items-center justify-center rounded-xl p-10 bg-white z-50'>
        <h2 className='mb-[3.125rem]'>User successfully registered</h2>
        <img src={successImage} alt="Success" height={290} width={328} className='mb-[3.125rem]' />
        <Button title='Ok' onClick={ () => setIsModalOpen(false) } />
      </div>
    </div>
  )
}

export { Modal }