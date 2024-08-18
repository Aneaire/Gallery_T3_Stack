import Image from "next/image";
import CopyBtn from "~/components/common/CopyBtn";
import { getImage } from "~/server/queries";
import Modal from "./modal";

export default async function Page({ params }: { params: { id: string } }) {
  const IdAsNumber = Number(params.id);

  const image = await getImage(IdAsNumber);

  return (
    <Modal>
      <div className="h-screen w-screen text-white">
        <div className="my-auto flex h-full w-full flex-col items-center justify-center">
          <div className="relative mx-auto h-2/6 w-full lg:w-1/2">
            <Image src={image.url} alt={image.name} objectFit="contain" fill />
          </div>
          <p className="mt-5 text-center text-xl font-medium">{image.name}</p>
          <div className="mx-auto mt-4 line-clamp-1 flex w-full justify-between rounded-lg bg-gray-800/50 px-2 py-1 backdrop-blur-md lg:w-2/6">
            <span className="text-sm">{image.url}</span>
            <CopyBtn imageUrl={image.url} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
