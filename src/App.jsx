import React from 'react';
import { withNamespaces } from 'react-i18next';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';

import './App.scss';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home id='Home'/>
            <About id='About'/>
            <Resume id='Resume'/>
            <Skills id='Skills'/>
            <Contacts id='Contacts'/>
        </div>
    );
}

export default withNamespaces()(App);
