import { HiArrowRight } from "react-icons/hi";
function CardBox(capabilities) {
  return (
    <div   className="w-full px-12 h-85 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#5b7bce] group hover:bg-gradient-to-b hover:from-[#182751] hover:to-[#333e5c] transition-colors duration-100">
        <div className="h-72">
            <div className="flex h-full flex-col gap-4 translate-y-1">
            <div>
                <span className="text-4xl text-colorfulText">{capabilities.icon}</span>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-titleFont font-bold text-slate-300">{capabilities.title}</h2>
                <p className="base">{capabilities.des}</p>
                <span className="text-2xl text-colorfulText">
                    < HiArrowRight />
                </span>
            </div>
            </div>
        </div>
    </div>
  );
}

export default CardBox;
