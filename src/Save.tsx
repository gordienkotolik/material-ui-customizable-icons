/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class Save extends SvgIcon {
  public displayName: string = 'Save';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 2 10 L 11 18" stroke={pallet.primary} fill="transparent" strokeWidth="3" />
        <path d="M 9 18 L 22 5" stroke={pallet.primary} fill="transparent" strokeWidth="3" />
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


export default Save;