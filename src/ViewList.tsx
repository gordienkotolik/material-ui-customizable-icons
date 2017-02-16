/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class ViewList extends SvgIcon {
  public displayName: string = 'ViewList';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 1 1, L 7 1, L 7 7, L 1 7, L 1 1" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 9 1, L 23 1, L 23 7, L 9 7, L 9 1" stroke={style.color} fill={style.fill} strokeWidth="0" />

        <path d="M 1 9, L 7 9, L 7 15, L 1 15, L 1 9" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 9 9, L 23 9, L 23 15, L 9 15, L 9 9" stroke={style.color} fill={style.fill} strokeWidth="0" />

        <path d="M 1 17, L 7 17, L 7 23, L 1 23, L 1 17" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 9 17, L 23 17, L 23 23, L 9 23, L 9 17" stroke={style.color} fill={style.fill} strokeWidth="0" />
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


export default ViewList;