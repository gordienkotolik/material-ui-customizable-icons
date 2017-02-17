/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class Hamburger extends SvgIcon {
  public displayName: string = 'Hamburger';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 1 6, L 23 6" stroke={pallet.primary} fill="transparent" strokeWidth="3" />
        <path d="M 1 12, L 23 12" stroke={pallet.primary} fill="transparent" strokeWidth="3" />
        <path d="M 1 18, L 23 18" stroke={pallet.primary} fill="transparent" strokeWidth="3" />
      </g>
    );
  }
  public render() {
    const pallet: Pallet = {
      primary: this.props.pallet.primary || this.context.muiTheme.icon.color,
    };
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default Hamburger;