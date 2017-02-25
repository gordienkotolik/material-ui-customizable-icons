/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ArrowUp extends SvgIcon {
  public displayName: string = 'ArrowUp';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 9 9, L 4 13, A 1 1, 0, 0, 1, 1 9, L 10 1, A 3 3, 0, 0, 1, 14 1, L 23 9, A 1 1, 0, 0, 1, 20 13, L 15 9, L 15 22, A 5 5, 0, 0, 1, 9 22, L 9 9" fill={pallet.primary} stroke="transparent" strokeWidth="0" />
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


export default ArrowUp;