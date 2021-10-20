import { Story, Meta } from '@storybook/react/types-6-0'
import { FiShoppingCart } from 'react-icons/fi'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    },
    color: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const Black: Story = (args) => <Button {...args} />

Black.args = {
  children: 'Buy now',
  color: 'black'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
  children: 'Buy now',
  icon: <FiShoppingCart />
}
