import { SignedIn, SignedOut } from "@clerk/nextjs";
import RenderImages from "./_components/RenderImages";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="px-5">
      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        <SignedIn>
          <RenderImages />
        </SignedIn>
        <SignedOut>
          <h1 className="p-5 text-xl">
            Sign Up to setup your free Gallery Store 😉👌
          </h1>
        </SignedOut>
      </div>
    </main>
  );
}
