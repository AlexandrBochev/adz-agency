import { ChangeEvent, MouseEvent } from "react"

// Types
export interface ButtonProps {
  title: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export interface CardProps {
  user: User
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  position_id: number
  position: string
  photo: string
}

export interface InputProps {
  type: string
  label: string
  errorMassage?: string
  helperMassage?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isValid?: boolean
  value?: string
}

export interface ModalProps {
  setIsModalOpen: (value: boolean) => void
}

export interface Position {
  id: number
  name: string
}

export interface PositionsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  selectedPosition: number
}

export interface TextItemProps {
  title: string
}

export interface UploadProps {
  isValid: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  fileName: string
}

// Constants
export const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/'
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
export const phoneRegex = /^\+38 \(\d{3}\) \d{3} - \d{2} - \d{2}$/
export const imageTypes = ['image/jpeg', 'image/jpg']
export const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

// Functions
export const cardFormatPhone = (number: string) => {
  const cleaned = ('' + number).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/)
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`
  }
  return ''
}

export const formatPhone = (phone: string) => {
  if (!phone) return phone
  const phoneNumber = phone.replace(/[^\d]/g, '') 
  if (phoneNumber.length < 2) return `+38 (0${phoneNumber})`
  if (phoneNumber.length < 6) return `+38 (0${phoneNumber.slice(3, 5)})`
  if (phoneNumber.length < 9) return `+38 (0${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)}`
  if (phoneNumber.length < 11) return `+38 (0${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)} - ${phoneNumber.slice(8, 10)}`
  return `+38 (0${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)} - ${phoneNumber.slice(8, 10)} - ${phoneNumber.slice(10, 12)}`
}

export const getToken = async () => {
  const response = await fetch(`${API_URL}token`)
  const data = await response.json()
  return data.token
}

export const smoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault()
  const target = document.getElementById(id)
  target?.scrollIntoView({ behavior: 'smooth' })
}
