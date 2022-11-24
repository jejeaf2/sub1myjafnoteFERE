import React from "react";
import PropTypes from 'prop-types';

function NoteSearch ({ search, onSearch }) {
    return (
        <div className="note-search">
               <input type='text' placeholder='Find notes' value={search} onChange={onSearch} />
        </div>
    )
}

NoteSearch.propTypes = {
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
}


export default NoteSearch;


