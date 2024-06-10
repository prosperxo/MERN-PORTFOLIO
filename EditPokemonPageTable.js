import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const EditPokemonPageTable = ({ pokemonToEdit }) => {
    const [pokemon, setPokemon] = useState(pokemonToEdit.pokemon);
    const [level, setLevel] = useState(pokemonToEdit.level);
    const [dateCaptured, setDateCaptured] = useState(pokemonToEdit.dateCaptured.slice(0, 10)); // Display only the date part

    const navigate = useNavigate();

    const editPokemon = async () => {
        const response = await fetch(`/pokemons/${pokemonToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                pokemon,
                level,
                dateCaptured
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert(`Successfully updated ${pokemon}'s details!`);
            navigate("/pokemons");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update ${pokemon}. Status: ${response.status}. ${errMessage.Error}`);
        }
    };

    return (
        <>
            <article>
                <h2>Edit Pokémon Details</h2>
                <p>Update the details of the selected Pokémon in your collection.</p>
                <table id="pokemons">
                    <caption>Which Pokémon are you updating?</caption>
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
                                <label htmlFor="submit">Commit Changes</label>
                                <button
                                    type="button"
                                    onClick={editPokemon}
                                    id="submit"
                                >
                                    Save Changes
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default EditPokemonPageTable;
