import React from "react";
import PropTypes from 'prop-types';
import NoteSearch from "./NoteSearch";



function NoteHeader({ search, onSearch }) {
    return (
        <div className="note-app__header">
            <h1>My Notes</h1>
            <NoteSearch search={search} onSearch={onSearch} />
        </div>
    )
}
NoteHeader.propTypes = {
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.string,
}
export default NoteHeader;





