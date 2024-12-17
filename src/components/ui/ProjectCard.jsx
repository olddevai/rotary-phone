import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../../utils/motion';
import { GithubIcon, LiveDemoIcon } from './Icons';

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
          glare: true,
          "max-glare": 0.5,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-card transition-all duration-300"
      >
        <div className="relative w-full h-[230px] cursor-pointer group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <GithubIcon className="w-1/2 h-1/2" />
            </div>
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <LiveDemoIcon className="w-1/2 h-1/2" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] hover:text-secondary transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color} px-2 py-1 rounded-full bg-black-200 hover:scale-105 transition-all duration-300`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};