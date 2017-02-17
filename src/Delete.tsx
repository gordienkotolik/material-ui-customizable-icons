/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  cap: string;
  bucket: string;
  cross: string;
}

class Delete extends SvgIcon {
  public displayName: string = 'Delete';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 4, L 2 6, L 23 6, L 23 4, L 18 4, L 16 2, L 9 2, L 7 4, L 2 4" stroke="transparent" fill={pallet.cap} strokeWidth="0" />
        <path d="M 4 8, L 4 21, A 2 2, 0, 0, 0, 6 23, L 19 23, A 2 2, 0, 0, 0, 21 21, L 21 8, L 4 8" stroke="transparent" fill={pallet.bucket} strokeWidth="0" />
        <path d="M 8 11, L 17 20" stroke={pallet.cross} fill="transparent" strokeWidth="3" />
        <path d="M 8 20, L 17 11" stroke={pallet.cross} fill="transparent" strokeWidth="3" />
      </g>
    );
  }
  public render() {
    const pallet: Pallet = {
      cap: this.props.pallet.cap || this.context.muiTheme.icon.color,
      bucket: this.props.pallet.bucket || this.context.muiTheme.icon.color,
      cross:this.props.pallet.cross || 'transparent',
    };
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default Delete;