import { FormError, FromErrorProps } from "./error";
import { Input, InputProps } from "./input";
import { Label, LabelProps } from "./lable";

export const FormElements = {
  Label: (props: LabelProps) => <Label {...props} />,
  Input: (props: InputProps) => <Input {...props} />,
  FromError: (props: FromErrorProps) => <FormError {...props} />,
};

export default FormElements;
