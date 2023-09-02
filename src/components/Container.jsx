import Item from "./Item";
import { SecondItem, ThirdComponent } from "./Item";

export function Container() {
  return (
    <div>
      <Item />
      <SecondItem />
      <ThirdComponent/>
    </div>
  );
}
