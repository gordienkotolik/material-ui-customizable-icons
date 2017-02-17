/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  circle: string;
  tick: string;
  crossing: string;
}

class Inactive extends SvgIcon {
  public displayName: string = 'Inactive';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <circle cx="12" cy="12" r="12" fill={pallet.circle}/>
        <path d="M 4 12 L 11 18" stroke={pallet.tick} fill="transparent" strokeWidth="3" />
        <path d="M 9 18 L 20 7" stroke={pallet.tick} fill="transparent" strokeWidth="3" />
        <path d="M 2 2 L 22 22" stroke={pallet.crossing} fill="transparent" strokeWidth="3" />
      </g>
    );
  }
  public render() {
    const pallet: Pallet = {
      circle: this.props.pallet.circle || this.context.muiTheme.icon.color,
      tick:this.props.pallet.tick || 'transparent',
      crossing: this.props.pallet.crossing || this.context.muiTheme.icon.color,
    };
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default Inactive;