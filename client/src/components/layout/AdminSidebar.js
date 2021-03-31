import React from "react";

export default function AdminSidebar() {
  let pathName = window.location.pathname;
  console.log(pathName.includes("page"));

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="/admin" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Admin Main
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li>
            <li
              className={`nav-item has-treeview ${
                pathName.includes("category") || pathName.includes("type")
                  ? " menu-open"
                  : ""
              }`}
            >
              <a
                href="#"
                className={`nav-link${
                  pathName.includes("category") || pathName.includes("type")
                    ? " active"
                    : ""
                }`}
              >
                <i className="nav-icon fas fa-sitemap" />
                <p>
                  Category
                  <i className="fas fa-angle-left right" />
                  <span className="badge badge-info right">6</span>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="/admin/category"
                    className={`nav-link${
                      pathName.includes("/category") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Categories</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/type"
                    className={`nav-link${
                      pathName.includes("/type") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Types</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/addcategory"
                    className={`nav-link${
                      pathName.includes("addcategory") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Add New Category</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/addtype"
                    className={`nav-link${
                      pathName.includes("addtype") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Add New Type</p>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item has-treeview${
                pathName.includes("product") ? " menu-open" : ""
              }`}
            >
              <a
                href="#"
                className={`nav-link${
                  pathName.includes("product") ? " active" : ""
                }`}
              >
                <i className="nav-icon fas fa-tags" />
                <p>
                  Prodcuts
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="/admin/product"
                    className={`nav-link${
                      pathName.includes("/product") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Product List</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/addproduct"
                    className={`nav-link${
                      pathName.includes("/addproduct") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Add New Product</p>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item has-treeview ${
                pathName.includes("page") ? " menu-open" : ""
              }`}
            >
              <a
                href="#"
                className={`nav-link${
                  pathName.includes("page") ? " active" : ""
                }`}
              >
                <i className="nav-icon fas fa-palette" />
                <p>
                  Pages
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="/admin/page"
                    className={`nav-link${
                      pathName.includes("/page") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Page List</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/addpage"
                    className={`nav-link${
                      pathName.includes("addpage") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Add New Page</p>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item has-treeview${
                pathName.includes("menu") ? " menu-open" : ""
              }`}
            >
              <a
                href="#"
                className={`nav-link${
                  pathName.includes("menu") ? " active" : ""
                }`}
              >
                <i className="nav-icon fas fa-edit" />
                <p>
                  Menu
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="/admin/menu"
                    className={`nav-link${
                      pathName.includes("/menu") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Menu List</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/addmenu"
                    className={`nav-link${
                      pathName.includes("addmenu") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Add New Menu</p>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item has-treeview${
                pathName.includes("menu") ? " menu-open" : ""
              }`}
            >
              <a
                href="#"
                className={`nav-link${
                  pathName.includes("menu") ? " active" : ""
                }`}
              >
                <i className="nav-icon fas fa-sliders-h" />
                <p>
                  Slider
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="/admin/slider"
                    className={`nav-link${
                      pathName.includes("/slider") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Slider List</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/addslider"
                    className={`nav-link${
                      pathName.includes("addslider") ? " active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Add New Slider</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">EXAMPLES</li>
            <li className="nav-item">
              <a href="pages/calendar.html" className="nav-link">
                <i className="nav-icon fas fa-calendar-alt" />
                <p>
                  Calendar
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/gallery.html" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>Gallery</p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                <p>
                  Mailbox
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/mailbox/mailbox.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inbox</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/compose.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Compose</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/read-mail.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">MULTI LEVEL EXAMPLE</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon" />
                <p>Level 1</p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-circle" />
                <p>
                  Level 1
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Level 2</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>
                      Level 2
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Level 2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon" />
                <p>Level 1</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
