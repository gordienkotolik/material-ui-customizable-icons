/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  arrow: string;
  strip: string;
}

class MoveUp extends SvgIcon {
  public displayName: string = 'MoveUp';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 13, L 8 13, L 8 24, L 16 24, L 16 13, L 22 13, L 12 5, L 2 13" stroke="transparent" fill={pallet.arrow} strokeWidth="0" />
        <path d="M 2 1, L 22 1" stroke={pallet.strip} fill="transparent" strokeWidth="3" />
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


export default MoveUp;