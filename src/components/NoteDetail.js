import React from "react";
import PropTypes from 'prop-types';
import {showFormattedDate} from '../utils/index';

function NoteDetail({title,body,createdAt}) {
    return (
        <div>
            <h1>Detail Note</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <h4>{showFormattedDate(createdAt)}</h4>
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}
export default NoteDetail;