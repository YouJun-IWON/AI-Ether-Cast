import { multiFormatDateString } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import AgendaStats from "./agenda-card-stats";
import AgendaCardMenu from "../menu/agenda-card-menu";
import shortenAddress from "@/utils/shortenAddress";
import { Icons } from "@/components/Icons";
import { getDDayFormat, getFormatRelativeDate } from "@/utils/dateformatter";

type ProposedAgendaCardPropsType = {
  props: {
    agendaImage: string;
    profileImage: string;
    username: string;
    uploadedDate: Date;
    expiryDate: Date;
    title: string;
    tags: string[];
    heartCount: number;
    participantsCount: number;
    viewsCount: number;
    inputWordCount: number;
    hasVoted: boolean;
    id: number;
  };
};

const ProposedAgendaCard = ({ props }: ProposedAgendaCardPropsType) => {
  if (!props) return null;

  return (
    <div className="w-full flex gap-5 p-5 rounded-2xl bg-white">
      <Image
        src={props.agendaImage}
        alt="AgendImage"
        width={220}
        height={220}
        className="rounded-xl"
      />
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              src={props.profileImage}
              alt="profileImg"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-base">{props.username}</div>
          </div>
          <div className="flex gap-2.5 items-center">
            <div className="text-xs text-priprimary-300 text-opacity-60">
              {getFormatRelativeDate(props.uploadedDate)}
            </div>
            <div className="px-3 py-0.5 rounded-lg text-base text-subsky-500 bg-subsky-500 bg-opacity-15">
              {getDDayFormat(props.expiryDate)}
            </div>
          </div>
        </div>
        <div className="w-full text-xl">{props.title}</div>
        <ul className="flex gap-1.5">
          {props.tags.map((tag) => (
            <li
              className="px-2 py-1 rounded-md text-xs text-priprimary-300 text-opacity-60 rounded bg-priprimary-50 bg-opacity-5"
              key={tag}
            >
              #{tag}
            </li>
          ))}
        </ul>
        <div className="w-full border-t-2" />
        <div className="w-full flex justify-between">
          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <Icons.cardHeart />
              <div className="text-priprimary-300 text-opacity-60 text-sm">
                {props.heartCount}
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <Icons.cardParticipants />
              <div className="text-priprimary-300 text-opacity-60 text-sm">
                {props.participantsCount}
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <Icons.cardViews />
              <div className="text-priprimary-300 text-opacity-60 text-sm">
                {props.viewsCount}
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <Icons.cardWordCount />
              <div className="text-priprimary-300 text-opacity-60 text-sm">
                {props.inputWordCount}
              </div>
            </div>
          </div>
          <div>
            {props.hasVoted ? (
              <div className="flex items-center gap-1 px-3 py-1 bg-subsky-500 bg-opacity-15 border border-subsky-500 border-opacity-40 rounded-full">
                <Icons.cardVoteCheck />
                <div className="text-sm text-subsky-500 ">투표 완료</div>
              </div>
            ) : (
              <div>투표하기</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposedAgendaCard;
