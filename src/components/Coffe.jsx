export function Coffe() {
  const data = {
    name: "Hot Coffe",
    price: 100,
    id: 1,
  };

  return <div>
    <h1>{data.name}  
    <span>- Price: {data.price} </span> - id: <span>{data.id}</span></h1>
  </div>;
  // const hot=false;
  // return (<h1>{hot ? "Hot Coffe" : "Cold Coffe"}</h1>)
}

