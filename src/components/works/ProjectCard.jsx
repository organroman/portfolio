import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { github, openNew } from "../../assets";
import { fadeIn } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  production_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="mt-5 relative">
          {/* <div className=""> */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div className="absolute inset-0 flex justify-end items-center card-img-hover">
            <div
              onClick={() => window.open(production_link, "_blank")}
              className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={openNew}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        {/* </div> */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {" "}
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  production_link: PropTypes.string,
};

export default ProjectCard;
