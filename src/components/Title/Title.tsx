import { Heading } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
  styles?: string;
};

export const Title = ({ text, styles }: Props) => {
  return (
    <Heading as="h1" className={`${styles}`}>
      {text}
    </Heading>
  );
};
