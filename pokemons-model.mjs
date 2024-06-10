// Models for the Pokémon Collection

// Import dependencies
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect to the database using parameters from the .env file
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console
db.once("open", (err) => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    } else {
        console.log('Database connection has been established successfully.');
    }
});

// SCHEMA: Define the collection's schema
const pokemonSchema = mongoose.Schema({
    pokemon: { type: String, required: true }, // String data type
    level: {
        type: Number, required: true,
        min: [1, "Pokemon must be at least level 1."],
        max: [100, "Max level of Pokemon must be 100."]
    },
    dateCaptured: { type: Date, required: true } // Date data type
});

// Compile the model from the schema
const Pokemons = mongoose.model('Pokemons', pokemonSchema);

// CREATE model function
const createPokemon = async (pokemon, level, dateCaptured) => {
    const newPokemon = new Pokemons({ pokemon, level, dateCaptured });
    try {
        return await newPokemon.save();
    } catch (error) {
        console.error('Error creating Pokémon:', error);
        throw error;
    }
};

// RETRIEVE model function
const retrievePokemons = async () => {
    try {
        return await Pokemons.find().exec();
    } catch (error) {
        console.error('Error retrieving Pokémons:', error);
        throw error;
    }
};

// RETRIEVE by ID function
const retrievePokemonByID = async (_id) => {
    try {
        return await Pokemons.findById(_id).exec();
    } catch (error) {
        console.error('Error retrieving Pokémon by ID:', error);
        throw error;
    }
};

// DELETE model function based on _id
const deletePokemonById = async (_id) => {
    try {
        const result = await Pokemons.deleteOne({ _id });
        return result.deletedCount;
    } catch (error) {
        console.error('Error deleting Pokémon:', error);
        throw error;
    }
};

// UPDATE model function
const updatePokemon = async (_id, pokemon, level, dateCaptured) => {
    try {
        await Pokemons.replaceOne({ _id }, { pokemon, level, dateCaptured });
        return { _id, pokemon, level, dateCaptured };
    } catch (error) {
        console.error('Error updating Pokémon:', error);
        throw error;
    }
};

// EXPORT the functions for use in the controller file
export { createPokemon, retrievePokemons, retrievePokemonByID, updatePokemon, deletePokemonById };
