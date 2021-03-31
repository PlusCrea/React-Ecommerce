import React from "react";
import { PageInRoles } from "./role";
import { getCurrentUser } from "../../action/authAction";

const Authorization = (Page, PageName) => {
  const User = getCurrentUser();

  return class WithAuthorization extends React.Component {
    render() {
      if (PageInRoles[PageName].includes(User.role)) {
        return <Page {...this.props} />;
      } else {
        if (User.role == null)
          return (
            <div>
              <h3>You must be login</h3>
            </div>
          );
        else
          return (
            <div>
              <h3>
                This user type "{User.role}" not allowed to view the this
                page......
              </h3>
            </div>
          );
      }
    }
  };
};

export default Authorization;
