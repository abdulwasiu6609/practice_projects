import BasicBadge, {
  BadgeVisibility,
  BadgeMessage,
} from "@/app/uicomponents/badges";

export default function Badges() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Badges</h1>
      <h2 className="text-2xl font-semibold mb-2">Basic Badge</h2>
      <BasicBadge />

      <br />
      
      <BadgeVisibility />
      <br />
      <BadgeMessage />
    </div>
  );
}
