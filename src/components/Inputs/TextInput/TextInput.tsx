import { TextArea } from "@radix-ui/themes";
import React from "react";

type Props = {
  placeholder?: string;
  variant?: "classic" | "soft" | "surface" | undefined;
  styles?: string;
};

export const TextInput = ({ placeholder, variant, styles }: Props) => {
  return (
    <TextArea
      placeholder={placeholder}
      variant={variant}
      className={`${styles}`}
    />
  );
};
