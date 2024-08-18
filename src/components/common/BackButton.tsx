import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <ChevronLeft />
    </Button>
  );
};

export default BackButton;
