import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContent title='You don’t Know Javascript'/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
