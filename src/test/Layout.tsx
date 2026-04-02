import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>テスト見出し</h1>
      <Link to="/t">Test</Link>
      <Link to="/t/test-a/1">TestA</Link>
      <Link to="/t/test-b/2">TestB</Link>
      <Outlet />
    </>
  );
};