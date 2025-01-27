import { bannerImg } from "../../assets/images";
const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative" >
    <img className="w-[300px] h-[280px] lgl:w-[500px] lgl:h-[680px] z-10" src={bannerImg} alt="bannerImg"/>
    <div className="absolute bottom-0 w-[350px] h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#333e5c] to-[#86a6f9] shadow-shadowOne flex justify-center items-center rounded-full"> </div>
</div>
  );
}

export default RightBanner;
