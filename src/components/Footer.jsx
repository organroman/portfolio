import { github, gitlab, linkedin, rLogo } from "../assets";

const Footer = () => {
  return (
    <div className={"max-w-7xl mx-auto flex justify-between items-center py-3"}>
      <div className="flex items-center gap-2">
        <img src={rLogo} alt="logo" className="w-14 h-14 object-contain" />
        <h6>2023</h6>
      </div>
      <div className={`flex  items-center gap-2`}>
        <a
          href="https://www.linkedin.com/in/rorgan/"
          className="block  w-10 h-10"
        >
          <img src={linkedin} />
        </a>
        <a href="https://github.com/organroman" className="block w-10 h-10">
          <img src={github} />
        </a>
        <a href="https://gitlab.com/r.organ" className="block  w-10 h-10">
          <img src={gitlab} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
