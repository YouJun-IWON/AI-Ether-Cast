"use client";

import AgendaCardList from "@/components/list/agenda-card-list";
import Loader from "@/components/shared/Loader";

import Image from "next/image";
import { Suspense } from "react";
import ProposedAgendaCard from "@/components/cards/proposed-card";

const proposedAgendaCardDummyProps = [
  {
    agendaImage: "/icons/profile-placeholder.svg",
    profileImage: "/icons/profile-placeholder.svg",
    username: "user1",
    uploadedDate: new Date(),
    expiryDate: new Date(),
    title: "Card 1",
    tags: ["tag1", "tag2"],
    heartCount: 10,
    participantsCount: 10,
    viewsCount: 20,
    inputWordCount: 20,
    hasVoted: true,
    id: 1,
  },
  {
    agendaImage: "/icons/profile-placeholder.svg",
    profileImage: "/icons/profile-placeholder.svg",
    username: "user1",
    uploadedDate: new Date(),
    expiryDate: new Date("2024-01-01"),
    title: "Card 1",
    tags: ["tag1", "tag2"],
    heartCount: 10,
    participantsCount: 10,
    viewsCount: 20,
    inputWordCount: 20,
    hasVoted: true,
    id: 1,
  },
  {
    agendaImage: "/icons/profile-placeholder.svg",
    profileImage: "/icons/profile-placeholder.svg",
    username: "user1",
    uploadedDate: new Date(),
    expiryDate: new Date(),
    title: "Card 1",
    tags: ["tag1", "tag2"],
    heartCount: 10,
    participantsCount: 10,
    viewsCount: 20,
    inputWordCount: 20,
    hasVoted: true,
    id: 1,
  },
];

export default function Home() {
  return (
    <main className="flex flex-1">
      <div className="common-container">
        <div className="flex w-full p-4">
          <div className="home-headline">상정된 안건</div>
        </div>
        <div>persons</div>
        <div className="home-proposed-agendas">
          <Suspense fallback={<Loader />}>
            {proposedAgendaCardDummyProps.map((proposedAgendaCardProps) => (
              <ProposedAgendaCard props={proposedAgendaCardProps} />
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
