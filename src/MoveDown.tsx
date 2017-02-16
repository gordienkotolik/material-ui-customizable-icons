/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class MoveDown extends SvgIcon {
  public displayName: string = 'MoveDown';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 2 11, L 8 11, L 8 0, L 16 0, L 16 11, L 22 11, L 12 19, L 2 11" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 2 23, L 22 23" stroke={style.fill} fill="transparent" strokeWidth="3" />
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


export default MoveDown;