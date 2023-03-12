import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  return {
    value,
    setValue,
    onChange: onValueChangeHandler,
  };
};
