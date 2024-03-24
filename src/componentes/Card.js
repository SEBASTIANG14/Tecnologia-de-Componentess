import React, { useState } from 'react';

function Card({ imagen, nombre, descripcion, fullDescripcion, stats }) {
  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="card">
      <div className="productInfo">
        <img src={imagen} alt={nombre} />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        {showStats && (
          <div>
            <h3>Estadísticas:</h3>
            <ul>
              {stats.map((stat, index) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button type="button" onClick={toggleStats}>
          {showStats ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
}

export default Card;


