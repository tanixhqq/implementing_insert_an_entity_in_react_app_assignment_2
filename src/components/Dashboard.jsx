import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
 
  return (
    <div>
      <h1>Movie Collection</h1>
      {/* Add Movie button */}
      <button onClick={() => navigate("/add-movie")}>
        Add Movie
      </button>

      {/* If you have MovieCard components, render them below */}
      {/* <MovieCard ... /> */}
    </div>
  );
}
export default Dashboard;
