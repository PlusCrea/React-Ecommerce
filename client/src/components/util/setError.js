import { useState, useEffect } from "react";

function SetError (initialValues) {
const [status, setstatus] = useState(initialValues.status);
const [message, setmessage] = useState("");

  console.log("setError", initialValues);
  
  useEffect(() => {
    if (!initialValues.status) {
      initialValues.error.errmsg
        ? setmessage(initialValues.error.errmsg)
        : setmessage(initialValues.error.message);
    }
  }, [initialValues]);

  return {
    status,
    message,
  };
};

export default SetError;









