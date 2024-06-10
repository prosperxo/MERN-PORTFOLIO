// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import StaffPage from './pages/StaffPage';
import PokemonPage from './pages/PokemonPage';
import OrderPage from './pages/OrderPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddPokemonPageForm from './pages/AddPokemonPageForm';
import EditPokemonPageForm from './pages/EditPokemonPageForm';

// If your schema requires SHORT data input, then use the TABLE design.
import EditPokemonPageTable from './pages/EditPokemonPageTable';
import AddPokemonPageTable from './pages/AddPokemonPageTable';

// Define the function that renders the content in Routes, using State.
function App() {
  const [pokemon, setPokemonToEdit] = useState(null); // Updated state name to reflect Pokémon context

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Andy Vo's Portfolio project</h1>
          <p>This is my portfolio project to showcase my web development skills. Some technologies I used are React, HTML, CSS, MongoDB, Node, Express, REST, CRUD, and Mongoose.</p>
          <p>This website showcases everything I have learned this quarter!</p>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/staff" element={<StaffPage />} />

              {/* Route for OrderPage */}
              <Route path="/order" element={<OrderPage />} />

              {/* Route for PokémonPage */}
              <Route path="/pokemon" element={<PokemonPage setPokemon={setPokemonToEdit} />} />

              {/* Use these if your schema requires LONG data input: */}
              <Route path="/create-table" element={<AddPokemonPageTable />} />
              <Route path="/update-table" element={<EditPokemonPageTable pokemonToEdit={pokemon} />} />

              {/* Or these if your schema requires SHORT data input: */}
              <Route path="/create-form" element={<AddPokemonPageForm />} />
              <Route path="/update-form" element={<EditPokemonPageForm pokemonToEdit={pokemon} />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p><cite>&copy; 2024 Andy Vo. All rights reserved.</cite></p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
