/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  cat: string;
  ring: string;
}

class Github extends SvgIcon {
  public displayName: string = 'Github';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 1 12, A 1 1, 0, 0, 0, 23 12, A 1 1, 0, 0, 0, 1 12" stroke={pallet.ring} fill="transparent" strokeWidth="1.5" />
        <path d="M 8 22, A 2 2, 0, 0, 0, 9 21, L 9 18, A 4 4, 0, 0, 1, 11 15, A 8 8, 0, 0, 1, 7 14, A 4 4, 0, 0, 1, 7 8, A 4 4, 0, 0, 1, 7 6, A 4 4, 0, 0, 1, 8 5, A 4 4, 0, 0, 1, 10 7, A 6 6, 0, 0, 1, 15 7, A 4 4, 0, 0, 1, 17 5, A 4 4, 0, 0, 1, 18 6, A 6 6, 0, 0, 1, 18 8, A 4 4, 0, 0, 1, 18 14, A 8 8, 0, 0, 1, 14 15, A 4 4, 0, 0, 1, 16 19, L 16 21, A 2 2, 0, 0, 0, 17 22, A 12 12, 0, 0, 1, 8 22" stroke="transparent" fill={pallet.cat} strokeWidth="0" />
        <path d="M 9 19, A 3 3, 0, 0, 1, 6.5, 18, A 3 3, 0, 0, 0, 4, 16, A 1 1, 0, 0, 1, 4, 15.5, A 3 3, 0, 0, 1, 6.5, 16, A 2 2, 0, 0, 0, 10, 16.5, L 9 19" stroke="transparent" fill={pallet.cat} strokeWidth="0" />
      </g>
    );
  }
  public render() {
    const pallet: Pallet = {
      ring: this.props.pallet.ring || this.context.muiTheme.icon.color,
      cat: this.props.pallet.cat || this.context.muiTheme.icon.color,
    };
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default Github;