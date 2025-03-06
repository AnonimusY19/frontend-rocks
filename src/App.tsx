import { useState } from "react";

export const App = () => {
  const [nameP, setNameP] = useState("");
  let verifica = false;
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-3xl text-blue-400 mb-4">
          Il nome del pokemon è {nameP}
        </h1>

        <div className="flex flex-col items-center space-y-4">
          
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
            onClick={() => {if (verifica){ setNameP("Lapras"); verifica = false} else { setNameP("Mimikyu"); verifica=true}}}
            
          >
            <p>Cambia il nome del pokemon</p>
          </button>
        </div>
      </div>
    </div>
  );
}
