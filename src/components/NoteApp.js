import React from "react";
import PropTypes from 'prop-types';
import { Routes,Route } from "react-router-dom";
import NoteBody from "./NoteBody";
import DetailPage from "../pages/DetailPage";

 function NoteApp() {
    return (
        <>
            
            <Routes>
                <Route path="/notes/:id" element={DetailPage}></Route>   
            </Routes>
        </>
    )

 }

    

NoteApp.propTypes = {
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.string,
    title: PropTypes.string.isRequired,
}
export default NoteApp;




