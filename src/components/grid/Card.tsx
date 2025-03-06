import React from "react";

interface Props {
    id: number;
    image: string;
    name: string;
    types: string[];
}

export const Cards: React.FC<Props> = (props) => {

  
    return (
        <div>
            {/* Contenuto principale */}
            <div className="flex flex-wrap justify-center items-center">
                <button>
                        <div className="m-10 bg-white w-80 rounded-md p-5 boder-2 border">
                            <p className="text-[#2cafaf] text-xl">Tipi: {props.types}</p>
                            <img src={props.image} alt="pokemonName" className="w-60"/>
                            <p className="text-[#2cafaf] text-3xl">{props.name}</p>
                        </div>
                    </button> 
            </div>
      </div>
    );
}