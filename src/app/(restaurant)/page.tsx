import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export default async function HomePage() {
  async function Dishes() {
    const dishes = await db.query.dishes.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
    return (
      <div className="flex flex-wrap gap-4">
        {[...dishes, ...dishes, ...dishes, ...dishes].map((dish, key) => (
          <div
            key={dish.id + "-" + key}
            className="flex w-48 flex-col items-center"
          >
            <img src={dish.imageUrl} alt="food" />
            <div>{dish.name}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Dishes />
      </SignedIn>
    </main>
  );
}
