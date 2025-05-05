import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
  },
  args: {
    label: 'Button',
    primary: true,
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `
      <lib-btn [primary]="primary" [label]="label"></lib-btn>
    `,
  }),
};

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
  render: args => ({
    props: args,
    template: `
      <lib-btn [primary]="primary" [label]="label"></lib-btn>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
  },
  render: args => ({
    props: args,
    template: `
      <lib-btn [primary]="primary" [label]="label"></lib-btn>
    `,
  }),
};
