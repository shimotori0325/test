import { useParams } from "react-router-dom";

export const TestA = () => {
  const { id } = useParams();
  return (
    <>
      <p>{id}</p>
      <p>TestAのコンポーネント</p>
    </>
  );
};
