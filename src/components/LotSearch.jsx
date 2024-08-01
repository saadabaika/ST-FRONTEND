import React, { useState } from 'react';
import axios from 'axios';
import '../LotSearch.css';

const LotSearch = () => {
    const [idlot, setIdlot] = useState('');
    const [lot, setLot] = useState(null);
    const [error, setError] = useState(null);

    // Fonction pour gérer la recherche
    const handleSearch = () => {
        if (!idlot.trim()) {
            // Affiche un message d'erreur si le champ est vide
            setError('Please enter a Lot ID');
            setLot(null);
            return;
        }

        // Validation de l'ID du lot
        if (!idlot.startsWith('cz') || idlot.length !== 10) {
            // Affiche un message d'erreur si l'ID du lot ne commence pas par "cz" ou n'a pas 10 caractères
            setError('Lot ID must start with "cz" and be 10 characters long');
            setLot(null);
            return;
        }

        axios.get(`/api/lot/${idlot}/`)
            .then(response => {
                setLot(response.data);
                setError(null);
            })
            .catch(error => {
                setLot(null);
                setError('Lot not found');
            });
    };

    // Fonction pour gérer la touche "Enter"
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="lot-search-container">
            <input
                type="text"
                className="lot-search-input"
                value={idlot}
                onChange={e => setIdlot(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter Lot ID"
            />
            <button onClick={handleSearch} className="lot-search-button">Search</button>
            {lot && (
                <div className="lot-details">
                    <h2>Lot Details</h2>
                    <p>ID: {lot.idlot}</p>
                    <p>Nom: {lot.nom}</p>
                    <p>Email: {lot.email}</p>
                    {/* Affichez les autres informations du lot ici */}
                </div>
            )}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default LotSearch;
