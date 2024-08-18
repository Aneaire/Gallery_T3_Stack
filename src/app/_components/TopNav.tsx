import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/components/uploadthing/upload-button";

const TopNav = () => {
  return (
    <nav className="mb-2 flex items-center justify-between border-b-2 p-4">
      <h1 className="text-lg font-semibold">T3 Gallery</h1>
      <div className="flex items-center gap-5 px-3">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
