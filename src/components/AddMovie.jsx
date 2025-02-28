import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
          required
        />
        <select name="genre" onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          onChange={handleChange}
          required
        />
        <textarea
          name="synopsis"
          placeholder="Synopsis"
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="url"
          name="posterUrl"
          placeholder="Poster Image URL"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default AddMovie;