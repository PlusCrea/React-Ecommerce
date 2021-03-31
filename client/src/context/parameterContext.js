import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getParametersAction } from "../action/parametersAction";

export const ParameterContext = React.createContext();

const ParameterProvider = (props) => {
  const { parameters } = useSelector((state) => state.parameters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParametersAction());
  }, []);

  return (
    <ParameterContext.Provider
      value={{
        parameters,
      }}
    >
      {}
    </ParameterContext.Provider>
  );
};

const ParameterContextConsumer = ParameterContext.Consumer;

export default ParameterProvider;
export { ParameterContextConsumer };
