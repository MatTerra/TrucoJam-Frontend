import { Meta, Story } from "@storybook/react";
import Game, { GameProps } from ".";

export default {
  title: "Game",
  component: Game,
  args: {
    roomID: "12345",
  },
} as Meta;

export const Default: Story<GameProps> = (args) => <Game {...args} />;
