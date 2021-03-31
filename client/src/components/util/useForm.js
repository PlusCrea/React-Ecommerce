import { useState } from "react";

export const useForm = (initialValues, e) => {
  const [values, setValues] = useState(initialValues);
  //console.log(values);

  return [
    values,
    (e) => {
      /*
      if (e.target.type === "checkbox") {
        console.log("Checkbox");
        if (e.target.checked) {
          //
        }
      } else {
        */
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
      //}
    },
  ];
};
