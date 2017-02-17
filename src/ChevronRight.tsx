/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ChevronRight extends SvgIcon {
  public displayName: string = 'ChevronRight';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 2 L 13 13" stroke={pallet.primary} fill="transparent" strokeWidth="4" />
        <path d="M 13 10 L 2 21" stroke={pallet.primary} fill="transparent" strokeWidth="4" />
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


export default ChevronRight;