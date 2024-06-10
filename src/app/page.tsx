'use client'

import NoteDisplay from "./components/note-display";
import NoteSelector from "./components/note-selector";
import InfoSection from "./components/info-section";

import { useState } from "react";

export default function Home() {
  const notes = ["C","G","D","A","E","B","F#","C#","G#","D#","A#","F"]
  const [ selectedKey, setSelectedKey] = useState("C");
  const handleKeySelect = (key: string) => {
    setSelectedKey(key)
  }
  return (
    <main className="flex min-h-screen min-w-screen justify-center pt-4 pb-4">
      <div>
        <h1 className="items-center text-center p-6 underline text-xl">
          Negative Harmony
        </h1>
        <NoteDisplay notes={notes} selectedKey={selectedKey}/>
        <NoteSelector notes={notes} selectedKey={selectedKey} handleKeySelect={handleKeySelect}/>
        <InfoSection />
      </div>
    </main>
  );
}
