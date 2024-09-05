import Button from "./Button"


const ButtonContainer = () => {
    const buttons = [{title : "About me"}, {title : "Experience"}, {title : "Recommended"}]
  return (
    <div className="mx-[40px] my-[8px] bg-[#171717] flex justify-evenly rounded-[18px]">
        {
            buttons.map((btn)=>(
                <Button key={btn.title} btn={btn} />
            ))
        }
    </div>
  )
}

export default ButtonContainer