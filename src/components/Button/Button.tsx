import { ButtonProps } from "../../models/models"

const Button = ({ title, onClick, disabled, type }: ButtonProps) => {
  return (
    <button
      className="
        min-w-[6.25rem] h-[2.12rem] rounded-full text-black py-1 px-[1.1866rem] bg-yellow
        hover:bg-light-yellow focus:bg-light-yellow focus:outline-none active:bg-yellow
        disabled:bg-disabled-gray disabled:text-light-white
      "
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
    >
      { title }
    </button>
  )
}

export { Button }