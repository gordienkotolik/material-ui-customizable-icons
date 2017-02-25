/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ArrowLeft extends SvgIcon {
  public displayName: string = 'ArrowLeft';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 9 9, L 13 4, A 1 1, 0, 0, 0, 9 1, L 1 10, A 3 3, 0, 0, 0, 1 14, L 9 23, A 1 1, 0, 0, 0, 13 20, L 9 15, L 22 15, A 5 5, 0, 0, 0, 22 9, L 9 9" fill={pallet.primary} stroke="transparent" strokeWidth="0" />
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


export default ArrowLeft;