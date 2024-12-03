
import React from 'react';

const Taula = ({ configuracio, dades, total }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {configuracio.map((columna, index) => (
              <th key={index}>{columna.capçalera}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dades.map((dada, index) => (
            <tr key={index}>
              {configuracio.map((columna, idx) => (
                <td key={idx}>{dada[columna.camp]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {total !== null && (
        <div className="total">
          <strong>Total d'Àlbums: {total}</strong>
        </div>
      )}
    </div>
  );
};

export default Taula;
