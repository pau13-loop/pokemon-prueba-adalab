import { FC, useState } from "react";
import './styles.scss';

interface IProps {
  name: string;
  placeholder: string;
  inputType?: React.HTMLInputTypeAttribute;
  onInput: (event: any) => void;
}

// Add width and height dynamically with props
// Revisar box shadow
const Input: FC<IProps> = (props) => {
  const { name, placeholder, inputType = "text", onInput } = props;
  const [filterValue, setFilterValue] = useState<string>('');

  const handleFilterValue = (event: any) => {
    setFilterValue(event.target.value);
    onInput(event.target.value);
  };

  return (
    <input
      name={name}
      value={filterValue}
      type={inputType}
      onInput={handleFilterValue}
      placeholder={placeholder}
      className="w-100 h-3 textCenter fs-md input"
    />
  )
};

export { Input };