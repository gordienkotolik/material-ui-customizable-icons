/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ViewGrid extends SvgIcon {
  public displayName: string = 'ViewGrid';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 1 1, L 5 1, L 5 7, L 1 7, L 1 1"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 7 1, L 11 1, L 11 7, L 7 7, L 7 1"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 13 1, L 17 1, L 17 7, L 13 7, L 13 1"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 19 1, L 23 1, L 23 7, L 19 7, L 19 1"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />

        <path d="M 1 9, L 5 9, L 5 15, L 1 15, L 1 9"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 7 9, L 11 9, L 11 15, L 7 15, L 7 9"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 13 9, L 17 9, L 17 15, L 13 15, L 13 9"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 19 9, L 23 9, L 23 15, L 19 15, L 19 9"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />

        <path d="M 1 17, L 5 17, L 5 23, L 1 23, L 1 17"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 7 17, L 11 17, L 11 23, L 7 23, L 7 17"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 13 17, L 17 17, L 17 23, L 13 23, L 13 17"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 19 17, L 23 17, L 23 23, L 19 23, L 19 17"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
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


export default ViewGrid;