import ButtonContainer from "./ButtonContainer"

const InfoContainer = () => {
  return (
    <div className='relative mt-[42px] ml-[40px] mr-[74px] pt-[1px] bg-[#363C43] [box-shadow:5.67px_5.67px_3.78px_0px_#00000066] rounded-[16px]'>
      <span className="absolute">&#63;</span> 
      <ButtonContainer/>
      <div className="mt-[20px] mx-[40px] text-[15px]  text-[#969696] leading-[20px] font-Plus_Jakarta_Sans">
        <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
        <p className="mt-[16px] pb-[20px]">I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters-Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
      </div>
      <div className="absolute bg-[#363C43] bg-red-400 mx-[40px] h-[20px]"></div>
    </div>
  )
}

export default InfoContainer