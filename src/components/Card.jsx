import "./card.css";
export function Card({estate}) {
  return (
    <div className="card">
      <h1>My first Card</h1>
      <p className={estate ? "on" : "off"}>Card Details</p>
    </div>
  )
}