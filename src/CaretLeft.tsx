/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class CaretLeft extends SvgIcon {
  public displayName: string = 'CaretLeft';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 23 12, L 13 3, A 2 2, 0, 0, 0, 11 4, L 11 22, A 2 2, 0, 0, 0, 13 23, L 23 14, A 2 2, 0, 0, 0, 23 12" stroke={style.color} fill={style.fill} strokeWidth="0" />
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


export default CaretLeft;