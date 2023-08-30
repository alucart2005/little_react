export function Coffe() {
  const data = {
    name: "Hot Coffe",
    price: 100,
    id: 1,
  };

  return <div>
    <h1>{data.name}</h1>
    <h2>{data.price}</h2>
    <h3>{data.id}</h3>
  </div>;
  // const hot=false;
  // return (<h1>{hot ? "Hot Coffe" : "Cold Coffe"}</h1>)
}

