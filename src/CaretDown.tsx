/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class CaretDown extends SvgIcon {
  public displayName: string = 'CaretDown';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 3 4, L 12 14, A 2 2, 0, 0, 0, 14 14, L 23 4, A 2 2, 0, 0, 0, 22 2, L 4 2, A 2 2, 0, 0, 0, 3 4" stroke="transparent" fill={pallet.primary} strokeWidth="0" />
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


export default CaretDown;