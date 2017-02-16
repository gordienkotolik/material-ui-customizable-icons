/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class SearchPlus extends SvgIcon {
  public displayName: string = 'SearchPlus';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 21 23, A 1 1, 0, 0, 0, 23 21, L 17 15, L 15 17, L 21 23" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 5 5, A 1 1, 0, 0, 0, 17 17, A 1 1, 0, 0, 0, 5 5" stroke={style.fill} fill="transparent" strokeWidth="3" />
        <path d="M 5 11, L 17 11" stroke={style.fill} fill="transparent" strokeWidth="2" />
        <path d="M 11 5, L 11 17" stroke={style.fill} fill="transparent" strokeWidth="2" />
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


export default SearchPlus;