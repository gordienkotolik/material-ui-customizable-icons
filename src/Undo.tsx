/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class Undo extends SvgIcon {
  public displayName: string = 'Undo';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 6, L 8 1, A 2 2, 0, 0, 1, 10 2, L 10 6, A 12 12, 0, 0, 1, 22 22, A 1 1, 0, 0, 1, 20 22, A 11 11, 0, 0, 0, 10 10, L 10 13, A 2 2, 0, 0, 1, 8 14, L 2 9, A 2 2, 0, 0, 1, 2 6" stroke="transparent" fill={pallet.primary} strokeWidth="0" />
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
      ...{fill: this.context.muiTheme.icon.color},
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default Undo;