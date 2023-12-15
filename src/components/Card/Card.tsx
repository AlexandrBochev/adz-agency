import { TextItem } from "../TextItem/TextItem"

interface CardProps {
  user: User
}

interface User {
  id: number
  name: string
  email: string
  phone: string
  position_id: number
  position: string
  photo: string
}

const formatNumber = (number: string) => {
  const cleaned = ('' + number).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/)
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]} - ${match[4]} - ${match[5]}`
  }
  return ''
}

const Card = ({ user }: CardProps) => {
  return (
    <section className='flex flex-col items-center text-center bg-white rounded-[0.625rem] p-4'>
      <img className='w-[4.375rem] h-[4.375rem] rounded-full object-cover mb-5' src={ user.photo } alt='User photo' />
      <TextItem title={ user.name } />
      <div className='mt-5'>
        <TextItem title={ user.position } />
        <a href={`mailto:${ user.email }`}>
          <TextItem title={ user.email } />
        </a>
        <a href={`tel:${ user.phone }`} target="_self">
          <TextItem title={ formatNumber(user.phone) } />
        </a>
      </div>
    </section>
  )
}

export { Card }