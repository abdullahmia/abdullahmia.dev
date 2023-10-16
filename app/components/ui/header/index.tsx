"use client";

import { useState } from "react";
import MainHeader from "./header";
import NavDrower from "./nav-drawer";

export const Header = () => {
  // local state
  const [isDrawerOpen, setIsDrawerOpen] = useState<Boolean>(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <NavDrower isDrowerOpen={isDrawerOpen} toggoleDrower={toggleDrawer} />
      <MainHeader toggleDrawer={toggleDrawer} />
    </>
  );
};
