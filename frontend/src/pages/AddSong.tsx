import SongForm from "../components/SongForm";

function AddSong() {
  return (
    <div className="add-song">
      <div>
        <button type="button">←</button>
        <h1>Add/Edit a song</h1>
      </div>
      <SongForm />
    </div>
  );
}

export default AddSong;
