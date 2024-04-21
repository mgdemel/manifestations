import { Text } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
  styles?: string;
};

export const Paragraph = ({ text, styles }: Props) => {
  return (
    <Text as="p" className={`${styles}`}>
      {text}
    </Text>
  );
};
