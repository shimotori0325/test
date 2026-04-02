type Test = {
  name: string;
  age: number;
  text: string;
};

type Props = {
  clone: Test[];
};

export const TestB = ({ clone }: Props) => {
  return (
    <>
      {clone.map((item, index) => (
        <ul key={index}>
          <li>名前: {item.name}</li>
          <li>年齢: {item.age}</li>
          <li>テキスト: {item.text}</li>
        </ul>
      ))}
    </>
  );
};