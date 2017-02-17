/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  arrow: string;
  strip: string;
}

class MoveLeft extends SvgIcon {
  public displayName: string = 'MoveLeft';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 11 2, L 11 8, L 24 8, L 24 16, L 11 16, L 11 22, L 5 12, L 11 2" stroke="transparent" fill={pallet.arrow} strokeWidth="0" />
        <path d="M 1 0, L 1 24" stroke={pallet.strip} fill="transparent" strokeWidth="3" />
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


export default MoveLeft;