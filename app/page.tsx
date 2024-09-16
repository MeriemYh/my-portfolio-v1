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
  {
    id: 1,
    title: "wijhati",
    description:
      "Wijhati est une application web qui offre une excellente orientation aux nouveaux diplômés du lycée.",
    image: "images/wijhati.png",
  },
  {
    id: 2,
    title: "InnoSocial",
    description:
      "Une application web qui permet aux employés de l'ESI SBA de soumettre et de gérer des programmes sociaux.",
    image: "images/inno.jpg",
  },
  {
    id: 3,
    title: "daresni",
    description:
      "Une application web pour des cours en ligne et l'apprentissage des langues.",
    image: "images/home1.png",
  },
];

const experiences: Experience[] = [
  {
    title: "Alphabit Club 💙",
    description:
      "Alphabit Club est le club scientifique de l'ESI SBA, dédié à rassembler les passionnés de technologie et à fournir aux étudiants des ressources essentielles.",
    dates: [
      {
        date: "Janvier 2020",
        description:
          "J'ai rejoint le club et commencé à contribuer aux projets.",
      },
      {
        date: "Février 2021",
        description:
          "Je suis resté membre actif et j'ai contribué en tant que membre du département des médias sociaux.",
      },
    ],
  },

  {
    title: "Ingeniums Club 👾",
    description:
      "Ingeniums est une communauté d’étudiants motivés axée sur l’apprentissage, le partage et l’innovation. Elle favorise la croissance, l’intégration et célèbre la diversité culturelle dans un environnement accueillant.",
    dates: [
      {
        date: "Janvier 2021",
        description:
          "J'ai commencé comme membre du département Finance et j'ai contribué à tous les événements de l'année.",
      },
      {
        date: "Janvier 2022",
        description:
          "J'ai assumé le rôle de président pendant un certain temps, renforçant mes compétences en leadership et guidant l'équipe à travers diverses initiatives.",
      },
      {
        date: "Janvier 2023/2024",
        description:
          "J'ai devenu un alumni, offrant des conseils et de l'aide au club tout en restant connecté à sa croissance et à sa communauté.",
      },
    ],
  },
  {
    title: "Gdsc sba 🤖",
    description:
      "Le Google Developers Student Club (GDSC SBA) est une communauté dirigée par des étudiants, axée sur le développement des compétences techniques et l'innovation. Il propose des ateliers, des projets collaboratifs et un environnement de soutien pour aider les étudiants à apprendre, se connecter et créer des solutions impactantes.",
    dates: [
      {
        date: "Juillet 2022",
        description:
          "J'ai rejoint le club et j'ai assumé le rôle de leader dans le département Finance et Partenariats, acquérant ainsi des connaissances et une expérience précieuses.",
      },
    ],
  },
];

const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NextJS",
  "NestJS",
  "ExpressJS",
  "MongoDB",
  "Cassandra",
  "PowerBI",
  "Pentaho",
  "MySQL",
  "Microservices",
  "Figma",
  "Astah",
  "Bootstrap",
  "Shadcn",
  "Ant Design"
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
        <h1 className="text-3xl font-bold mb-3">Salut, je suis Meriem👋</h1>
        <p className="text-sm">
          Une future ingénieure en logiciel avec une passion pour le
          développement web et l'open source.
        </p>
        <br />
        <br />
        <h1 className="text-lg font-bold mb-2">En plein projet culinaire 👨‍🍳</h1>
        <Separator className="mb-2" />
        <h1 className="text-base font-semibold">Projet médical</h1>
        <p className="mb-4 font-normal text-gray-500">
          C'est une application web pour les patients diabétiques. Elle les aide
          à organiser leurs régimes alimentaires et leurs médicaments en
          utilisant l'API Gemini.
        </p>

        <h2 className="text-lg font-bold mb-4">Projets 🏗️</h2>
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
          <h1 className="text-5xl mb-4 font-bold text-center">
            J'apprécie le travail d'équipe.
          </h1>
          <p className="text-gray-500 text-xl font-normal ml-10 mt-3">
            Pendant mon temps à l'université, j'ai contribué à l'organisation et
            à la participation à divers événements de clubs. J'ai été
            impressionné par les possibilités offertes par un groupe de
            personnes motivées et passionnées.
          </p>
        </div>

        <div className="mb-11">
          <Volunteer experiences={experiences} />
        </div>

        <h2 className="text-lg font-bold mb-4">Skills 🥷</h2>
        <Separator className="mb-4" />
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
