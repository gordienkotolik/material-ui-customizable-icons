/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class CaretRight extends SvgIcon {
  public displayName: string = 'CaretRight';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 2 12, L 12 3, A 2 2, 0, 0, 1, 14 4, L 14 22, A 2 2, 0, 0, 1, 12 23, L 2 14, A 2 2, 0, 0, 1, 2 12" stroke={style.color} fill={style.fill} strokeWidth="0" />
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


export default CaretRight;