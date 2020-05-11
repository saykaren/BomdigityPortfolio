import React from 'react';
import '../Styling/App.scss';
import NavigationBar from './Navigation';
import Footer from './Footer';
import LandingPage from './LandingPage';

const App = () => (
  <div>
    <NavigationBar />
    <LandingPage />
    <Footer />
  </div>
  );

export default App;