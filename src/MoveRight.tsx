/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  arrow: string;
  strip: string;
}

class MoveRight extends SvgIcon {
  public displayName: string = 'MoveRight';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 13 2, L 13 8, L 0 8, L 0 16, L 13 16, L 13 22, L 19 12, L 13 2" stroke="transparent" fill={pallet.arrow} strokeWidth="0" />
        <path d="M 23 0, L 23 24" stroke={pallet.strip} fill="transparent" strokeWidth="3" />
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


export default MoveRight;