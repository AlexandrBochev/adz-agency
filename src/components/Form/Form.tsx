import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Positions } from "../Positions/Positions"
import { Upload } from "../Upload/Upload"
import { Modal } from "../Modal/Modal"
import { Preloader } from "../Preloader/Preloader"
import { API_URL, EMAIL_REGEX, formatPhone, getToken, IMAGE_TYPES, MAX_SIZE_IN_BYTES, PHONE_REGEX } from "../../models/models"

const Form = () => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPhoneValid, setIsPhoneValid] = useState(true)
  const [isUploadValid, setIsUploadValid] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [phoneValue, setPhoneValue] = useState('')
  const [fileName, setFileName] = useState('')
  const [selectedPosition, setSelectedPosition] = useState(1)
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: 1,
    photo: new File([], '')
  })

  useEffect(() => {
    if (isNameValid && isEmailValid && isPhoneValid && isUploadValid && data.name && data.email && data.phone && data.photo.name) {
      setIsBtnDisabled(false)
    } else {
      setIsBtnDisabled(true)
    }
  }, [isNameValid, isEmailValid, isPhoneValid, data])

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({...data, name: e.target.value})
    e.target.value.length < 2 || e.target.value.length > 60 ? setIsNameValid(false) : setIsNameValid(true)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({...data, email: e.target.value})
    EMAIL_REGEX.test(e.target.value) ? setIsEmailValid(true) : setIsEmailValid(false)
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({...data, phone: formatPhone(e.target.value).replace(/[^\d+]/g, '')})
    setPhoneValue(formatPhone(e.target.value))
    PHONE_REGEX.test(formatPhone(e.target.value)) ? setIsPhoneValid(true) : setIsPhoneValid(false)
  }

  const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedPosition(Number(e.target.value))
    setData({...data, position_id: Number(e.target.value)})
  }

  const handleUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file?.size > MAX_SIZE_IN_BYTES || IMAGE_TYPES.indexOf(file?.type) === -1) {
        setData({...data, photo: new File([], '')})
        setIsUploadValid(false)
        setFileName('')
      } else {
        setData({...data, photo: file})
        setIsUploadValid(true)
        setFileName(file.name)
      }
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = await getToken()

    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('position_id', data.position_id.toString())
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('photo', data.photo)

      const response = await fetch(`${API_URL}users`, {
        method: 'POST',
        headers: { 'Token': token },
        body: formData
      })

      if (response.ok) {
        setIsLoading(false)
        setIsModalOpen(true)
        setData({
          name: '',
          email: '',
          phone: '',
          position_id: 1,
          photo: new File([], '')
        })
        console.log('Response from server:', response)
      } else {
        setIsLoading(false)
        const data = await response.json()
        alert(data.message)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section className='flex flex-col items-center text-center pt-[8.75rem] pb-[6.25rem]' id="form">
      <h1 className='mb-[3.125rem]'>Working with POST request</h1>
      <form onSubmit={ handleSubmit } action="" className='w-full max-w-[23.75rem]'>
        <Input
          type='text' label="Your name"
          errorMassage="Your name should be between 2 and 60 characters"
          onChange={ (e) => handleNameChange(e) }
          isValid={ isNameValid }
          value={ data.name }
        />
        <Input
          type='email' label="Email"
          errorMassage="Please enter a valid email address"
          onChange={ (e) => handleEmailChange(e) }
          isValid={ isEmailValid }
          value={ data.email }
        />
        <Input
          type='tel' label="Phone"
          errorMassage="Please enter a phone number in format +38 (0XX) XXX - XX - XX"
          helperMassage="+38 (0XX) XXX - XX - XX"
          onChange={ (e) => handlePhoneChange(e) }
          isValid={ isPhoneValid }
          value={ phoneValue }
        />
        <Positions onChange={ handlePositionChange } selectedPosition={ selectedPosition } />
        <Upload isValid={ isUploadValid } onChange={ handleUploadChange } fileName={ fileName } />
        { isLoading && <Preloader /> }
        <Button title="Sign up" type="submit" disabled={ isBtnDisabled } />
      </form>
      { isModalOpen && <Modal setIsModalOpen={ setIsModalOpen } /> }
    </section>
  )
}

export { Form }