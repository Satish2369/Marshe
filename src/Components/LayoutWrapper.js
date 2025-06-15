"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import axios from "axios";
import Sidebar from "@/Components/Sidebar";
import CollapsibleMenu from "@/Components/CollapsibleMenu";
import { addUser } from "@/redux/slices/userSlice"; 
import { setLoading } from "@/redux/slices/userSlice";
import { BASE_URL } from "@/utils/constant"; // Ensure this is the correct path to your constants file


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const authPages = ["/login", "/register"];
  const isAuthPage = authPages.includes(pathname);

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const { data } = await axios.get( BASE_URL + "/profile",{
        withCredentials: true,
      });
      dispatch(addUser(data));
    } catch (err) {
      dispatch(setLoading(false));
    }
  };

  fetchProfile();
}, []);

  if (isAuthPage) return children;

  return (
    <div className="flex min-h-screen">
      
      <div className="ml-[11vw]">
        <Sidebar />
      </div>

     
      <div className="flex-1 pl-[2vw]">
        {children}
      </div>

     
      <div>
        <CollapsibleMenu />
      </div>
    </div>
  );
}
