"use client";
import React, { useState, useRef, MouseEvent, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Volunteer from "./_components/Volunteer";
import { ModeToggle } from "@/components/ModeToggle";

type Project = {
  id: number;
  title: string;
  description: string;
};

type Experience = {
  title: string;
  description: string;
};

const projects: Project[] = [
  { id: 1, title: "wijhati", description: "Description for Project 1" },
  { id: 2, title: "daresni", description: "Description for Project 2" },
  { id: 3, title: "matjari", description: "Description for Project 3" },
  { id: 4, title: "innospace", description: "Description for Project 4" },
];

const experiences: Experience[] = [
  {
    title: "Alphabit Club 💙",
    description: "Helped prepare and serve meals for the homeless community every weekend.",
  },
  {
    title: "Ingeniums Club 👾",
    description: "Organized and participated in local park cleanups to promote environmental awareness.",
  },
  {
    title: "Gdg sba 🤖",
    description: "Assisted in taking care of animals and helped with adoption events at a local shelter.",
  },
];

export default function Home() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRefs = useRef<(React.RefObject<HTMLDivElement>)[]>(projects.map(() => React.createRef<HTMLDivElement>()));

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>, index: number) => {
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

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, title: string) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(title);
    }
  };

  return (
    
    <div className="flex flex-col mb-56 w-full max-w-2xl mx-auto px-4">
        <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>
      <Avatar className="mt-10 mb-6 w-20 h-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold mb-3">Hi,I'm Meriem👋</h1>
      <p className="text-sm">Description idk yet lol</p>
      <br />
      <br />
      <h1 className="text-lg font-bold mb-2">Currently cooking 👨‍🍳</h1>
      <Separator className="mb-2" />
      <h1 className="text-base font-semibold  ">Medical project</h1>  

      <p className="mb-4 font-normal text-gray-500 text-normal">
      its a web application for diabetic patients it helps them to organize themselves more with diets and medecines using the gemini api 
      </p>
      <h1 className="text-base font-semibold  ">Continue learning</h1>  

      <p className="mb-8 font-normal text-gray-500 text-normal">
     learning more about web development and how to make it better and also Devops since its my field in college!!
      </p>
      
      <h2 className="text-lg font-bold mb-4">Projects 🏗️</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            ref={cardRefs.current[index]}
            className="w-[300px] h-[250px] transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden hover:shadow-lg hover:-translate-y-1 border border-gray-400"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => handleMouseMove(e, index)}
            onClick={() => handleClick(project.title)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyDown(e, project.title)}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
              style={{
                background:
                  hoveredCard === index
                    ? `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.2), transparent 100%)`
                    : "",
                opacity: hoveredCard === index ? 1 : 0,
              }}
            />
            <CardHeader className="w-[300px] relative z-20">
              <img
                src={`https://picsum.photos/seed/${project.id}/400/200`}
                alt={`${project.title} image`}
                className="w-full border rounded-sm"
              />
            </CardHeader>
            <CardTitle className="mb-2 ml-6">{project.title}</CardTitle>
            <CardContent className="relative z-20">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <h1 className="text-lg font-bold mb-4">Volunteering 💁</h1>
        <Separator className="mt-4" />
        <Volunteer experiences={experiences} />
      </div>
    </div>
  );
}

