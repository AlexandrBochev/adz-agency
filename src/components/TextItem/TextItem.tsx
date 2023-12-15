interface TextItemProps {
  title: string
}

const TextItem = ({ title }: TextItemProps) => {
  return (
    <div className='relative'>
      <p className='peer'>{ title.length > 24 ? title.slice(0, 24) + '...' : title }</p>
      { title.length > 24 &&
        <span className='absolute top-8 left-0 invisible peer-hover:visible text-white rounded bg-black px-4 z-50'>
          { title }
        </span>
      }
    </div>
  )
}

export { TextItem }