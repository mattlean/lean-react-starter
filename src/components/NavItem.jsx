// @flow

import React from 'react';

type Props = {
  keyVal: string,
  aClass?: string,
  href: string,
  liClass?: string,
  text?: string
};

const NavItem = (props: Props) => {
  const liClassVal = props.liClass ? `nav-item ${props.liClass}` : 'nav-item';
  const aClassVal = props.aClass ? `nav-link ${props.aClass}` : 'nav-link';

  return (
    <li className={liClassVal} key={props.keyVal}>
      <a className={aClassVal} href={props.href}>
        {props.text}
      </a>
    </li>
  );
};

NavItem.defaultProps = {
  aClass: '',
  liClass: '',
  text: ''
};

export default NavItem;
