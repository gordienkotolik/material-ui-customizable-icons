/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class ViewHeadlines extends SvgIcon {
  public displayName: string = 'ViewHeadlines';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 1 1, L 23 1, L 23 5, L 1 5, L 1 1" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 1 7, L 23 7, L 23 11, L 1 11, L 1 7" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 1 13, L 23 13, L 23 17, L 1 17, L 1 13" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 1 19, L 23 19, L 23 23, L 1 23, L 1 19" stroke={style.color} fill={style.fill} strokeWidth="0" />
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


export default ViewHeadlines;