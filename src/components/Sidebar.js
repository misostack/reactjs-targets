import React, { PureComponent } from "react";
import PropTypes from "prop-types";
/*
### Sidebar Menu HTML Mockup
<nav
id="sidebarMenu"
class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
>
<div className="position-sticky pt-3">
  <ul className="nav flex-column">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
        <span data-feather="home"></span>
        Dashboard
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file"></span>
        Orders
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="shopping-cart"></span>
        Products
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="users"></span>
        Customers
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="bar-chart-2"></span>
        Reports
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="layers"></span>
        Integrations
      </a>
    </li>
  </ul>

  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
    <span>Saved reports</span>
    <a className="link-secondary" href="#" aria-label="Add a new report">
      <span data-feather="plus-circle"></span>
    </a>
  </h6>
  <ul className="nav flex-column mb-2">
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file-text"></span>
        Current month
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file-text"></span>
        Last quarter
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file-text"></span>
        Social engagement
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file-text"></span>
        Year-end sale
      </a>
    </li>
  </ul>
</div>
</nav>

### Sidebar Menu Structure

```md
ul.nav.flex-column mb-2
  li.nav-item
    a.nav-item.active
      span[data-feather="home|"]
h6.sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted
  span
  a.link-secondary
  span[data-feather="plus-circle"]
```

### Sidebar Nav Components
1. Render what : nav
2. Props: 
  - navGroups
  - activeItem
3. State
  - navGroupStates
4. Datastructure


```js
navGroups = [
  {
    name: '',
    navItems: [
      { label: 'Dashboard', href: '' }
    ]
  }
]
```
*/
class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderGroupName = (groupName, href = "") => {
    console.log(groupName, href);
    return (
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>{groupName}</span>
        <a href="#" className="link-secondary"></a>
      </h6>
      // span[data-feather="plus-circle"]
    );
  };
  renderNavItems = (navItems, activeItem = "") => {
    return (
      <ul className="nav flex-column">
        {navItems.map((item) => (
          <li className="nav-item">
            <a
              className={
                "nav-link" + (activeItem == item.href ? " active" : "")
              }
              href={item.href}
            >
              <span data-feather="file"></span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  renderGroup = (group) => {
    return (
      <>
        {group.name ? this.renderGroupName(group.name, "#") : ""}
        {group.navItems
          ? this.renderNavItems(group.navItems, window.location.pathname)
          : ""}
      </>
    );
  };

  render() {
    const { navGroups } = this.props;
    return (
      <>
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3"></div>
          {navGroups.map((group) => this.renderGroup(group))}
        </nav>
      </>
    );
  }
}

Sidebar.propTypes = {
  navGroups: PropTypes.array.isRequired,
};

export default Sidebar;
