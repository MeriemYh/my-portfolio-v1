import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RxArrowRight } from "react-icons/rx";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

type Group = {
  id: string;
  title: string;
  problematique: string;
  solution: string;
  badges: string[];
  image: string;
  type: string;
  url: string;
  role: string;
  year: string;
  target_audiance: string;
  main_functionalities: string[];
  client_url: string;
  admin_url: string;
  doc_url?: string; // New property for doc URL
};

const groups: Group[] = [
  {
    id: "1",
    title: "wijhati",
    problematique:
      "During my time as a high school student, many of us faced uncertainty when it came to choosing the right path for college. Due to a lack of accessible information about universities and academic programs in our country, many of my peers ended up making choices they later regretted, which had a lasting impact on their lives.",
    solution:
      "Wijhati is a web application designed to guide high school students in making informed college decisions. It provides resources such as university details, academic programs, and career advice. Initially a school project, Wijhati quickly evolved into a startup, making the platform publicly accessible. It features two interfaces: a client side for students to explore colleges and their offerings, and an admin side for school administrators to manage operations efficiently.",
    badges: ["Html", "Css", "Jquery", "Php", "MySql"],
    image: "images/head-wijhati.png",
    type: "website",
    url: "https://www.wijhati.dz/",
    role: "Front-End developer",
    year: "2nd year of college",
    target_audiance: "High school graduates",
    main_functionalities: [
      "Filtering and searching for colleges based on specific personalized criteria",
      "Consulting information about the college and its facilities, as well as all information the student needs to know",
      "Creating a personalized profile for the school and filling it with all necessary information about the establishment",
    ],
    client_url: "images/wijhati2.png",
    admin_url: "images/adminside.png",
  
  },
  {
    id: "3",
    title: "daresni",
    problematique:
      "Students face challenges traveling to various locations for private lessons, which can be time-consuming and inconvenient. Meanwhile, teachers struggle to find stable jobs as the rise of freelancing and remote work reshapes the job market, making it harder for them to secure consistent employment.",
    solution:
      "Daresni is a web application built using microservices and CQRS architecture, with Kafka handling real-time data streaming and event-driven communication for better readability and maintainability. The platform addresses educational challenges by offering online lessons, allowing students to save travel time and helping teachers connect with students for flexible tutoring Daresni features three dashboards: Admin, for managing teacher applications, lessons, exams, and students; Student, for booking teachers and applying for lessons; and Teacher, for creating sessions, applying for tutor roles, and managing schedules.",
    badges: ["Nextjs", "Tailwind", "Nestjs", "Mongodb", "Springboot", "Kafka"],
    image: "./images/dashboardadmin.png",
    type: "gitHub",
    url: "https://github.com/marwa-nassane0052/darasnie-nextjs-project/tree/main",
    role: "Fullstack developer",
    year: "4th year of college",
    target_audiance:
      "High school students, elementary school students and language ",
    main_functionalities: [
      "authentication service(Nestjs,mongodb,kafka)",
      "Group microservice(Nestjs,kafka,mongodb)",
      "Notification microservice(Nestjs,kafka,mongodb)",
      "Filtering miroservice(Nestjs,Kafka,Mongodb)",
      "Forum and messagerie microservice(socket.io,Nodejs,Mongodb)",
      "Languages microservice(Springboot,Mongodb)",
      "Payement microservice(Springboot,mongodb).",
      
    ],
    client_url: "./images/client-daresni.png",
    admin_url: "./images/admin-daresni.png",
        doc_url: "docs/daresni.pdf",
  },
  {
    id: "2",
    title: "InnoSocial",
    problematique:
      "The current manual system for managing social programs at ESI SBA is inefficient, leading to delays and difficulties for both employees and administrators. Without a digital solution, organizing and tracking requests becomes a challenge, underscoring the need for a more efficient online platform.",
    solution:
      "Managing social programs often involves inefficient manual processes for both employees and administrators. To tackle this, the QuantumLeap team from ESI SBA is developing InnoSocial, a web application that streamlines the management of social program requests. InnoSocial allows employees to easily participate in social programs, reducing administrative burdens and enhancing efficiency. The platform also features dashboards for both employees and administrators to track activities and progress, allowing them to focus more on their work and less on administrative tasks.",
    badges: ["Nextjs", "Tailwind", "Php", "Mongodb"],
    image: "./images/head-inno.jpg",
    type: "github",
    url: "https://github.com/wiam200/projet_1CS",
    role: "Front-End developer",
    year: "3rd year of college",
    target_audiance: "higher school of computer science employees",
    main_functionalities: [
      "offering profiles for each employee created by the administrator",
      "managing employee applications for vacations,trips,days off...etc",
      "managing the budget of school",
      "announcements for the school administrators",
      "sending notifications to employees",
      "creating a dashboard for employees and administrators",
    ],
    client_url: "./images/inno1.jpg",
    admin_url: "./images/inno2.jpg",
    
    doc_url: "docs/inno.pdf",
  },
];

