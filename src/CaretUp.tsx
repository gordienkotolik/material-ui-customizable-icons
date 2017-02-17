/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class CaretUp extends SvgIcon {
  public displayName: string = 'CaretUp';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 13, L 12 2, A 2 2, 0, 0, 1, 14 2, L 23 12, A 2 2, 0, 0, 1, 22 14, L 4 14, A 2 2, 0, 0, 1, 3 12" stroke="transparent" fill={pallet.primary} strokeWidth="0" />
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


export default CaretUp;