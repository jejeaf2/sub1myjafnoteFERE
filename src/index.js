import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NoteBody from './components/NoteBody';

// import style
import './Style/style.css'


const root = createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<NoteBody/>
</BrowserRouter>
);

