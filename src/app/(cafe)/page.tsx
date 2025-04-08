import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export default async function HomePage() {
  async function Coffees() {
    const coffees = await db.query.coffees.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
    return (
      <div className="flex flex-wrap gap-4">
        {coffees.map((coffee) => (
          <div
            key={coffee.id}
            className="flex w-48 flex-col items-center"
          >
            <img src={coffee.imageUrl} alt="food" />
            <div>{coffee.name}</div>
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
        <Coffees />
      </SignedIn>
    </main>
  );
}
