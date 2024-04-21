import { Paragraph, Title, ToggleButton } from "@/components";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";

export const CardViewToggle = () => {
  return (
    <>
      <Title text="Gratitude" styles="px-6 py-4 text-3xl font-extrabold" />
      <Paragraph
        text="I am grateful for the opportunities that have come my way."
        styles="px-6 pb-2 text-base font-normal"
      />
      <div className="px-6 py-4 flex justify-between items-center">
        <ToggleButton styles="aspect-square size-8">
          <ArrowUpIcon />
        </ToggleButton>
        <ToggleButton styles="aspect-square size-8 ">
          <ArrowTopLeftIcon />
        </ToggleButton>
        <ToggleButton styles="aspect-square size-8">
          <ArrowBottomRightIcon />
        </ToggleButton>
        <ToggleButton styles="aspect-square size-8">
          <ArrowDownIcon />
        </ToggleButton>
      </div>
    </>
  );
};
