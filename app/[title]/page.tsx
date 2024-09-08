import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RxArrowRight } from "react-icons/rx";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
    description: "description of wijhati",
    badges: ["Badge 1", "Badge 2", "Badge 3"],
    image: "https://picsum.photos/seed/wijhati/400/200",
    type: "website",
    url: "https://www.wijhati.dz/",
  },
  {
    id: "2",
    title: "daresni",
    description: "description of daresni",
    badges: ["Badge 1", "Badge 2", "Badge 3"],
    image: "https://picsum.photos/seed/daresni/400/200",
    type: "gitHub",
    url: "idkyet",
  },
  {
    id: "3",
    title: "matjari",
    description: "description of matjari",
    badges: ["Badge 1", "Badge 2", "Badge 3"],
    image: "https://picsum.photos/seed/matjari/400/200",
    type: "gitHub",
    url: "idkyet",
  },
  {
    id: "4",
    title: "innospace",
    description: "description of innospace",
    badges: ["Badge 1", "Badge 2", "Badge 3"],
    image: "https://picsum.photos/seed/innospace/400/200",
    type: "github",
    url: "idkyet",
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


        <Card className="flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-full h-[350px] mb-2 rounded-xl overflow-hidden">
          <CardContent className="p-0 h-full w-full">
            <img
              src={group.image}
              alt={group.title}
              className="object-cover w-full h-full rounded-xl"
            />
          </CardContent>
        </Card>
      </div>

      <div className="w-full flex flex-wrap justify-start gap-2 mt-2">
        {group.badges.map((badge, index) => (
          <Badge key={index} className="text-sm">
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
}

// To generate dynamic paths based on projects or groups.
export async function generateStaticParams() {
  return groups.map((group) => ({
    title: group.title,
  }));
}
