"use client";

import AgendaCardList from "@/components/list/agenda-card-list";
import Loader from "@/components/shared/Loader";

import Image from "next/image";
import { Suspense } from "react";
import ProposedAgendaCard from "@/components/cards/proposed-card";
import UserCarousel from "@/components/carousel/user-carousel";

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

const userCarouselProps = [
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user1",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user2",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user3",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user4",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user5",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user6",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user7",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user8",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user9",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user10",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user11",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user12",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user13",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user14",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user15",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user16",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user17",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user18",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user19",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user20",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user21",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user22",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user23",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user24",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user25",
  },
  {
    imageUrl: "/icons/profile-placeholder.svg",
    username: "user26",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1">
      <div className="common-container bg-gray-50">
        <div className="flex w-full p-4">
          <div className="home-headline">상정된 안건</div>
        </div>
        <div className="w-full max-w-screen-sm">
          <UserCarousel users={userCarouselProps} />
        </div>
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
