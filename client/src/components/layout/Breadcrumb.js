import React from 'react'

export default function Breadcrumb() {
    return (
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <a href="/index">
                  <i className="fa fa-home"></i> Home
                </a>
                <span>Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
