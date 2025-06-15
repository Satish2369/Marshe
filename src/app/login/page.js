import dynamic from "next/dynamic";
import { Suspense } from "react";

const Login = dynamic(() => import("@/Components/Login"), { ssr: false });

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
};

export default page;