type GroupsDisplayProps = {
  params: {
    title: string;
  };
};

export default function GroupsDisplay({ params }: GroupsDisplayProps) {
  const group = groups.find((g) => g.title === params.title);

  if (!group) {
    return <div>Project not found</div>;
  }

  const getNextProjectTitle = (currentId: string) => {
    const currentIndex = groups.findIndex((g) => g.id === currentId);
    if (currentIndex === groups.length - 1) {
      return groups[0].title;
    }
    return groups[currentIndex + 1].title;
  };

  const nextProjectTitle = getNextProjectTitle(group.id);

  return (
    <BlurFade delay={0.25} inView>
      <div className="flex flex-col mt-10 w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl mb-6 mt-6 ">{group.title}</h1>
          <Card className="relative w-full max-w-[850px] mb-2 rounded-xl overflow-hidden shadow-slate-500 shadow-sm">
      <div className="relative pb-[52.35%]"> {/* 445/850 ≈ 52.35% */}
        <CardContent className="absolute inset-0 p-0">
          <img
            src={group.image}
            alt={group.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </CardContent>
      </div>
    </Card>

          <div className="w-full flex flex-wrap justify-start gap-2 mt-2 mb-2 ">
            {group.badges.map((badge, index) => (
              <Badge key={index} className="text-sm">
                {badge}
              </Badge>
            ))}
          </div><div className="flex flex-row mt-10 space-x-4">
      <Link
        href={group.url}
        className="flex items-center gap-2"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="gap-2 mb-6" variant="ghost">
          {group.type}
          <RxArrowRight className="h-4 w-4" />
        </Button>
      </Link>
      {group.doc_url && (
        <Link
          href={group.doc_url}
          className="flex items-center gap-2"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="gap-2 mb-6" variant="ghost">
            Doc
            <RxArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>

          <h1 className="font-bold text-3xl mt-6 mb-4">Problem</h1>
          <p className="text-lg px-4 font-semibold  text-gray-500 mb-10">
            {group.problematique}
          </p>
          <h1 className="font-bold text-3xl mt-6 mb-4">Solution</h1>
          <p className="font-semibold  text-gray-500 mb-10">
            {group.solution}
          </p>
          <div className="flex w-full justify-between mt-10 mb-12">
            <div className="w-1/2 pr-10 flex flex-col">
              <h1 className="font-semibold text-2xl">Role</h1>
              <p className="text-gray-500 font-semibold">{group.role}</p>
              <h1 className="font-semibold text-2xl">Year</h1>
              <p className="text-gray-500 font-semibold">{group.year}</p>
              <h1 className="font-semibold text-2xl">Target audience</h1>
              <p className="text-gray-500 font-semibold">
                {group.target_audiance}
              </p>
            </div>
            <div className="w-1/2 pl-10">
              <h1 className="font-semibold text-2xl">Main features</h1>
              <ul className="list-disc ml-4 space-y-2 font-semibold text-gray-500">
                {group.main_functionalities.map((functionality, index) => (
                  <li key={index} className="relative">
                    <span className="before:content-['•'] before:text-black before:absolute before:-left-4">
                      {functionality}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Card className="relative flex-col w-[850px] h-fit mb-2 rounded-xl overflow-hidden shadow-slate-500 shadow-sm">
          <CardContent className="p-0 h-fit w-full">
            <img
              src={group.client_url}
              alt={group.title}
              className="object-cover w-full h-full rounded-xl"
            />
          </CardContent>
        </Card>
     
        <Card className="relative flex-col w-[850px] h-[445px] mb-2 rounded-xl overflow-hidden shadow-slate-500 shadow-sm mt-4">
          <CardContent className="p-0 h-full w-full">
            <img
              src={group.admin_url}
              alt={group.title}
              className="object-cover w-full h-full rounded-xl"
            />
          </CardContent>
        </Card>
    
        </div>
        
      </div>
        
      <div className="flex justify-center w-full mb-20">
        <Button className="gap-2" variant="ghost">
          <Link
            href={`/${nextProjectTitle}`}
            className="flex items-center gap-2"
          >
            Next project
            <RxArrowRight className="mr-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </BlurFade>
  );
}

export async function generateStaticParams() {
  return groups.map((group) => ({
    title: group.title,
  }));
}
