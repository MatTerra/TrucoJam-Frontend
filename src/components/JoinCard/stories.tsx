import { Meta, Story } from "@storybook/react";
import JoinCard, { IJoinCardProps } from ".";

export default {
  title: "JoinCard",
  component: JoinCard,
  args: {
    label: "Join a game",
  },
} as Meta;

export const Default: Story<IJoinCardProps> = (args) => <JoinCard {...args} />;

export const Join: Story<IJoinCardProps> = (args) => <JoinCard {...args} />;
Join.args = {
  label: "Join room",
};
