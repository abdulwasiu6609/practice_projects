import OutlineCard, { MediaCard } from "@/app/uicomponents/cards";

export default function CardsPage() {
  return (
    <div className="p-10">
      <h1 className="">Cards</h1>
      <h2 className="text-center text-2xl font-black">Outline card</h2>
      <OutlineCard />
      <br />
      <h2 className="text-center text-2xl font-black">Media card</h2>
      <MediaCard />
    </div>
  );
}
