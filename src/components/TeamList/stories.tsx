import { Meta, Story } from "@storybook/react";
import TeamList, { ITeamListProps } from ".";

export default {
  title: "TeamList",
  component: TeamList,
  args: {
    players: ["player one", "player two"],
  },
} as Meta;

export const Default: Story<ITeamListProps> = (args) => <TeamList {...args} />;
