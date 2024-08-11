import { useNavigate} from "react-router-dom";

export default function Search() {
    const navigate = useNavigate()

  const handlSearch = (e) => {
    e.preventDefault();
    let value = e.target.search.value;
    navigate(`/search?q=${value}`);
    e.target.search.value = "";
  };
  return (
    <form onSubmit={handlSearch} className="input">
      <input type="text" className="input_text" placeholder="Qidiruv" name="search"/>
      <button className="input_btn">X</button>
    </form>
  );
}
