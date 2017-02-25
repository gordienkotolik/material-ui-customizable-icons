/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ArrowRight extends SvgIcon {
  public displayName: string = 'ArrowRight';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 15 15, L 11 20, A 1 1, 0, 0, 0, 15 23, L 23 14, A 3 3, 0, 0, 0, 23 10, L 15 1, A 1 1, 0, 0, 0, 11 4, L 15 9, L 2 9, A 5 5, 0, 0, 0, 2 15, L 15 15" fill={pallet.primary} stroke="transparent" strokeWidth="0" />
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


export default ArrowRight;