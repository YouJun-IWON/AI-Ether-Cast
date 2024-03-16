import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; // CSS Module 사용

interface User {
  imageUrl: string;
  username: string;
}

interface UserCarouselProps {
  users: User[];
}

const UserCarousel = ({ users }: UserCarouselProps) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {users.map((user, index) => (
          <CarouselItem key={index} className=" basis-1/4 md:basis-1/6">
            <div key={index} className="flex flex-col gap-1 items-center">
              <Image
                src={user.imageUrl}
                alt="profileImg"
                width={72}
                height={72}
              />
              <div className="text-xs text-priprimary-300 text-opacity-60">
                {user.username}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 bg-white " />
      <CarouselNext className="right-1 bg-white" />
    </Carousel>
  );
};

export default UserCarousel;
