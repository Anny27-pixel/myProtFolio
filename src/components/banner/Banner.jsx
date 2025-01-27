import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section id="home" className="w-full pt-10 pb-5 flex border-b-[2px] border-b-slate-800 font-titleFont">
        <LeftBanner/>
        <RightBanner/>
    </section>
  );
}

export default Banner;
