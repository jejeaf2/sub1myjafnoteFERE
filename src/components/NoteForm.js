import React from 'react';
import PropTypes from 'prop-types';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            charsLeft: 30,
            maxChar: 30
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onKontenChangeEventHandler = this.onKontenChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const charCount = event.target.value.length;
        const maxChar = this.state.maxChar;
        const charLength = maxChar - charCount;
        this.setState(() => {
            return {
                title: event.target.value,
                charsLeft: charLength
            }
        });
    }

    onKontenChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    
    render() {
        return (
            <div className='note-input'>
                <form onSubmit={this.onSubmitEventHandler}>
                    <h1 className='note-input__title'>Create your note</h1>
                    <p className='note-input__title__char-limit'>Maks Char: {this.state.charsLeft}</p>
                    <div className='note-input__body'>
                        <input type="text" placeholder="Title" maxLength={this.state.maxChar}
                            required
                            onChange={this.onTitleChangeEventHandler} />
                        <br />
                        <textarea type="text" placeholder="create your note..." onChange={this.onKontenChangeEventHandler} rows="10" cols="50" />
                        <br />
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

NoteForm.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    charsLeft: PropTypes.number.isRequired,
    maxChar: PropTypes.number.isRequired,
}
export default NoteForm;