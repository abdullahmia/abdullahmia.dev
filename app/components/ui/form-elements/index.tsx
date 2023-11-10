import { FormError, FromErrorProps } from "./error";
import { Input, InputProps } from "./input";
import { Label, LabelProps } from "./lable";
import { SelectInput, SelectInputProps } from "./select";
import { Textarea, TextareaProps } from "./textarea";

export const FormElements = {
  Label: (props: LabelProps) => <Label {...props} />,
  Input: (props: InputProps) => <Input {...props} />,
  Textarea: (props: TextareaProps) => <Textarea {...props} />,
  Select: (props: SelectInputProps) => <SelectInput {...props} />,
  FromError: (props: FromErrorProps) => <FormError {...props} />,
};

export default FormElements;
