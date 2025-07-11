import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ShoppingCart, Heart, Download } from "lucide-react";
import { Button } from "./Button";
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible button component with multiple variants, loading states, and icon support. Designed for e-commerce interactions with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "disabled"],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    isLoading: {
      control: "boolean",
      description: "Shows loading spinner when true",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the icon relative to text",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Add to Cart",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "View Details",
  },
};
export const Disabled: Story = {
  args: {
    variant: "disabled",
    children: "Out of Stock",
  },
};
export const Loading: Story = {
  args: {
    variant: "primary",
    isLoading: true,
    children: "Processing...",
  },
};
export const WithIcon: Story = {
  args: {
    variant: "primary",
    icon: ShoppingCart,
    children: "Add to Cart",
  },
};
export const WithIconRight: Story = {
  args: {
    variant: "secondary",
    icon: Download,
    iconPosition: "right",
    children: "Download",
  },
};
export const AllSizes: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};
export const AllVariants: Story = {
  args: {
    size: 'md',
    onClick: fn(),
    children: 'Button',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} variant="primary" icon={ShoppingCart}>
        Primary
      </Button>
      <Button {...args} variant="secondary" icon={Heart}>
        Secondary
      </Button>
      <Button {...args} variant="disabled">
        Disabled
      </Button>
    </div>
  ),
};
