
import ProtectedRoute from "@/Components/ProtectedRoute";
const Page = () => {
  return (
<ProtectedRoute>
      <div className=" mt-[10vw] p-4">
       my pet
    </div>
    </ProtectedRoute>
  )
}

export default Page;
