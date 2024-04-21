import { Button } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
  styles?: string;
};

export const PrimaryButton = ({ text, styles }: Props) => {
  return (
    <Button variant="solid" className={`${styles}`}>
      {text}
    </Button>
  );
};
