import AppBars from "@/app/uicomponents/appbars";
import {
  AppBarsWithMenu,
  AppBarsWithResponsiveMenu,
} from "@/app/uicomponents/appbars";

export default function Screen() {
  return (
    <div className="">
      <h2 className="">Basic App bar</h2>
      <AppBars />
      <br />
      <h2 className="">App bar with menu</h2>
      <AppBarsWithMenu />
      <br />
      <h2 className="">App bar with responsive menu</h2>
      <AppBarsWithResponsiveMenu />
    </div>
  );
}
