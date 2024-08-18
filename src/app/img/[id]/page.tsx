import Image from "next/image";
import CopyBtn from "~/components/common/CopyBtn";
import { getImage } from "~/server/queries";

const PhotoPage = async ({ params }: { params: { id: string } }) => {
  const IdAsNumber = Number(params.id);

  const image = await getImage(IdAsNumber);
  return (
    <div className="flex h-[90vw] w-full justify-center">
      <div className="w-full">
        <div className="relative mx-auto h-2/6 w-full lg:w-1/2">
          <Image src={image.url} alt={image.name} objectFit="contain" fill />
        </div>
        <div className="mx-auto mt-4 line-clamp-1 flex w-full justify-between rounded-lg bg-gray-800/50 px-2 py-1 backdrop-blur-md lg:w-2/6">
          <span className="text-sm">{image.url}</span>
          <CopyBtn imageUrl={image.url} />
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
