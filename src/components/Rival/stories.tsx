import { Meta, Story } from "@storybook/react";
import Rival, { RivalProps } from ".";

export default {
  title: "Rival",
  component: Rival,
  args: {
    handCount: 3,
  },
} as Meta;

export const Default: Story<RivalProps> = (args) => <Rival {...args} />;
