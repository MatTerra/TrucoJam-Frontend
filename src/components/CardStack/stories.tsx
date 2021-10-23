import { Meta, Story } from "@storybook/react";
import Stack, { StackProps } from ".";

export default {
  title: "Stack",
  component: Stack,
  args: {
    stackCount: 3,
  },
} as Meta;

export const Default: Story<StackProps> = (args) => <Stack {...args} />;
