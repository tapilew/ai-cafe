import { db } from "~/server/db";

export default async function HomePage() {
  const dishes = await db.query.dishes.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
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
      Hello (AI Restaurant in Progress)
    </main>
  );
}
