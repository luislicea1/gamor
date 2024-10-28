import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default Root;
