import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import NoteItem from '../components/NoteItem';
import { getNote } from '../utils/local-data';

function DetailPageWrapper() {
  const navigate = useNavigate();

  const{id}=userParams();

  function homeNavigate() {
    navigate('/')
  }
  return <DetailPage id={id} navigate={homeNavigate}/>;
}
class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>notes is not found!</p>;
    }

    return (
      <section>
        <NoteItem {...this.state.note} />
      </section>
    );
  }
}

export default DetailPage;
