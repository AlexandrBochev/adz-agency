import { InputProps } from "../../models/models"

const Input = ({ type, label, errorMassage, helperMassage, onChange, isValid, value }: InputProps) => {
  return (
    <div className="relative text-left mb-[3.125rem]">
      <input
        className={`
          peer w-full h-[3.375rem] pl-4 outline-none rounded border bg-background-gray
          ${isValid ? 'border-light-gray' : 'border-red border-2'}
        `}
        type={ type }
        onChange={ onChange }
        value={ value }
      />
      <label
        className={`
          block absolute top-[0.875rem] left-3 font-medium pointer-events-none bg-background-gray px-1 transition-all
          peer-focus:mt-[-1.35rem] peer-focus:text-xs
          ${isValid ? 'text-gray' : 'text-red'}
          ${value?.length && 'mt-[-1.35rem] text-xs'}
        `}
      >
        { label }
      </label>
      <span className={`absolute -bottom-5 left-0 text-xs ml-4 ${isValid ? 'text-gray' : 'text-red'}`}>
        { isValid ? helperMassage : errorMassage }
      </span>
    </div>
  )
}

export { Input }