import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";
import { Link } from "react-router";



export const RootRoute = () => {
    const [nameP, setNameP] = useState("");
    const [verifica, setVerifica] = useState(false); // Gestisci lo stato di "verifica"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        {/* Header */}
        <header className="w-full bg-[#f0ffff] p-3 flex justify-between items-center">
          <div className="text-blue-600 dark:text-sky-400">
            <img
              src="https://th.bing.com/th/id/R.de8a0f82f1449b48f71828ede116ecd9?rik=gwf9F0ZL90b0tw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpokemon-logo-png-pokemon-logo-text-png-1428-1390.png&ehk=xcPPKSYiaFwoVSTL9JMZq%2foHXfffz%2bbO4RjmbqQ5b6I%3d&risl=&pid=ImgRaw&r=0"
              alt="logo"
              width="54"
            />
          </div>
          <div className="menu">
            <p>1234</p>
            <p>1234</p>
            <p>1234</p>
            <p>barra di ricerca</p>
          </div>
        </header>
  
        {/* Contenuto principale */}
        <div className="bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-center font-bold text-3xl text-blue-400 mb-4">
            Il nome del pokemon è {nameP}, count: {count}
          </h1>
  
          <div className="flex flex-col items-center space-y-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
              onClick={() => {
                if (verifica) {
                  setNameP("Lapras");
                  setVerifica(false);
                } else {
                  setNameP("Mimikyu");
                  setVerifica(true);
                }
                setCount((count) => count + 1);
              }}
            >
              <p>Cambia il nome del pokemon</p>
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"><Link to={'/dettaglio/${count}'}>Vai alla pagina di dettaglio {count}</Link></button>
          </div>
        </div>
      </div>
    );
}