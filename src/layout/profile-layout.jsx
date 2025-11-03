import React from "react";
import { Outlet } from "react-router-dom";
import Avatar from "../profile/components/avatar";
import TabMenu from "../profile/components/tab-menu";

const ProfileLayout = () => {
  return (
    <>
      <Avatar />
      <div className="flex gap-8">
        <TabMenu />
        <Outlet />
      </div>
    </>
  );
};

export default ProfileLayout;
