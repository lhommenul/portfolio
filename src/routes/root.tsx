import { Outlet, Link } from "react-router-dom";

import Main from '@/templates/Main.tsx'

export default function Root() {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}