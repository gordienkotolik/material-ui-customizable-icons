/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ArrowDown extends SvgIcon {
  public displayName: string = 'ArrowDown';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 15 15, L 20 11, A 1 1, 0, 0, 1, 23 15, L 14 23, A 3 3, 0, 0, 1, 10 23, L 1 15, A 1 1, 0, 0, 1, 4 11, L 9 15, L 9 2, A 5 5, 0, 0, 1, 15 2, L 15 15" fill={pallet.primary} stroke="transparent" strokeWidth="0" />
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


export default ArrowDown;