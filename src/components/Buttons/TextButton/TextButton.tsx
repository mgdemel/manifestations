import { Button } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
  styles?: string;
};

export const TextButton = ({ text, styles }: Props) => {
  return (
    <Button variant="ghost" className={`${styles}`}>
      {text}
    </Button>
  );
};
