import { Meta, Story } from "@storybook/react";
import Ally, { AllyProps } from ".";

export default {
  title: "Ally",
  component: Ally,
  args: {
    handCount: 3,
  },
} as Meta;

export const Default: Story<AllyProps> = (args) => <Ally {...args} />;
