import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.scss';

const App = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;