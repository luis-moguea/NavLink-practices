import { useParams } from "react-router-dom";

const home = () => {
  const { id }: any = useParams();

  return (
    <>
      <h1>HOME</h1>;<h3>Testing useParams {id}</h3>
    </>
  );
};

export default home;
