/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class MoveRight extends SvgIcon {
  public displayName: string = 'MoveRight';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 13 2, L 13 8, L 0 8, L 0 16, L 13 16, L 13 22, L 19 12, L 13 2" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 23 0, L 23 24" stroke={style.fill} fill="transparent" strokeWidth="3" />
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


export default MoveRight;