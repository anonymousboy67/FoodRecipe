import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="dark:bg-white text-lightBlack font-extrabold text-center p-4 ">
        Welcome to Recipe App
      </h1>
      <Link href={"/recipe-list"}>Explore Recipe</Link>
    </div>
  );
}
