import { useEffect, useState } from "react"
import { Preloader } from "../Preloader/Preloader"
import { API_URL, Position, PositionsProps } from "../../models/models"

const Positions = ({ onChange, selectedPosition }: PositionsProps) => {
  const [positions, setPositions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getPositions()
  }, [])

  const getPositions = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${API_URL}positions`)
      const data = await response.json()
      setPositions(data.positions)
      setIsLoading(false)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='mb-[3.125rem]'>
      { isLoading && <Preloader /> }
      <h4 className='mb-[0.875rem] text-left'>Select your position</h4>
      { positions.map((position: Position) =>
        <div key={position.id}>
          <label className='flex cursor-pointer mb-3'>
            <input onChange={ onChange } value={ position.id } checked={ selectedPosition === position.id } className='hidden peer' type='radio' name="select" />
            <span
              className='
                flex items-center justify-center w-5 h-5 border border-light-gray rounded-full mr-3
                after:w-[0.625rem] after:h-[0.625rem] after:bg-blue after:rounded-full after:scale-0 after:transition-all
                peer-checked:border-blue peer-checked:after:scale-100
              '
            />
            { position.name }
          </label>
        </div>
      ) }
    </div>
  )
}

export { Positions }