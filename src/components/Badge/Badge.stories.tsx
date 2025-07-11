import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Tag, CheckCircle, AlertTriangle, Star } from "lucide-react";
const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A small, versatile badge component for displaying status, tags, or other important information.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "sale", "success", "warning", "outline"],
      description: "The visual style variant of the badge",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "The size of the badge",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  args: {
    children: "Badge",
    variant: "default",
    size: "md",
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const SaleBadge: Story = {
  args: {
    variant: "sale",
    children: "Sale",
  },
};
export const SuccessBadge: Story = {
  args: {
    variant: "success",
    children: "In Stock",
  },
};
export const WarningBadge: Story = {
  args: {
    variant: "warning",
    children: "Low Stock",
  },
};
export const OutlineBadge: Story = {
  args: {
    variant: "outline",
    children: "Limited Edition",
  },
};
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Badge variant="sale" icon={<Tag className="w-3 h-3" />}>
          Limited Time
        </Badge>
        <Badge variant="success" icon={<CheckCircle className="w-3 h-3" />}>
          In Stock
        </Badge>
        <Badge variant="warning" icon={<AlertTriangle className="w-3 h-3" />}>
          Low Stock
        </Badge>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="default" size="sm" icon={<Star className="w-3 h-3" />}>
          Featured
        </Badge>
        <Badge variant="outline" size="sm" icon={<Tag className="w-3 h-3" />}>
          New
        </Badge>
      </div>
    </div>
  ),
};
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-500">Small</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="sm" variant="default">Default</Badge>
          <Badge size="sm" variant="sale">Sale</Badge>
          <Badge size="sm" variant="success">Success</Badge>
          <Badge size="sm" variant="warning">Warning</Badge>
          <Badge size="sm" variant="outline">Outline</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-500">Medium</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="md" variant="default">Default</Badge>
          <Badge size="md" variant="sale">Sale</Badge>
          <Badge size="md" variant="success">Success</Badge>
          <Badge size="md" variant="warning">Warning</Badge>
          <Badge size="md" variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available badge variants in both small and medium sizes.",
      },
    },
  },
};
