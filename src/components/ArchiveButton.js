import React from "react";
import PropTypes from 'prop-types';

function ArchiveButton ( {id, onArchive, isArchived } ) {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{isArchived ? 'Return' : 'Archive'}</button>
}

ArchiveButton.propTypes = {
    id : PropTypes.string.isRequired,
    onArchive: PropTypes.func,
    isArchived: PropTypes.bool,
}
export default ArchiveButton;



