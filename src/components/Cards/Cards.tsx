import { useEffect, useRef, useState } from "react"
import { Card } from "../Card/Card"
import { Button } from "../Button/Button"
import { Preloader } from "../Preloader/Preloader"
import { API_URL, CardsProps, User } from "../../models/models"

const Cards = ({ reload, setReload }: CardsProps) => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(6)
  const [isBtnShow, setIsBtnShow] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const tergetRef = useRef(null) as any

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}users?page=1&count=${count}`)
        const data = await response.json()
        setUsers(data.users)
        count > data.users.length || count === 100 && setIsBtnShow(false)
        setIsLoading(false)
      } catch (error) {
        alert(error)
      }
    }
    getUsers()
  }, [count, users.length])

  useEffect(() => {
    if (reload) {
      setUsers([])
      setCount(6)
      setIsBtnShow(true)
      setReload(false)
    }
    !reload && tergetRef.current?.focus()
  }, [reload])

  return (
    <section className='text-center pt-[8.75rem]' id="users">
      <h2 className='mb-[3.125rem]'>Working with GET request</h2>
      <ul
        className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-[1.875rem] mb-[3.125rem] outline-none'
        tabIndex={-1} ref={ tergetRef }
      >
        { users.map((user: User) => <li key={user.id}><Card user={user} /></li>) }
      </ul>
      { isLoading && <Preloader /> }
      { isBtnShow && <Button title={ 'Show more' } onClick={ () => count + 6 > 100 ? setCount(100) : setCount(count + 6)} /> }
    </section>
  )
}

export { Cards }