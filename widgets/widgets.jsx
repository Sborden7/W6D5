import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tab from './frontend/tabs';

const Widgets = () => {
  return (
    <main>
      <Clock />
      <Tab />
    </main>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('div');
  ReactDOM.render(<Widgets />, root);
});
