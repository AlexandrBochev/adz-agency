import { CardProps, cardFormatPhone } from "../../models/models"
import { TextItem } from "../TextItem/TextItem"

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
          <TextItem title={ cardFormatPhone(user.phone) } />
        </a>
      </div>
    </section>
  )
}

export { Card }