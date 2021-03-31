import React from "react";

function CheckBoxPlus(props) {
  const handleChange = (event) => {
    if (props.handleChange) props.handleChange(event);
  };

  return (
    <div className="form-group">
      <label>{props.title}</label>
      {props.data.map((dt, i) => {
        return (
          <div className="col-5" key={dt._id}>
            <input
              className="form-check-input"
              type="checkbox"
              name={props.name}
              value={dt.name}
              onChange={handleChange}
              checked={dt.isChecked}
            />
            <label className="form-check-label">{dt.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckBoxPlus;
