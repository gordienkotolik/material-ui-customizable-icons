/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class MoveLeft extends SvgIcon {
  public displayName: string = 'MoveLeft';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 11 2, L 11 8, L 24 8, L 24 16, L 11 16, L 11 22, L 5 12, L 11 2" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 1 0, L 1 24" stroke={style.fill} fill="transparent" strokeWidth="3" />
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


export default MoveLeft;