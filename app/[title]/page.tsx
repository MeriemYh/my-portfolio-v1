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
      "Pendant mon lycée, beaucoup d'entre nous ont rencontré de l'incertitude quant au choix du bon chemin pour l'université. En raison du manque d'informations accessibles sur les universités et les programmes académiques dans notre pays, bon nombre de mes camarades ont fait des choix qu'ils ont par la suite regrettés, ce qui a eu un impact durable sur leur vie.",
    solution:
      "Wijhati est une application web conçue pour aider les lycéens à prendre des décisions éclairées concernant leurs études supérieures. Elle offre des ressources telles que des informations sur les universités, les programmes académiques et des conseils de carrière. Initialement un projet scolaire, Wijhati a rapidement évolué en une startup, rendant la plateforme accessible au public. Elle propose deux interfaces : une pour les étudiants afin d'explorer les universités et leurs offres, et une pour les administrateurs scolaires afin de gérer les opérations de manière efficace.",
    badges: ["Html", "Css", "Jquery", "Php", "MySql"],
    image: "images/head-wijhati.png",
    type: "Site web",
    url: "https://www.wijhati.dz/",
    role: "Front-End developer",
    year: "Deuxième année d'universitaire",
    target_audiance: "Diplômés du lycée",
    main_functionalities: [
      "Filtrage et recherche de collèges en fonction de critères personnalisés spécifiques",
      "Consultation des informations sur le collège et ses installations, ainsi que toutes les informations dont l'élève a besoin.",
      "Création d'un profil personnalisé pour l'établissement et remplissage avec toutes les informations nécessaires sur celui-ci.",
    ],
    client_url: "images/wijhati2.png",
    admin_url: "images/adminside.png",
  
  },
  {
    id: "3",
    title: "daresni",
    problematique:
      "Les étudiants rencontrent des difficultés à se déplacer vers différents endroits pour des cours particuliers, ce qui peut être chronophage et peu pratique. Pendant ce temps, les enseignants peinent à trouver des emplois stables, la montée du freelancing et du travail à distance modifiant le marché de l'emploi, rendant plus difficile pour eux de garantir un emploi régulier.",
    solution:
      "Daresni est une application web construite avec une architecture microservices et CQRS, utilisant Kafka pour le streaming de données en temps réel et la communication événementielle. Cette plateforme répond aux défis éducatifs en offrant des cours en ligne, permettant aux étudiants d’économiser du temps de trajet et aidant les enseignants à se connecter avec les étudiants pour un tutorat flexible. Daresni comprend trois tableaux de bord : l'Admin pour gérer les candidatures des enseignants, les leçons, les examens et les inscriptions des étudiants ; l’Étudiant pour rechercher et réserver des enseignants ainsi que postuler pour des cours de langue ; et l’Enseignant pour créer des sessions, postuler à des rôles de tutorat et gérer les horaires.",
    badges: ["Nextjs", "Tailwind", "Nestjs", "Mongodb", "Springboot", "Kafka"],
    image: "./images/dashboardadmin.png",
    type: "gitHub",
    url: "https://github.com/marwa-nassane0052/darasnie-nextjs-project/tree/main",
    role: "Fullstack developer",
    year: "quatrième année d'universitaire",
    target_audiance:
      "Les élèves de lycée, les élèves d'école élémentaire et les langues.",
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
      "Le système manuel actuel pour la gestion des programmes sociaux à l'ESI SBA est inefficace, entraînant des retards et des difficultés pour les employés et les administrateurs. Sans solution numérique, organiser et suivre les demandes devient un défi, soulignant la nécessité d'une plateforme en ligne plus efficace.",
    solution:
      "La gestion des programmes sociaux implique souvent des processus manuels inefficaces pour les employés et les administrateurs. Pour y remédier, l'équipe de QuantumLeap de l'ESI SBA développe InnoSocial, une application web qui simplifie la gestion des demandes de programmes sociaux. InnoSocial permet aux employés de participer facilement aux programmes sociaux, réduisant les charges administratives et améliorant l'efficacité. La plateforme propose également des tableaux de bord pour les employés et les administrateurs afin de suivre les activités et les progrès, leur permettant de se concentrer davantage sur leur travail et moins sur les tâches administratives.",
    badges: ["Nextjs", "Tailwind", "Php", "Mongodb"],
    image: "./images/head-inno.jpg",
    type: "github",
    url: "https://github.com/wiam200/projet_1CS",
    role: "Front-End developer",
    year: "troisième année d'universitaire",
    target_audiance: "les employés de l'école supérieure de l'informatique de sidi bel abbès",
    main_functionalities: [
      "Offrir des profils pour chaque employé créés par l'administrateur.",
      "Gestion des demandes de congés, voyages, jours de repos, etc. pour les employés.",
      "Gestion du budget de l'école.",
      "Annonces pour les administrateurs de l'école.",
      "Envoi de notifications aux employés.",
      "Création d'un tableau de bord pour les employés et les administrateurs.",
    
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
      <div className="relative pb-[52.35%]"> 
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
          </div><div className="flex flex-row mt-2 space-x-4">
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

          <h1 className="font-bold text-3xl mt-6 mb-4">Problematique</h1>
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
              <h1 className="font-semibold text-2xl">L'année</h1>
              <p className="text-gray-500 font-semibold">{group.year}</p>
              <h1 className="font-semibold text-2xl">Public cible</h1>
              <p className="text-gray-500 font-semibold">
                {group.target_audiance}
              </p>
            </div>
            <div className="w-1/2 pl-10">
              <h1 className="font-semibold text-2xl">Principales fonctionnalités</h1>
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
            Prochain projet
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
