import { useParams } from "react-router-dom";

export const TestB = () => {
  const { id } = useParams();
  return (
    <>
      <p>{id}</p>
      <p>TestBのコンポーネント</p>
    </>
  );
};
