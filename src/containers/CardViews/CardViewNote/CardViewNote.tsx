import { Paragraph, PrimaryButton, TextInput, Title } from "@/components";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export const CardViewNote = () => {
  return (
    <>
      <Title text="Gratitude" styles="px-6 py-4 text-3xl font-extrabold" />
      <div className="flex px-6">
        <ArrowDownIcon className="mx-2 my-auto" />
        <Paragraph
          text="I am grateful for the opportunities that have come my way."
          styles="text-base font-normal"
        />
      </div>
      <div className="px-6 py-4">
        <TextInput
          styles="mb-3"
          placeholder="care to reflect on why? add some notes here..."
        />
        <PrimaryButton text="submit" />
      </div>
    </>
  );
};
