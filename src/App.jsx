
import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';

import CoreConcepts from './components/CoreConcepts.jsx';

export let Kal = function Kalyan(){
  return (
    <h4>Sai Kalyan Addanki</h4>
  );
}

function App() {
 

  return (
    <Fragment> 
      <Header />

      <main>
      <CoreConcepts />  
       <Examples />
      </main>
    </Fragment>
  );
}  

export default App;