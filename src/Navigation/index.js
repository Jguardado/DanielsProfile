import React from 'react';
import { Link } from "react-router-dom";
import styles from './index.module.css';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Daniels Image</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link  className={styles.linkCopy} to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link className={styles.linkCopy} to='/projects'>Projects</Link>
              </NavItem>
              <NavItem>
                <Link className={styles.linkCopy} to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className={styles.linkCopy} to="/contact">Contact Me</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};

const DesktopNav = () => (
    <div className={styles.container}>
        <div className={styles.test}>
            <div className={styles.linkItem}>
                <Link className={styles.linkCopy} to="/">Home</Link>
            </div>
        </div>

        <div className={styles.centeredLinked}>
            <div className={styles.linkItem}>
                <Link className={styles.linkCopy} to="/about">About</Link>
            </div>
            <div className={styles.linkItem}>
                <Link className={styles.linkCopy} to='/projects'>Projects</Link>
            </div>
            <div className={styles.linkItem}>
                <Link className={styles.linkCopy} to="/contact">Contact Me</Link>
            </div>
        </div>
    </div>
)

class Navigation extends React.Component {
    // TODO: This could use some improvements. 
    // Currently screen width is determine at the time of page load
    // so we can cant easily stretch the screen to see change dynamically
    render() {
      if (window.screen.width < 750) {
        return <MobileNav />
      }
      return <DesktopNav />
    }

}


Navigation.propTypes = {

};

export default Navigation;
