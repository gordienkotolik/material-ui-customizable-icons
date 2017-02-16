/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class Edit extends SvgIcon {
  public displayName: string = 'Edit';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 1 23, L 5 23, L 18 10, L 14 6, L 1 19" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 15 5, L 19 9, L 21 7, A 2 2, 0, 0, 0, 22 5, L 19 2, A 2 2, 0, 0, 0, 18 2, L 15 5" stroke={style.color} fill={style.fill} strokeWidth="0" />
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


export default Edit;