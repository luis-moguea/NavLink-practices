import { useSearchParams } from "react-router-dom";

const Links = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const number: any = searchParams.get("number");
  return (
    <>
      <ul>
        <li>
          <h3>Link 1</h3>
        </li>
        <li>
          <h3>Link 2</h3>
        </li>
        <li>
          <h3>Link {number}</h3>
        </li>
        <input
          type="number"
          onChange={(e) => {
            setSearchParams({ number: e.target.value });
          }}
          value={number}
        />
      </ul>
    </>
  );
};

export default Links;
