import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUlr = urlParams.get("tab");
    if(tabFromUlr){
      setTab(tabFromUlr);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56 ">
        {/* Sidebarr */}

        <DashSidebar/>
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile/>}
    </div>
  )
}

export default Dashboard