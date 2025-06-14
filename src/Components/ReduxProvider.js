"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import Sidebar from "./Sidebar";
import CollapsibleMenu from "./CollapsibleMenu";

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen">
        <div className="ml-[11vw]">
          <Sidebar />
        </div>

        <div className="flex-1 pl-[2vw]">{children}</div>
      </div>
      <div>
        <CollapsibleMenu />
      </div>
    </Provider>
  );
}
