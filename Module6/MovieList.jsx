function MoviesList(props) {
  // collection of objects representing movies
  const movies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];
  return (
    <div className="MoviesList componentBox">
      <ul>
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default MoviesList;
