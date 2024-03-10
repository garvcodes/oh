import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-rose-200 via-neutral-50 to-fuchsia-300">
      <div className="flex justify-between items-end p-5 shadow-sm">
  <h1 className="font-semibold italic text-5xl text-black">OfficeHours</h1>
  <div className="flex items-end">
    <div className="bg-purple-500 rounded-3xl px-[2rem] py-[0.5rem] text-xl mr-[1rem] ">
      <button>Chat with your Textbook</button>
    </div>
    <div className="bg-purple-600 rounded-3xl px-[2rem] py-[0.5rem] text-xl mr-[1rem] ">
      <button>Find your Classes</button>
    </div>
    <div className="bg-purple-700 rounded-3xl px-[2rem] py-[0.5rem] text-xl">
      <button>Create Flashcards</button>
    </div>
  </div>
</div>

     
    </main>
  );
}
