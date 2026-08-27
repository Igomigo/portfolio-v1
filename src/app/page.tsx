import Preloader from "@/components/chrome/Preloader";
import Header from "@/components/chrome/Header";
import ChapterRail from "@/components/chrome/ChapterRail";
import Cursor from "@/components/chrome/Cursor";
import Grain from "@/components/chrome/Grain";
import WorldColor from "@/components/providers/WorldColor";
import Origin from "@/components/sections/Origin";
import Craft from "@/components/sections/Craft";
import Crossing from "@/components/sections/Crossing";
import Work from "@/components/sections/Work";
import Practice from "@/components/sections/Practice";
import Invitation from "@/components/sections/Invitation";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <ChapterRail />
      <Cursor />
      <Grain />
      <WorldColor />
      <main>
        <Origin />
        <Craft />
        <Crossing />
        <Work />
        <Practice />
        <Invitation />
      </main>
    </>
  );
}
