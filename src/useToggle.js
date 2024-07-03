import { useRef, useState } from "react";

export function useToggle (params) {
  const [value, setValue] = useState(params[0]);
  const count = useRef(1);

  const toggle = (string) => {

    if (string) {
      setValue(string);

    }else{
        if (params.length > count.current) {
          setValue(params[0 + count.current]);
          count.current = count.current + 1;
        } else {
          count.current = 1;
          setValue(params[0]);
        }
    }
  };

  return [value, toggle];
}
