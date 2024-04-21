import { IconButton } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
  styles?: string;
};

export const ToggleButton = ({ children, styles }: Props) => {
  return (
    <IconButton size="3" variant="ghost" className={`${styles}`}>
      {children}
    </IconButton>
  );
};
