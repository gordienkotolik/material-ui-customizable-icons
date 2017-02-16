/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class Delete extends SvgIcon {
  public displayName: string = 'Delete';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 4 8, L 4 21, A 2 2, 0, 0, 0, 6 23, L 19 23, A 2 2, 0, 0, 0, 21 21, L 21 8, L 4 8" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 8 11, L 17 20" stroke={style.color} fill="transparent" strokeWidth="3" />
        <path d="M 8 20, L 17 11" stroke={style.color} fill="transparent" strokeWidth="3" />
        <path d="M 2 4, L 2 6, L 23 6, L 23 4, L 18 4, L 16 2, L 9 2, L 7 4, L 2 4" stroke={style.color} fill={style.fill} strokeWidth="0" />
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


export default Delete;