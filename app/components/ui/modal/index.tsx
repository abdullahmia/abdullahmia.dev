"use client";

import { useTheme } from "next-themes";

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggoleModal: () => void;
  actionButton?: React.ReactNode;
  width?: string;
  height?: string;
  rounded?: "lg" | "md" | "sm" | "none";
  maxHeight?: "screen" | "95vh" | "none";
}

export default function Modal(props: ModalProps) {
  const { theme } = useTheme();

  const modalContainer = {
    width: props.width ? props.width : "800px",
    height: props.height ? props.height : "auto",
    overflow: "auto",
    // add max height based on props using switch case
    maxHeight: (() => {
      switch (props.maxHeight) {
        case "screen":
          return "100vh";
        case "95vh":
          return "95vh";
        case "none":
          return "none";
        default:
          return "95vh";
      }
    })(),
    // maxHeight: "95vh",
    padding: "1rem",
    // margin: "1rem",
    // add border radius based on props using switch case
    borderRadius: (() => {
      switch (props.rounded) {
        case "lg":
          return "1rem";
        case "md":
          return "0.5rem";
        case "sm":
          return "0.25rem";
        case "none":
          return "0";
        default:
          return "0.5rem";
      }
    })(),
    backgroundColor: theme === "dark" ? "#101011" : "#fff",
    boxShadow: "0 0 0 rgba(0,0,0,0.5)",
  };

  return (
    <>
      {props.actionButton && props.actionButton}
      {props.isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.19)] z-[100] flex items-center justify-center"
          onClick={props.toggoleModal}
        >
          {/* Make a modal based on props width & height. If modal props hasn't any height & width make default 500px and also responsive on mobile */}
          <div
            style={modalContainer}
            className="lg:my-0 my-48"
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
