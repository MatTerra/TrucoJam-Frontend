import { Meta, Story } from "@storybook/react";
import Hand, { HandProps } from ".";

export default {
  title: "Hand",
  component: Hand,
  args: {
    handCount: 3,
  },
} as Meta;

export const Default: Story<HandProps> = (args) => <Hand {...args} />;
