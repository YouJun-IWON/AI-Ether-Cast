import { multiFormatDateString } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import AgendaStats from "./agenda-card-stats";
import AgendaCardMenu from "../menu/agenda-card-menu";
import shortenAddress from "@/utils/shortenAddress";

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
    <div className="w-full flex gap-5 p-5">
      <Image
        src={props.agendaImage}
        alt="AgendImage"
        width={220}
        height={220}
        className="rounded-lg"
      />
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="flex gap-1">
            <Image
              src={props.profileImage}
              alt="profileImg"
              width={40}
              height={40}
            />
            <div>{props.username}</div>
          </div>
          <div className="flex gap-1">
            <div>{props.uploadedDate.toDateString()}</div>
            <div>{props.expiryDate.toDateString()}</div>
          </div>
        </div>
        <div className="w-full">{props.title}</div>
        <ul className="flex gap-1">
          {props.tags.map((tag) => (
            <li className="px-2" key={tag}>
              #{tag}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-between">
          <div className="flex gap-1">
            <div>
              <div>{props.heartCount}</div>
            </div>
            <div>
              <div>{props.participantsCount}</div>
            </div>
            <div>
              <div>{props.viewsCount}</div>
            </div>
            <div>
              <div>{props.inputWordCount}</div>
            </div>
          </div>
          <div>
            {props.hasVoted ? <div>투표 완료</div> : <div>투표하기</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposedAgendaCard;
