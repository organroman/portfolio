import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SERVICES } from "../../constants/services";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import ServiceCard from "./ServiceCard";
import { ABOUT } from "../../constants/descriptions";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {ABOUT}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
