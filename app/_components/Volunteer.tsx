import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Experience = {
  title: string;
  description: string;
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
  );
}

export default Volunteer;
