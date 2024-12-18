function PokemonCards({pokemonData,onClick}){
    const imageUrl =
    pokemonData.sprites.other.dream_world.front_default ||
    pokemonData.sprites.other["official-artwork"].front_default ||
    pokemonData.sprites.other.home.front_default;

    if (!imageUrl) {
        return null;
    }
    return <li className="pokemon-card" onClick={onClick}>
        <figure>
            <img 
            src={imageUrl}           
            alt={pokemonData.name}
            className="pokemon-image"
            /> 
            <h1 className="pokemon-name">{pokemonData.name}</h1>
            <div className="pokemon-info pokemon-highlight">
                <p>
                    {pokemonData.types.map((curType)=>curType.type.name).join(", ")}
                </p>
            </div>
            <div className="grid-three-cols">
                <p className="pokemon-info">
                <span> Height:</span> {pokemonData.height}
                </p>
                <p className="pokemon-info">
                <span> Weight:</span> {pokemonData.weight}
                </p>
                <p className="pokemon-info">
                <span> speed:</span> {pokemonData.stats[5].base_stat}
                </p>
            </div>

            <div className="grid-three-cols">
                <div className="pokemon-info">
                <span> Experience:</span>
                <p>{pokemonData.base_experience}</p>
                </div>
                <div className="pokemon-info">
                <span>Attack:</span>
                <p>{pokemonData.stats[1].base_stat}</p>
                </div>
            <div className="pokemon-info">
            <span> Abilities: </span>
            <p>
                {pokemonData.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .slice(0, 1)
                .join(", ")}
            </p>
            </div>
        </div>
        </figure>
    </li>
}
export default PokemonCards