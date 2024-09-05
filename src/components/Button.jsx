

const Button = ({btn}) => {
    const title = btn.title
  return (
        <button className="text-white bg-[#28292F] py-[8px] px-[36px] my-[4px] mx-[2px] rounded-[12px] font-medium text-[13px] font-Poppins">{title}</button>
  )
}

export default Button