import Image from "next/image";
import { getImage } from "~/server/queries";
import Modal from "./modal";

export default async function Page({ params }: { params: { id: string } }) {
  const IdAsNumber = Number(params.id);

  const image = await getImage(IdAsNumber);

  return (
    <Modal>
      <div className="h-screen w-screen text-white">
        <div className="relative mx-auto mt-5 h-3/6 w-full lg:h-4/6 lg:w-1/2">
          <Image
            objectFit="contain"
            fill
            sizes="30vw"
            src={image.url}
            alt={image.name}
          />
        </div>
        <p className="mt-5 text-center text-xl font-medium">{image.name}</p>
      </div>
    </Modal>
  );
}
