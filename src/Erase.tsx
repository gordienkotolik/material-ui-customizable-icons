/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class Erase extends SvgIcon {
  public displayName: string = 'Erase';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 23 1, L 19 1, L 6 14, L 10 18, L 23 5" stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 9 19, L 5 15, L 3 17, A 2 2, 0, 0, 0, 2 19, L 5 22, A 2 2, 0, 0, 0, 6 22, L 9 19" stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 6 21, L 22 21" stroke={pallet.primary} fill="transparent" strokeWidth="2" />
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


export default Erase;