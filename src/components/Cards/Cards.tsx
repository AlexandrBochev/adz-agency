import { useEffect, useState } from "react"
import { Card } from "../Card/Card"
import { Button } from "../Button/Button"
import { Preloader } from "../Preloader/Preloader"

interface User {
  id: number
  name: string
  email: string
  phone: string
  position_id: number
  position: string
  photo: string
}

const Cards = () => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getUsers(count)
  }, [count])

  const getUsers = async (count: number) => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`)
      const data = await response.json()
      setUsers(data.users)
      setIsLoading(false)
    } catch (error) {
      alert(error)
    }
  }

  const handleClickCount = () => {
    if (count + 6 > 100) {
      setCount(100)
      return
    }
    if (count === users.length) {
      setCount(count + 6)
    } else {
      setCount(6)
    }
  }

  return (
    <section className='text-center pt-[8.75rem]' id="users">
      <h2 className='mb-[3.125rem]'>Working with GET request</h2>
      <ul className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-[1.875rem] mb-[3.125rem]'>
        { users.map((user: User) => <li key={user.id}><Card user={user} /></li>) }
      </ul>
      { isLoading && <Preloader /> }
      <Button
        title={ count === users.length ? 'Show more' : 'Show less' }
        onClick={ handleClickCount }
      />
    </section>
  )
}

export { Cards }