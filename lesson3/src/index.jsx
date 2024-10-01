import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { useLayoutEffect } from 'react';
import list from './product'

import Product from './components/Product';
import ProductList from './components/ProductList';



createRoot(
  document.querySelector('#app'),
).render(<>
    <ProductList products={list}/>
  </>);

/*
const names = ["Jan", "Jiri", "Jindrich"];
const myName = (name)=> `${name}@gmail.com`;
const result =names.map(myName)

const Login = ({name}) => <li>{name}</li>

const days = [
  <li>pondělí</li>,
  <li>úterý</li>,
  <li>středa</li>,
  <li>čtvrtek</li>,
  <li>pátek</li>,
];

const WorkingDays = () =>
    (
      <div>
          <h1>Pracovní dny jsou {days.map((day => <li>{day}</li>))}</h1>
          
      </div>)
*/