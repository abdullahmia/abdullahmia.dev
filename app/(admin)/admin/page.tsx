"use client";

import { Button } from "@/app/components";
import Modal from "@/app/components/ui/modal";
import { useState } from "react";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggoleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="py-5 px-5 bg-gray-100">
        Admin Dashboard
        <Button onClick={() => setIsOpen(true)}>
          <span>Logout</span>
        </Button>
        <Modal isOpen={isOpen} toggoleModal={toggoleModal}>
          <h2>Sure are you want to logout?</h2>
        </Modal>
      </div>
    </div>
  );
};

export default AdminDashboard;
