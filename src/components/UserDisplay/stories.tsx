import { Meta, Story } from "@storybook/react";
import UserDisplay, { IUserDisplay } from ".";

export default {
  title: "UserDisplay",
  component: UserDisplay,
  args: {
    username: "Someone",
    userTurn: false,
  },
} as Meta;

export const Default: Story<IUserDisplay> = (args) => <UserDisplay {...args} />;
