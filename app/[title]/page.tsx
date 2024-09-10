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
    features: string;
    doc_url?: string; // New property for doc URL
  };

  const groups: Group[] = [
    {
      id: "1",
      title: "wijhati",
      problematique: "During my time as a high school student, many of us faced uncertainty when it came to choosing the right path for college. Due to a lack of accessible information about universities and academic programs in our country, many of my peers ended up making choices they later regretted, which had a lasting impact on their lives.",
      solution: "Wijhati is a web application that aims to provide guidance and support to high school students who are considering college. It offers a range of resources, including information about universities, academic programs, and career advice, to help students make informed decisions about their future.",
      badges: ["Html", "Css", "Jquery", "Php", "MySql"],
      image: "images/wijhati-head.png",
      type: "website",
      url: "https://www.wijhati.dz/",
      role: "Front-End developer",
      year: "2nd year of college",
      target_audiance: "High school graduates",
      main_functionalities: ["Filtering and searching for colleges based on specific personalized criteria", "Consulting information about the college and its facilities, as well as all information the student needs to know", "Creating a personalized profile for the school and filling it with all necessary information about the establishment"],
      client_url: "images/wijhati2.png",
      admin_url: "images/adminside.png",
      features: "The Wijhati project started as a school assignment but quickly became a shared passion. After completing it, we turned it into a startup to make the platform accessible to the public. Wijhati features two interfaces: the client side for students to explore colleges and their facilities, and the admin side for school administrators to manage operations efficiently."
    },
    {
      id: "2",
      title: "daresni",
      problematique: "Students face challenges traveling to various locations for private lessons, which can be time-consuming and inconvenient. Meanwhile, teachers struggle to find stable jobs as the rise of freelancing and remote work reshapes the job market, making it harder for them to secure consistent employment.",
      solution: "Daresni solves education challenges by offering online lessons that students can access from anywhere, saving them travel time. It also helps teachers by connecting them with students, providing flexible tutoring opportunities in the growing freelance market.",
      badges: ["Nextjs", "Tailwind", "Nestjs", "Mongodb", "Springboot", "Kafka"],
      image: "./images/dashboardadmin.png",
      type: "gitHub",
      url: "https://github.com/marwa-nassane0052/darasnie-nextjs-project/tree/main",
      role: "Fullstack developer",
      year: "4th year of college",
      target_audiance: "High school students, elementary school students and language ",
      main_functionalities: ["creating personalized profiles for students", "ability for tutors to apply for tutoring", "search for tutors based on specific criteria and book the suitable one", "creating dashboards for students and tutors", "managing payments and invoices", "sending notifications to students and tutors", "providing language learning resources and certifications for students", "offering tutoring sessions for tutors"],
      client_url: "./images/client-daresni.png",
      admin_url: "./images/admin-daresni.png",
      features: "Daresni is a web application based on microservices architecture since it was the main of the project in college also we used CQRS architecture for seperating databases integrated with  kafka for real-time data streaming and event-driven communication between services to make our code more readable and maintainable Daresni architecture consists 7 microservices and each of them has its own database and APIs for the client side and admin side and they are : authentication service(Nestjs,mongodb,kafka),Group microservice(Nestjs,kafka,mongodb),Notification microservice(Nestjs,kafka,mongodb),Filtering miroservice(Nestjs,Kafka,Mongodb),Forum and messagerie microservice(socket.io,Nodejs,Mongodb),Languages microservice(Springboot,Mongodb),Payement microservice(Springboot,mongodb).",
      doc_url: "docs/daresni.pdf" 
    },
    {
      id: "3",
      title: "InnoSocial",
      problematique: "The current manual system for managing social programs at ESI SBA is inefficient, leading to delays and difficulties for both employees and administrators. Without a digital solution, organizing and tracking requests becomes a challenge, underscoring the need for a more efficient online platform.",
      solution: "Managing social programs often involves manual processes that are inefficient for both employees and administrators. To address this, the QuantumLeap team from ESI SBA is developing a web application. This platform will allow ESI SBA employees to easily request participation in social programs, streamlining the management of these requests and improving overall efficiency.",
      badges: ["Nextjs", "Tailwind", "Php", "Mongodb"],
      image: "./images/innoscial.png",
      type: "github",
      url: "https://github.com/wiam200/projet_1CS",
      role: "Front-End developer",
      year: "3rd year of college",
      target_audiance: "higher school of computer science employees",
      main_functionalities: ["offering profiles for each employee created by the administrator", "managing employee applications for vacations,trips,days off...etc", "managing the budget of school", "announcements for the school administrators", "sending notifications to employees", "creating a dashboard for employees and administrators"],
      client_url: "./images/inno-client.png",
      admin_url: "./images/innosocial2.png",
      features: "InnoSocial is a school project that aims to provide a platform for ESI SBA employees it offers a variety of features that makes it easy for employees to manage their social programs so they can focus on their work and not on the administration of the program. It also provides a dashboard for the employees and administrators to keep track of their activities and progress.",
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
      const currentIndex = groups.findIndex(g => g.id === currentId);
      if (currentIndex === groups.length - 1) {
        return groups[0].title; // Return the first project if we're at the last
      }
      return groups[currentIndex + 1].title;
    };

    const nextProjectTitle = getNextProjectTitle(group.id);

    return (
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col mt-10 w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <p className="text-lg px-4 font-semibold text-center text-gray-500">
              {group.problematique}
            </p>
            <h1 className="font-bold text-3xl mt-6">Solution</h1>
            <p className="font-semibold text-center text-gray-500">{group.solution}</p>
            <div className="flex flex-row mt-10 space-x-4">
              <Button className="gap-2 mb-6" variant="ghost">
                <Link href={group.url} className="flex items-center gap-2">
                  {group.type}
                  <RxArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              {group.doc_url && (
  <Button className="gap-2 mb-6" variant="ghost">
    <a href={group.doc_url} download className="flex items-center gap-2">
      Doc
      <RxArrowRight className="mr-2 h-4 w-4" />
    </a>
  </Button>
)}
            </div>
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
            <div className="flex w-full justify-between mt-10 mb-10">
              <div className="w-1/2 pr-10 flex flex-col">
                <h1 className="font-semibold text-2xl">Role</h1>
                <p className="text-gray-500 font-semibold">{group.role}</p>
                <h1 className="font-semibold text-2xl">Year</h1>
                <p className="text-gray-500 font-semibold">{group.year}</p>
                <h1 className="font-semibold text-2xl">Target audience</h1>
                <p className="text-gray-500 font-semibold">{group.target_audiance}</p>
              </div>
              <div className="w-1/2 pl-10">
                <h1 className="font-semibold text-2xl">Main functionalities</h1>
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
            <h1 className="font-bold text-3xl">Features</h1>
            <p className="font-semibold text-gray-500 text-center mb-10">{group.features}</p>
            <h1 className="font-bold text-center text-2xl">Client side</h1>
          </div>
        </div>
        <div className="flex flex-row w-full max-w-[900px] mb-10 justify-between mt-4 space-y-6 pl-10">
          <Card className="relative flex-col w-full h-[400px] rounded-xl overflow-hidden shadow-slate-500 shadow-sm">
            <CardContent className="p-0 h-full w-full">
              <img
                src={group.client_url}
                alt={group.title}
                className="object-cover w-full h-full rounded-xl"
              />
            </CardContent>
          </Card>
        </div>
        <h1 className="font-bold text-center text-2xl">Admin Dashboard</h1>
        <div className="flex justify-end w-full max-w-[850px] ml-auto pr-10 mt-4 mb-10">
          <Card className="relative flex-col w-full rounded-xl overflow-hidden shadow-slate-500 shadow-sm">
            <CardContent className="p-0 h-full w-full">
              <img
                src={group.admin_url}
                alt={group.title}
                className="object-cover w-full h-full rounded-xl"
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center w-full mb-20">
          <Button className="gap-2" variant="ghost">
            <Link href={`/${nextProjectTitle}`} className="flex items-center gap-2">
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