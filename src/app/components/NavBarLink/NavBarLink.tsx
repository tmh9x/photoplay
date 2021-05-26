import React from 'react';
import classes from './NavBarLink.module.css';

type LinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  text: string;
};

function NavBarLink({ icon, text }: LinkProps): JSX.Element {
  return (
    <a className={classes.link} href="#">
      {icon}
      <span> {text} </span>
    </a>
  );
}
export default NavBarLink;
