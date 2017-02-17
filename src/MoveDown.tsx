/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  arrow: string;
  strip: string;
}

class MoveDown extends SvgIcon {
  public displayName: string = 'MoveDown';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 11, L 8 11, L 8 0, L 16 0, L 16 11, L 22 11, L 12 19, L 2 11" stroke="transparent" fill={pallet.arrow} strokeWidth="0" />
        <path d="M 2 23, L 22 23" stroke={pallet.strip} fill="transparent" strokeWidth="3" />
      </g>
    );
  }
  public render() {
    const pallet: Pallet = {
      arrow: this.props.pallet.arrow || this.context.muiTheme.icon.color,
      strip: this.props.pallet.strip || this.context.muiTheme.icon.color,
    };
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default MoveDown;