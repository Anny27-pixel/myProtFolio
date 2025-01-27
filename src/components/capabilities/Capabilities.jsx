import { SiCodeproject, SiRoamresearch, SiWeightsandbiases } from "react-icons/si";
import Title from "../layouts/Title";
import CardBox from "./CardBox";

const Capabilities = () => {
  return (
    <section id="capabilities" className="w-full h-[800px] py-11 border-b-[1px] border-b-slate-800">
      <Title title="Capabilities" des="Skills That Define Me" />
      <div className="grid grid-cols-2 gap-20">
          <CardBox 
          title="Website Development"
          des="Expertise in building responsive websites using HTML, CSS,Tailwindcss, Bootstrap, JavaScript, and React.js.Experience with state management using React hooks, along with UI/UX (Figma) optimization for better user experience.Developed interactive features and dynamic layouts for web applications."
          icon = {<SiWeightsandbiases/>}
          />
          <CardBox           
          title="Research Work"
          des='I focus on machine learning-based thesis using both primary and secondary tabular datasets. My work involves data preprocessing, feature engineering, and implementing machine learning models using Google Colab and Jupyter Notebooks. Recently, my paper titled "An Empirical Machine Learning Approach Towards Effective Sleep Disorder Prediction" was accepted for presentation at the 2025 4th International Conference on Electrical, Computer and Communication Engineering (ECCE 2025)."'
          icon = {<SiRoamresearch/>}
          />
          <CardBox           
          title="Machine Learning Projects"
          des='I have recently worked on a machine learning-based project called the "Smart Attendance System". In my projects, I utilize a variety of ML algorithms, tools, and libraries to solve real-world problems. For development, I primarily use VSCode as my integrated development environment (IDE).'
          icon = {<SiCodeproject/>}
          />
          <CardBox           
          title="Python/Django Projects"
          des='Built Python applications and Django-based websites with dynamic content management, authentication, and form handling.Designed and developed REST APIs using Django REST Framework (DRF).Experience with database management using SQLite and MySQL and efficient backend integration.'
          icon = {<SiCodeproject/>}
           />
      </div>
    </section>
  );
}

export default Capabilities;
