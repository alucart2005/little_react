import "./card.css";
const pokemon = [
  {
    id: 1,
    name: "pikachu",
    image: "https://i.ebayimg.com/images/g/zY8AAOSwQ8phhrBe/s-l500.jpg",
  },
  {
    id: 2,
    name: "Charizard",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  },
];

export function Card3() {
  return pokemon.map((item, index) => {
    return (
      <div className="card" key={index}>
        <h1>Id: {item.id}    {item.name}</h1>
        <img src={item.image} alt="" />
      </div>
    );
  });
}
