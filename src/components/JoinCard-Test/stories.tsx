import { Meta, Story } from "@storybook/react";
import { MdOutlineWidgets } from "react-icons/md";
import { default as JoinCard, IJoinCardProps } from ".";

export default {
  title: "MenuCard",
  component: JoinCard,
  args: {
    text: "Host a game",
    Icon: MdOutlineWidgets,
  },
} as Meta;

export const Default: Story<IJoinCardProps> = (args) => <JoinCard {...args} />;

export const Join: Story<IJoinCardProps> = (args) => <JoinCard {...args} />;
Join.args = {
  text: "Join room",
};
