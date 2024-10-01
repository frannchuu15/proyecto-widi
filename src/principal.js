import React from 'react';
import { PrincipalComponent } from './Componentes/principal/principal'

function Principal() {
  return (
    <div className='Principal'>
      <header className='Principal-header'>
        <h1 className='Principal-titulo'>
          Quiz algo
        </h1>
        <PrincipalComponent />
        </header>
    </div>
  );
}
export default Principal;
