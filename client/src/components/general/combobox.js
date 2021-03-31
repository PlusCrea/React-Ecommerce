import React, { Component } from "react";

class UserComboBox extends Component {
  /*
        constructor(props) {
            super(props);
            //const { title, name, handleChange, datas, value } = props;
            //this.handleChange = this.handleChange.bind(this);
        }
    */
  handleChange(event) {
    if (this.props.handleChange) this.props.handleChange(event);
  }

  render() {
    return (
      <div className="form-group">
        <label>{this.props.title}</label>
        <select
          className="form-control"
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled}
          onChange={this.handleChange.bind(this)}
        >
          <option value="">All {this.props.title}</option>
          {this.props.datas.map((data, i) => {
            return (
              <option key={i} value={data._id}>
                {data.name ? data.name : data.title}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

/*
const UserComboBox = (props) => {
    const { title, name, handleChange, datas, value } = props;
    console.log('Combohandle', handleChange);

    return (
        <div className="form-group">
            <label>{title}</label>
            <select className="form-control" name={name} value={value} onChange={handleChange}>
                {
                    datas.map((data, i) => {
                        return (
                            <option key={i} value={data._id}>{data.name}</option>
                        )
                    })
                }
            </select>
        </div>

    )
}
*/
export default UserComboBox;
