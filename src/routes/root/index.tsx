import { Cards } from "../../components/grid/Card.tsx"



export const RootRoute = () => {


    const data = [
        {
          id: 1,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          name: "Bulbasaur",
          types: ["grass ", "poison"],
        },
        {
          id: 4,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
          name: "Charmander",
          types: ["fire"],
        },
        {
          id: 7,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
          name: "Squirtle",
          types: ["water"],
        },
        {
          id: 10,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
          name: "Caterpie",
          types: ["bug"],
        },
        {
          id: 25,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          name: "Pikachu",
          types: ["electric"],
        },
        {
          id: 74,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
          name: "Geodude",
          types: ["rock ", "ground"],
        },
      ];
  
    return (
      <div>
        {/* Header */}
        <header>
          <div className="text-blue-600 dark:text-sky-400">
            <img
              src="https://th.bing.com/th/id/R.de8a0f82f1449b48f71828ede116ecd9?rik=gwf9F0ZL90b0tw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpokemon-logo-png-pokemon-logo-text-png-1428-1390.png&ehk=xcPPKSYiaFwoVSTL9JMZq%2foHXfffz%2bbO4RjmbqQ5b6I%3d&risl=&pid=ImgRaw&r=0"
              alt="logo"
              width="95"
            />
          </div>
          <div className="menu">
            <input name="nameP" className="rounded-md bg-white w-xs border-1 border-black" placeholder="Inserisci il nome del pokemon" />
          </div>
        </header>
  
        {/* Contenuto principale */}
        <div className="flex flex-wrap justify-center items-center">
            {data.map((item) => <Cards {...item} />)}
        </div>
      </div>
    );
}