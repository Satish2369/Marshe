

import ProtectedRoute from "@/Components/ProtectedRoute";



const Page = () => {


  return (<>
    <ProtectedRoute>
      
    <div className={`text-white   mt-[8vw] `}>
              <h1 className="m-2 font-[700]  text-[90px]">Welcome to the </h1>
              <h1 className="m-2 font-[700]    text-[90px]">marshee</h1>
              <h1 className="m-2 font-[700]   text-[90px]"> Community</h1>
              <h2 className="ml-21 mt-14 font-[400] text-3xl">Join Now!</h2>
    </div>
    </ProtectedRoute>
    </>
  )
}

export default Page;
