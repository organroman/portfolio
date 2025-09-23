import { VerticalTimelineElement } from "react-vertical-timeline-component";
import PropTypes from "prop-types";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px]">{experience.title}</h3>

      <a
        href={experience.web}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary text-[16px] font-semibold hover:underline hover:underline-offset-4"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </a>

      <ul className="mt-5 list-desc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider lis"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string,
    iconBg: PropTypes.string,
    icon: PropTypes.string,
    company_name: PropTypes.string,
    title: PropTypes.string,
    points: PropTypes.array,
    web: PropTypes.string,
  }),
};

export default ExperienceCard;
