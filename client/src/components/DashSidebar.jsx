import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUlr = urlParams.get("tab");
        if (tabFromUlr) {
            setTab(tabFromUlr);
        }
    }, [location]);
    return (
        <Sidebar className="w-full md:w-56 h-screen" aria-label="Sidebar with multi-level dropdown example">
            <SidebarItems>
                <SidebarItemGroup>
                    <Link to="/dashboard?tab=profile"
                        style={{ textDecoration: 'none' }}>
                        <SidebarItem active={tab === "profile"} label="User" labelColor="dark">
                            Profile
                        </SidebarItem>
                    </Link>
                    <SidebarItem  label="Users">
                        Sign Out
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
}
