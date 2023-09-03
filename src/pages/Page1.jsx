import {Link} from "react-router-dom"

export function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to={"/Page2"}>Go to Page 2</Link>
    </div>
  );
}
