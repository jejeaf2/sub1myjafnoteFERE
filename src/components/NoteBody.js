import React from "react";
import PropTypes from 'prop-types'
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { getAllNotes } from '../utils/local-data'
import NoteHeader from "./NoteHeader";


class NoteBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getAllNotes(),
            search: '',
        }

        this.onSearch = this.onSearch.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note);
        this.setState({ notes });
    }

    onAddNotesHandler({ title, createdAt, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt,
                        body,
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearch(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
    }

    render() {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
        const listNotes = notes.filter((note) => {
            return note.archived === false;
        });
        const archivedNotes = notes.filter((note) => {
            return note.archived === true;
        })
        return (
            <div>
                <NoteHeader search={this.state.search} onSearch={this.onSearch}/>
                <div className="note-app__body" >
                    <NoteForm addNotes={this.onAddNotesHandler} />
                    <h2>List Note</h2>
                    <NoteList notes={listNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Archive</h2>
                    <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        )
    }
}
NoteBody.propTypes = {
    id : PropTypes.string.isRequired,
    tittle : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    archived : PropTypes.bool.isRequired,


}
export default NoteBody;




