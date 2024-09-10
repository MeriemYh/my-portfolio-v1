"use client";
import React, { useState, useRef, MouseEvent, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Volunteer from "./_components/Volunteer";
import { ModeToggle } from "@/components/ModeToggle";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type DateDescription = {
  date: string;
  description: string;
};

type Experience = {
  title: string;
  description: string;
  dates: DateDescription[];
};

const projects: Project[] = [
  { id: 1, title: "wijhati", description: "Wijhati is a web application that offers great guidance for new high school graduates", image: "images/wijhati.png" },
  { id: 2, title: "daresni", description: "A web application for online courses and language learning.", image: "images/home1.png" },
  { id: 3, title: "InnoSocial", description: "A web application that allows ESI SBA employees to submit and manage social programs.", image: "images/innoscial.png" },
];

const experiences: Experience[] = [
  {
    title: "Alphabit Club 💙",
    description: "Alphabit Club is the scientific club of ESI SBA, focused on bringing together tech enthusiasts and providing students with essential resources.",
    dates: [
      { date: "January 2020", description: "Joined the club and started contributing to the project." },
      { date: "February 2021", description: "Remained as an active member and contributed as a social media member." },
    ],
  },
  {
    title: "Ingeniums Club 👾",
    description: "Ingeniums is a community of motivated students focused on learning, sharing, and innovating. It fosters growth, integration, and celebrates cultural diversity in a welcoming environment.",
    dates: [
      { date: "January 2021", description: "Started as a Finance member and contributed to all events of the year." },
      { date: "January 2022", description: "Stepped into the role of president for a period of time, strengthening my leadership skills and guiding the team through various initiatives." },
      { date: "January 2023/2024", description: "Became an alumni, offering guidance and support to the club while staying connected to its growth and community." },
    ],
  },
  {
    title: "Gdg sba 🤖",
    description: "The Google Developers Student Club (GDSC SBA) is a student-led community focused on developing technical skills and innovation. It offers workshops, collaborative projects, and a supportive environment for students to learn, connect, and create impactful solutions.",
    dates: [
      { date: "July 2022", description: "Joined the club and assumed the role of leader in the Finance and Partnerships department, gaining valuable insights and experience." },
    ],
  },
];

const skills: string[] = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "NestJS", "Express.js", "MongoDB", "MySQL", "Microservices", "Figma"
];

export default function Home() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    projects.map(() => React.createRef<HTMLDivElement>())
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (cardRefs.current[index].current) {
      const rect = cardRefs.current[index].current!.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleClick = (title: string) => {
    router.push(`/${title}`);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    title: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(title);
    }
  };

  return (
    <BlurFade delay={0.25} inView>
      <div className="flex flex-col mb-56 w-full max-w-2xl mx-auto px-4">
        <Avatar className="mt-10 mb-6 w-20 h-20">
          <AvatarImage src="/images/profile.png" alt="Profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold mb-3">Hi, I'm Meriem👋</h1>
        <p className="text-sm">A future software engineer with a passion for web development and open source. I like sketching things and bringing them to life using technical skills.</p>
        <br />
        <br />
        <h1 className="text-lg font-bold mb-2">Currently cooking 👨‍🍳</h1>
        <Separator className="mb-2" />
        <h1 className="text-base font-semibold">Medical project</h1>
        <p className="mb-4 font-normal text-gray-500">
          It's a web application for diabetic patients. It helps them organize their diets and medicines using the Gemini API.
        </p>
        <h1 className="text-base font-semibold">Continue learning</h1>
        <p className="mb-8 font-normal text-gray-500">
          Learning more about web development and how to improve it. Also focusing on DevOps as it's my field in college!
        </p>

        <h2 className="text-lg font-bold mb-4">Projects 🏗️</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              ref={cardRefs.current[project.id - 1]}
              className="w-[300px] h-[300px] transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden hover:shadow-lg hover:-translate-y-1 border border-gray-400"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleMouseMove(e, project.id - 1)}
              onClick={() => handleClick(project.title)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
              onKeyDown={(e) => handleKeyDown(e, project.title)}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
                style={{
                  background:
                    hoveredCard === project.id
                      ? `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px,rgba(255, 255, 255, 0.1), transparent 100%)`
                      : "",
                  opacity: hoveredCard === project.id ? 1 : 0,
                }}
              />
              <CardHeader className="w-[300px] relative z-20">
                <img
                  src={project.image}
                  alt={`${project.title} image`}
                  className="w-full h-[140px] border rounded-sm"
                />
              </CardHeader>
              <CardTitle className="ml-6 mb-1">{project.title}</CardTitle>
              <CardContent className="relative z-20">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-20 mb-20">
          <h1 className="text-5xl mb-4 font-bold">I like teamwork</h1>
          <p className="text-gray-500 text-xl font-normal ml-10 mt-3">
            During my time at university, I contributed to organizing and participating in various club events. It was eye-opening to see the possibilities brought to life by a group of motivated and passionate individuals.
          </p>
        </div>

        <div className="mb-11">
          <Volunteer experiences={experiences} />
        </div>

        <h2 className="text-lg font-bold mb-4">Skills 🥷</h2>
        <Separator className="mb-4"/>
        <div className="w-full flex flex-wrap justify-start gap-2 mt-2 mb-2">
          {skills.map((skill, index) => (
            <Badge key={index} className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
