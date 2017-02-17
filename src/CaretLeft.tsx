/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class CaretLeft extends SvgIcon {
  public displayName: string = 'CaretLeft';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 23 12, L 13 3, A 2 2, 0, 0, 0, 11 4, L 11 22, A 2 2, 0, 0, 0, 13 23, L 23 14, A 2 2, 0, 0, 0, 23 12" stroke="transparent" fill={pallet.primary} strokeWidth="0" />
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


export default CaretLeft;