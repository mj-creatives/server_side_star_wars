import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

export interface AnimeProp {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.05,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        {anime.image ? (
          <Image
            src={anime.image}
            alt={anime.name}
            fill
            className="rounded-xl"
          />
        ) : null}
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-base text-white font-bold">
              {anime.description}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
