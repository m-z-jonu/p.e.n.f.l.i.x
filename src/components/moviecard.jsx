import './MovieCard.css';

function MovieCard({ movies }) {
    function favourite() {
        console.log("got favourite");
    }

    if (!movies || movies.length === 0) {
        return (
            <div className="movies-grid">
                <p style={{ textAlign: "center", color: "#9ca3af", padding: "40px", gridColumn: "1 / -1" }}>
                    Search for a movie to see results
                </p>
            </div>
        );
    }

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <div className="movie-card-img-wrapper">
                        <img
                            src={movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : "https://via.placeholder.com/300x450?text=No+Image"}
                            alt={movie.title}
                        />
                        <div className="movie-card-overlay"></div>
                    </div>
                    <button className="favourite-btn" onClick={favourite}>♥</button>
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date?.slice(0, 4) || "N/A"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieCard;
