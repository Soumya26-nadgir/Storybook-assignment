import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";
const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An accessible rating component that displays star ratings with proper ARIA labels for screen readers. Perfect for product reviews and ratings.",
      },
    },
  },
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.1 },
      description: "The rating value (0-5)",
    },
    maxRating: {
      control: { type: "range", min: 1, max: 10, step: 1 },
      description: "Maximum rating value",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the rating stars",
    },
    showValue: {
      control: "boolean",
      description: "Whether to show the numeric rating value",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Rating>;
export const Default: Story = {
  args: {
    rating: 4.5,
  },
};
export const WithValue: Story = {
  args: {
    rating: 4.2,
    showValue: true,
  },
};
export const FullRating: Story = {
  args: {
    rating: 5,
    showValue: true,
  },
};
export const LowRating: Story = {
  args: {
    rating: 1.5,
    showValue: true,
  },
};
export const ZeroRating: Story = {
  args: {
    rating: 0,
    showValue: true,
  },
};
export const AllSizes: Story = {
  args: {
    rating: 4.5,
    showValue: false,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Rating {...args} size="sm" />
        <span className="text-sm text-gray-600">Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Rating {...args} size="md" />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex items-center gap-4">
        <Rating {...args} size="lg" />
        <span className="text-sm text-gray-600">Large</span>
      </div>
    </div>
  ),
};
export const RatingScale: Story = {
  args: {
    rating: 0, 
  },
  render: () => (
    <div className="flex flex-col gap-3">
      {[1, 2, 3, 4, 5].map((rating) => (
        <div key={rating} className="flex items-center gap-4">
          <Rating rating={rating} showValue />
          <span className="text-sm text-gray-600">
            {rating} star{rating !== 1 ? "s" : ""}
          </span>
        </div>
      ))}
    </div>
  ),
};
