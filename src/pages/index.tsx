import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from '@/components/nacv';
import Products1 from '@/components/products';


export default function Home() {
  return (
    <div>
      <OffcanvasExample />
      <main>
        <Products1 />
      </main>
    </div>
  );
}