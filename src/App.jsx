import React from 'react';
import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

 
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import Header from './components/Header';
import SideBar from './components/SideBar';
import RecentSales from './components/RecentSales';
import Dashboard from './components/Dashboard';
import PageTitle from './components/PageTitle';
import './App.css';
import CardFilter from './components/CardFilter';
import Card from './components/Card';

function App() {
  return (<>
  
  <Header/>
  <SideBar/>
  <Card/>
  <Dashboard/>
  <PageTitle/>
  <RecentSales/>
  <CardFilter/>
    
  </>);
}

export default App

