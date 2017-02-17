/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  stick: string;
  ring: string;
  minus: string;
}

class SearchMinus extends SvgIcon {
  public displayName: string = 'SearchMinus';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 21 23, A 1 1, 0, 0, 0, 23 21, L 17 15, L 15 17, L 21 23" stroke="transparent" fill={pallet.stick} strokeWidth="0" />
        <path d="M 5 5, A 1 1, 0, 0, 0, 17 17, A 1 1, 0, 0, 0, 5 5" stroke={pallet.ring} fill="transparent" strokeWidth="3" />
        <path d="M 5 11, L 17 11" stroke={pallet.minus} fill="transparent" strokeWidth="2" />
      </g>
    );
  }
  public render() {
    const pallet: Pallet = {
      stick: this.props.pallet.stick || this.context.muiTheme.icon.color,
      ring: this.props.pallet.ring || this.context.muiTheme.icon.color,
      minus: this.props.pallet.minus || this.context.muiTheme.icon.color,
    };
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default SearchMinus;