import Papers, { PaperWithShadow } from "@/app/uicomponents/papers";
export default function Paper() {
  return (
    <div className="paper-page bg-gray-700 h-svh">
      <h1>Paper Page</h1>
      <p>
        The Paper component is a container for displaying content on an elevated
        surface.
      </p>

      <br />
      <Papers />

      <br />
      <br />
      <br />
      <PaperWithShadow />
    </div>
  );
}
