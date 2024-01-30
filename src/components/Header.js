import "./header.css";
import Button from "./Button";

function Header(props) {
  return (
    <div className="header">
      <Button className="btn" id="create1000" title="Stwórz 1000 wierszy" func={() => props.create(1000)}/>
      <Button className="btn" id="create10000" title="Stwórz 10 000 wierszy" func={() => props.create(10000)}/>
      <Button className="btn add" id="create1000" title="Dodaj 1000 wierszy" func={() => props.add(1000)}/>
      <Button className="btn add" id="create10000" title="Dodaj 10 000 wierszy" func={() => props.add(10000)}/>
      <Button className="btn delete" id="deleteTab" title="Usuń tabelę" func={() => props.deleteTab()}/>
      <Button className="btn create" id="createImg100" title="Wstaw 300 zdjęć" func={() => props.createImg(300)}/>
      <Button className="btn create" id="createImg200" title="Wstaw 700 zdjęć" func={() => props.createImg(700)}/>
      <Button className="btn delete" id="deleteImg" title="Usuń zdjęcia" func={() => props.deleteImg()}/>
    </div>
  );
}
export default Header;
