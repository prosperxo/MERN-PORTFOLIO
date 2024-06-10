import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaPlusCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import PokemonList from '../components/PokemonList';


function PokemonPage({ setPokemon }) {
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([]);

    const loadPokemons = async () => {
        const response = await fetch('/pokemons');
        if (response.ok) {
            const data = await response.json();
            setPokemons(data);
        } else {
            console.error(`Error ${response.status}: Unable to summon Pokémon.`);
        }
    };

    const onEditPokemon = (pokemon) => {
        setPokemon(pokemon);
        navigate('/update'); // Navigate to the update page
    };

    const onDeletePokemon = async (_id) => {
        const response = await fetch(`/pokemons/${_id}`, { method: 'DELETE' });
        if (response.ok) {
            const updatedPokemons = pokemons.filter(p => p._id !== _id);
            setPokemons(updatedPokemons);
            console.log(`Success: Pokémon with ID ${_id} was released.`);
        } else {
            console.error(`Error ${response.status}: Unable to release Pokémon.`);
        }
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return (
        <>
            <h2>List of Pokémons</h2>
            <p>Click "Add Pokémon" to capture a new Pokémon, or select a Pokémon to edit or release.</p>
            <Link to="/create">
                <button><FaPlusCircle /> Add Pokémon</button>
            </Link>
            <PokemonList 
                pokemons={pokemons} 
                onEdit={onEditPokemon} 
                onDelete={onDeletePokemon} 
            />
        </>
    );
}

export default PokemonPage;
