import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils";




function NoteItemBody({ title, date, body }) {
    return (
        <div className="note-item__content">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">{showFormattedDate(date)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string
}

export default NoteItemBody;