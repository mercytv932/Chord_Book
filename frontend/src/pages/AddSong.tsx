import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SongForm from "../components/SongForm";

function AddSong() {
  const navigate = useNavigate();
  return (
    <div className="add-song">
      <div>
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/mysongs")}
        >
          <ArrowLeft size={24} />
        </button>
        <h1>Add/Edit a song</h1>
      </div>
      <SongForm />
    </div>
  );
}

export default AddSong;
