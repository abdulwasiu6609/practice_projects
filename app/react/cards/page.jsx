import OutlineCard, { MediaCard, UIControlsCard } from "@/app/uicomponents/cards";

export default function CardsPage() {
  return (
    <div className="p-10">
      <h1 className="">Cards</h1>
      <h2 className="text-center text-2xl font-black">Outline card</h2>
      <OutlineCard />
      <br />
      <h2 className="text-center text-2xl font-black">Media card</h2>
      <MediaCard />
      <br />
      <h2 className="text-center text-2xl font-black">UI Controls card</h2>
      <UIControlsCard />
    </div>
  );
}
