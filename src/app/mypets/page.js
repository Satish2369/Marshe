import ProtectedRoute from "@/Components/ProtectedRoute"



const page = () => {
  return (

    <ProtectedRoute>
      <div className=" mt-[10vw] p-4">
       my pets
    </div>
    </ProtectedRoute>
   
  )
}

export default page
