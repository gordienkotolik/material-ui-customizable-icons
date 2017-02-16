/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class ChevronDown extends SvgIcon {
  public displayName: string = 'ChevronDown';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 2 2 L 13 13" stroke={style.fill} fill="transparent" strokeWidth="4" />
        <path d="M 10 13 L 22 2" stroke={style.fill} fill="transparent" strokeWidth="4" />
      </g>
    );
  }
  public render() {
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...{fill: this.context.muiTheme.icon.color},
      ...this.props.style,
    };
    return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default ChevronDown;