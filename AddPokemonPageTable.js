import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddPokemonPageTable = () => {
    const [pokemon, setPokemon] = useState('');
    const [level, setLevel] = useState('');
    const [dateCaptured, setDateCaptured] = useState('');

    const navigate = useNavigate();

    const addPokemon = async () => {
        const newPokemon = { pokemon, level, dateCaptured };
        const response = await fetch('/pokemons', {
            method: 'POST',
            body: JSON.stringify(newPokemon),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok){
            alert(`Successfully added ${pokemon}!`);
            navigate("/pokemons");
        } else {
            alert(`Failed to add ${pokemon}. Status: ${response.status}`);
        }
    };

    return (
        <>
            <article>
                <h2>Add a Pokémon</h2>
                <p>Use this table to capture a new Pokémon in your collection.</p>
                
                <table id="pokemons">
                    <caption>Which Pokémon are you capturing?</caption>
                    <thead>
                        <tr>
                            <th>Pokémon Name</th>
                            <th>Level</th>
                            <th>Date Captured</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="pokemon">Pokémon Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Pokémon name"
                                    value={pokemon}
                                    onChange={e => setPokemon(e.target.value)}
                                    id="pokemon"
                                    required
                                />
                            </td>
                            <td>
                                <label htmlFor="level">Level</label>
                                <input
                                    type="number"
                                    placeholder="Enter level (1-100)"
                                    value={level}
                                    onChange={e => setLevel(e.target.value)}
                                    id="level"
                                    min="1"
                                    max="100"
                                    required
                                />
                            </td>
                            <td>
                                <label htmlFor="dateCaptured">Date Captured</label>
                                <input
                                    type="date"
                                    value={dateCaptured}
                                    onChange={e => setDateCaptured(e.target.value)}
                                    id="dateCaptured"
                                    required
                                />
                            </td>
                            <td>
                                <label htmlFor="submit">Commit</label>
                                <button
                                    type="submit"
                                    onClick={addPokemon}
                                    id="submit"
                                >
                                    <FaPlusCircle /> Add Pokémon
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default AddPokemonPageTable;
