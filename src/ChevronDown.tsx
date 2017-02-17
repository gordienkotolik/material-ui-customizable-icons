/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ChevronDown extends SvgIcon {
  public displayName: string = 'ChevronDown';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 2 L 13 13" stroke={pallet.primary} fill="transparent" strokeWidth="4" />
        <path d="M 10 13 L 22 2" stroke={pallet.primary} fill="transparent" strokeWidth="4" />
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


export default ChevronDown;