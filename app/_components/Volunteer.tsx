import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type DateDescription = {
  date: string;
  description: string;
};

type Experience = {
  title: string;
  description: string;
  dates: DateDescription[];
};

type VolunteerProps = {
  experiences: Experience[];
};

const Volunteer: React.FC<VolunteerProps> = ({ experiences }) => {
  return (
    <div className="flex flex-col">
      <Accordion type="single" collapsible className="w-full">
        {experiences.map((experience) => (
          <AccordionItem key={experience.title} value={experience.title}>
            <AccordionTrigger>{experience.title}</AccordionTrigger>
            <AccordionContent>
              <p>{experience.description}</p>
              <ul className="mt-4 space-y-2">
                {experience.dates.map((dateDesc, index) => (
                  <li key={index} >
                    <strong>{dateDesc.date}:</strong> <p className="text-gray-500 font-semibold">{dateDesc.description}</p>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Volunteer;
