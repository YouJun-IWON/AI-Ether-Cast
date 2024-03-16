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
    username: "user2",
    uploadedDate: new Date("2021-01-01"),
    expiryDate: new Date("2025-01-01"),
    title: "Card 2",
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
    username: "user3",
    uploadedDate: new Date(),
    expiryDate: new Date(),
    title: "Card 3",
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
      <div className="common-container bg-gray-50">
        <div className="flex w-full p-4">
          <div className="home-headline">상정된 안건</div>
        </div>
        <div>persons</div>
        <div className="home-proposed-agendas">
          <Suspense fallback={<Loader />}>
            {proposedAgendaCardDummyProps.map((proposedAgendaCardProps) => (
              <ProposedAgendaCard
                props={proposedAgendaCardProps}
                key={proposedAgendaCardProps.id}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
