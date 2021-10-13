import { Meta, Story } from "@storybook/react";
import Room, { IRoomProps } from ".";

export default {
  title: "Room",
  component: Room,
  args: {
    id: 123456,
  },
} as Meta;

export const Default: Story<IRoomProps> = (args) => <Room {...args} />;
