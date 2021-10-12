import { Meta, Story } from "@storybook/react";
import { ImEnter } from "react-icons/im";
import { MdOutlineWidgets } from "react-icons/md";
import MenuCard, { IMenuCardProps } from ".";

export default {
  title: "MenuCard",
  component: MenuCard,
  args: {
    text: "Host a game",
    Icon: MdOutlineWidgets,
  },
} as Meta;

export const Default: Story<IMenuCardProps> = (args) => <MenuCard {...args} />;

export const Join: Story<IMenuCardProps> = (args) => <MenuCard {...args} />;
Join.args = {
  Icon: ImEnter,
  text: "Join room",
};
