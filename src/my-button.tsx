import { Button, IButtonProps } from "./lib/button/button";
import { _TypographyBuilder } from "./lib/typography";

const myBuilder = new _TypographyBuilder<IButtonProps>(Button);
export const MyButton = myBuilder.build<"cool-button" | "awesome-button">({className:"my-button"});
