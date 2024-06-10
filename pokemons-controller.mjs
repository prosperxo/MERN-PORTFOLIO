// Controllers for the Pokémon Collection

import 'dotenv/config';
import express from 'express';
import * as pokemons from './pokemons-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ Error: 'An unexpected error occurred.' });
};

// CREATE controller ******************************************
app.post('/pokemons', (req, res, next) => {
    pokemons.createPokemon(
        req.body.pokemon,
        req.body.level,
        req.body.dateCaptured
    )
        .then(pokemon => {
            console.log(`"${pokemon.pokemon}" has been captured and added to your team!`);
            res.status(201).json(pokemon);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Failed to capture the pokemon into the collection.' });
            next(error);
        });
});

// RETRIEVE controller ****************************************************
app.get('/pokemons', (req, res, next) => {
    pokemons.retrievePokemons()
        .then(pokemons => {
            if (pokemons.length > 0) {
                console.log('All your pokemons were retrieved from your collection.');
                res.json(pokemons);
            } else {
                res.status(404).json({ Error: 'Oh no! You have no pokemon found in your collection.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Unable to retrieve pokemon from your collection.' });
            next(error);
        });
});

// RETRIEVE by ID controller
app.get('/pokemons/:_id', (req, res, next) => {
    pokemons.retrievePokemonByID(req.params._id)
        .then(pokemon => {
            if (pokemon) {
                console.log(`"${pokemon.pokemon}" was retrieved, based on its PokeID.`);
                res.json(pokemon);
            } else {
                res.status(404).json({ Error: 'Pokemon not found by PokeID. Check if it is correct.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Failed to retrieve pokemon by PokeID. Try Again.' });
            next(error);
        });
});

// UPDATE controller ************************************
app.put('/pokemons/:_id', (req, res, next) => {
    pokemons.updatePokemon(
        req.params._id,
        req.body.pokemon,
        req.body.level,
        req.body.dateCaptured
    )
        .then(pokemon => {
            console.log(`"${pokemon.pokemon}" stats were updated.`);
            res.json(pokemon);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Failed to update pokemon\'s stats.' });
            next(error);
        });
});

// DELETE Controller ******************************
app.delete('/pokemons/:_id', (req, res, next) => {
    pokemons.deletePokemonById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} pokemon was released.`);
                res.status(200).send({ Success: 'Pokemon was successfully released.' });
            } else {
                res.status(404).json({ Error: 'Pokemon not found by pokeID for release.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Failed to release pokemon by pokeID.' });
            next(error);
        });
});

// Use the error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
