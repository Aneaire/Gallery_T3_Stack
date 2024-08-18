import Image from "next/image";
import Link from "next/link";
import { getImages } from "~/server/queries";

const RenderImages = async () => {
  const images = await getImages();

  return images.map((image) => (
    <div
      key={image.id}
      className="peer-[card] relative aspect-square w-40 flex-col gap-2 hover:scale-105"
    >
      <Link className="cursor-pointer" href={`/img/${image.id}`}>
        <Image
          sizes="200px"
          src={image.url}
          alt={image.name}
          fill
          objectFit="cover"
        />
        <p className="absolute bottom-0 left-0 line-clamp-1 w-full rounded-t-lg bg-gray-800/50 pl-2 text-xs backdrop-blur-md transition-all peer-hover/card:bg-green-400">
          {image.name}
        </p>
      </Link>
    </div>
  ));
};

export default RenderImages;
