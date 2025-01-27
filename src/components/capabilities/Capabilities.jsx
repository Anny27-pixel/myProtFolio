import { CgWebsite } from "react-icons/cg";
import { GiArchiveResearch } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import Title from "../layouts/Title";
import CardBox from "./CardBox";

const Capabilities = () => {
  return (
    <section id="capabilities" className="w-full py-11 pb-10 border-b-[1px] border-b-slate-800">
      <Title title="Capabilities" des="Skills That Define Me" />
      <div className="grid grid-cols-3 gap-6">
          <CardBox 
          title="Website Development"
          des="Skilled in building responsive websites with HTML, CSS, TailwindCSS, Bootstrap, JavaScript, and React.js. Proficient in React hooks, UI/UX (Figma), and creating dynamic, interactive web application layouts."
          icon = {<CgWebsite />}
          />
          <CardBox           
          title="Research Work"
          des='I specialize in machine learning-based theses using primary and secondary tabular datasets, focusing on data preprocessing, feature engineering, and model implementation in Google Colab and Jupyter Notebooks. My paper was accepted at ECCE 2025.'
          icon = {<GiArchiveResearch/>}
          />
          <CardBox           
          title="Machine Learning Projects"
          des='I recently developed a "Smart Attendance System" using various ML algorithms, tools, and libraries to address real-world problems. For development, I primarily use VSCode as my integrated development environment (IDE).'
          icon = {<GoProjectSymlink/>}
          />
          <CardBox           
          title="Python/Django Projects"
          des='I recently worked on a machine learning project, applying various ML algorithms, tools, and libraries to address real-world problems. For development, I primarily use VSCode as my integrated development environment (IDE).'
          icon = {<GrProjects/>}
           />
      </div>
    </section>
  );
}

export default Capabilities;
