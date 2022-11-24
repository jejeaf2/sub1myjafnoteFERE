import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import NoteItemBody from "./NoteItemBody";
// import { getInitialData } from "../utils";


function NoteItem({ title, createdAt, body, id, onDelete, onArchive, isArchived }) {
    return (
        <div className="note-item">
            <h2>
            <Link to={`/notes/${id}`}>{title}</Link> 
            </h2>
            <NoteItemBody  body={body} date={createdAt} />
            <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
            </div>
        </div>
    )
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    isArchived: PropTypes.bool,
}

export default NoteItem;




