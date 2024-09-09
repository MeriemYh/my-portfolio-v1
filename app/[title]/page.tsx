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
  description: string;
  badges: string[];
  image: string;
  type: string;
  url: string;
};

const groups: Group[] = [
  {
    id: "1",
    title: "wijhati",
    description: "Wijhati is a web application designed to assist high school graduates in selecting the most suitable college based on various criteria such as academic performance, region, and high school specialization. Initially developed by a team of five second-year college students, the application underwent significant enhancements following its presentation. It evolved into a startup that now includes features allowing schools to register and provide students with information about their institutions.",
    badges: ["Html", "Css", "Jquery", "Php", "MySql"],
    image: "./images/wijhati2.png",
    type: "website",
    url: "https://www.wijhati.dz/",
  },
  {
    id: "2",
    title: "daresni",
    description: "Daresni is a web application for online courses and language learning. It provides a platform for students to access and learn courses from various teachers (tutotors) and language learning resources from different sources,it is build based on microservices architecture and uses MongoDB and Mysql as a databases also we used CQRS pattern for our microservices to make our code more readable and maintainable.",
    badges: ["Nextjs","Tailwind", "Nestjs", "Mongodb","Docker"],
    image: "./images/dashboardadmin.png",
    type: "gitHub",
    url: "https://github.com/marwa-nassane0052/darasnie-nextjs-project/tree/main",
  },

  {
    id: "3",
    title: "InnoSocial",
    description: "InnoSocial is a web application designed to assist employees at ESI SBA in managing social programs such as vacations and trips. Additionally, it features a comprehensive system for managing the school's budget, streamlining both program administration and financial oversight.",
    badges: ["Nextjs", "Tailwind", "Php","Mongodb"],
    image: "./images/innosocial2.png",
    type: "github",
    url: "https://github.com/wiam200/projet_1CS",
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

  return (
    <BlurFade delay={0.25} inView>
      <div className="flex flex-col mt-10 w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4">{group.title}</h1>
          <p className="text-lg px-4 font-normal text-center">
            {group.description}
          </p>
          <Button className="gap-2 mb-6" variant="ghost">
            <Link href={group.url} className="flex items-center gap-2">
              {group.type}
              <RxArrowRight className="mr-2 h-4 w-4" />
            </Link>
          </Button>

          <Card className="relative flex-col w-[850px] h-[400px] mb-2 rounded-xl overflow-hidden shadow-slate-500 shadow-sm">
            <CardContent className="p-0 h-full w-full">
              <img
                src={group.image}
                alt={group.title}
                className="object-cover w-full h-full rounded-xl"
              />
            </CardContent>
          </Card>

          <div className="w-full flex flex-wrap justify-start gap-2 mt-2 mb-2 mr-28">
            {group.badges.map((badge, index) => (
              <Badge key={index} className="text-sm">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

export async function generateStaticParams() {
  return groups.map((group) => ({
    title: group.title,
  }));
}
