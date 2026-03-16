import Image from "next/image";
import FirstComponent from "@/app/react/appbars/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FirstComponent />
    </div>
  );
}
