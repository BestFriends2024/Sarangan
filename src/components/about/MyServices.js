import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="UI/UX Design"
        subTitle="UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Chatbot Application"
        subTitle="If we want users to like our software, we should design it to behave like a likeable person: respectful, generous and helpful."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Our SEO services are designed to help you reach your online potential"
      />
    </div>
  );
};

export default MyServices;
