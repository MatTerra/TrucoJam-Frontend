import { Meta, Story } from "@storybook/react";
import { ImEnter } from "react-icons/im";
import { MdOutlineWidgets } from "react-icons/md";
import JoinCard, { IJoinCardProps } from ".";

export default {
  title: "JoinCard",
  component: JoinCard,
  args: {
    label: "Host a game",
  },
} as Meta;

export const Default: Story<IJoinCardProps> = (args) => <JoinCard {...args} />;

export const Join: Story<IJoinCardProps> = (args) => <JoinCard {...args} />;
Join.args = {
  text: "Join room",
};
