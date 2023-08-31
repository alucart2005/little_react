export function Users({name, age, adress}) {
  return (
    <div>
      <h1>I'm user {name}</h1>
      <h1>I'm {age} years old 😂</h1>
      <h1>I live in {adress.street} {adress.city}, {adress.country}💣</h1>
    </div>
  );
}

