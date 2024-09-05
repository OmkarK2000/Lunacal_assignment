import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const GalleryContainer = () => {
  return (
    <div className="relative mt-[20px] ml-[40px] mr-[74px] pt-[1px] bg-[#363C43] [box-shadow:5.67px_5.67px_3.78px_0px_#00000066] rounded-[16px] text-white">
        <span className="absolute">&#63;</span> 
        <div className="mx-[40px] my-[8px] flex justify-between">
            <span className="bg-[#171717] px-[10px] py-[10px]">Gallery</span>
            <span>
                <button>+ ADD IMAGE</button>
                <button><IoArrowBackOutline /></button>
                <button><IoArrowForward /></button>
            </span>
        </div>
    </div>
  )
}

export default GalleryContainer