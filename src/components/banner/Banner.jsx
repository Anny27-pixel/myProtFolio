import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Banner = () => {
    const [ text ] = useTypewriter({
        words:['Hire me as a MERN Stack Developer!','Download my resume now.','Let’s create something great!','Passion meets code.','Code your dreams with me!','Build. Innovate. Inspire.','Let’s craft the future together.','Your project, my expertise.'],
        loop : true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,

    });
  return (
    <section id="home" className="w-full py-20 flex border-b-[2px] border-b-slate-800 font-titleFont">
        <div className="w-1/2" >
            <div className="flex flex-col gap-6">
                <h4 className="text-lg font-normal">Hello Everyone , Welcome to my Era</h4>
                <h1 className="text-4xl font-bold text-slate-300">
                    Hi, I am 
                    <span className="text-colorfulText text-6xl"> JABIN TASMIN ANNY !!!</span>
                </h1>
                <h2 className="text-2xl font-bold text-slate-300">
                    <span>{text}</span>
                    <Cursor 
                    cursorBlinking = 'false'
                    cursorStyle = '|'
                    cursorColor='#ab1a60'
                     />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis a iusto corrupti quia est molestias veritatis commodi sit. Sit sunt corrupti velit consequuntur repellat fuga voluptatum placeat accusantium illo.</p>
            </div>
        </div>
        <div className="w-1/2" >hhh</div>
    </section>
  );
}

export default Banner;
