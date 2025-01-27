import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaGithub,FaInstagram, FaReact } from 'react-icons/fa';
import { SiTailwindcss,SiFigma, SiBootstrap, SiNodedotjs } from 'react-icons/si';

const LeftBanner = () => {
    const [ text ] = useTypewriter({
        words:['Hire me as a MERN Stack Developer!','Download my resume now.','Let’s create something great!','Passion meets code.','Code your dreams with me!','Build. Innovate. Inspire.','Let’s craft the future together.','Your project, my expertise.'],
        loop : true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,

    });
  return (
    <div className="w-1/2 flex flex-col gap-11" >
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
    </div>
   <div className='flex justify-between'>
        <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Reach me</h2>
            <div className='flex gap-4'>
                <a href="https://www.facebook.com/jabintasmin.anny.27/" target="_blank" rel="noopener noreferrer">
                <span className='bannerIcon'>
                <FaFacebookF/>
                </span>
                </a>
                <a href="https://www.linkedin.com/in/jabin-tasmin-anny-899601206/" target="_blank" rel="noopener noreferrer">
                <span className='bannerIcon'>
                <FaLinkedinIn />
                </span>
                </a>
                <a href="https://github.com/Anny27-pixel" target="_blank" rel="noopener noreferrer">
                <span className='bannerIcon'>
                <FaGithub />
                </span>
                </a>
                <a href="https://www.instagram.com/cherry_ja15/" target="_blank" rel="noopener noreferrer">
                <span className='bannerIcon'>
                <FaInstagram/>
                </span>
                </a>
            </div>
        </div>
        <div>
        <h2 className='text-base uppercase font-titleFont mb-4'>Expert In</h2>
            <div className='flex gap-4'>
                <span className='bannerIcon'>
                <FaReact/>
                </span>
                <span className='bannerIcon'>
                <SiTailwindcss/>
                </span>
                <span className='bannerIcon'>
                <SiBootstrap/>
                </span>
                <span className='bannerIcon'>
                <SiFigma/>
                </span>
                <span className='bannerIcon'>
                <SiNodedotjs/>
                </span>
            </div>
        </div>
   </div>
</div>
  );
}

export default LeftBanner;
