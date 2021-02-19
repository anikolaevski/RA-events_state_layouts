import React from 'react';

import './App.css';
import './css/main.css';
import { products, cardsLayout} from './StoreData';
import { Store } from './Store';

export default function App() {
  return (<Store layout={cardsLayout} products={products} />);
}
