/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ChevronUp extends SvgIcon {
  public displayName: string = 'ChevronUp';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 13 2 L 2 13" stroke={pallet.primary} fill="transparent" strokeWidth="4" />
        <path d="M 10 2 L 22 13" stroke={pallet.primary} fill="transparent" strokeWidth="4" />
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
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default ChevronUp;