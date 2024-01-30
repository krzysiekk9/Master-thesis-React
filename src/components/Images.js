function Img({ imgNum }) {
  return (
    <img
      src={require(`../assets/pokemon_jpg/${imgNum}.jpg`)}
      alt={`${imgNum}`}
    />
  );
}

export default Img;
