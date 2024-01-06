import { VariantProps, cva } from "cva";

const button = cva("button", {
  variants: {
    intent: {
      primary: {},
      secondary: {},
    },
    size: {},
  },
});

export interface ButtonProps extends VariantProps<typeof button> {
  text: string;
}

export const Button = ({ intent, size, text }: ButtonProps) => {
  return <button className={button({ intent, size })}>{text}</button>;
};
