import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer 2"
            company="Gupshup"
            companyLink="https://gupshup.io"
            time="2022-present"
            address="Bengalore, India"
            work="working as a Frontend engineer and building fantastic products using Next.js and React.js and enriching the customer experience of conversational messaging platforms"
          />
          <Details
            position="Software Engineer"
            company="Part Analytics"
            companyLink="https://partanalytics.com/"
            time="2021-2022"
            address="Bengalore, India"
            work="Built the awesome supplier chain SaaS product end to end which enriches customers' data and provides a platform for managing commodity spend by supplier, commodity type, business, or product including actionable insights on cost and risk reduction opportunities and worked as a Frontend engineer by developing a beautiful UI using React.js"
          />
          <Details
            position="Systems Engineer"
            company="Infosys"
            companyLink="https://www.infosys.com"
            time="2019-2021"
            address="Bengalore, India"
            work="Worked as Front End/web developer in a financial development project for client Asian Development Bank, Product called Integrated Disbursement System which is for lending loans, grants, and technical assistance to major firms, countries, and major development projects throughout the globe.
            and developed from scratch on Front End in Angular 7 with multiple modules and pages which are very high functionalities."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
