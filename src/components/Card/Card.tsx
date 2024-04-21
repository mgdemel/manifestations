import { Card } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
  styles?: string;
};

export const ContentCard = ({ children, styles }: Props) => {
  return (
    <Card variant="classic" className={`${styles}`}>
      {children}
    </Card>
  );
};
