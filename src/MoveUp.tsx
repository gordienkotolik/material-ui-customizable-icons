/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class MoveUp extends SvgIcon {
  public displayName: string = 'MoveUp';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 2 13, L 8 13, L 8 24, L 16 24, L 16 13, L 22 13, L 12 5, L 2 13" stroke={style.color} fill={style.fill} strokeWidth="0" />
        <path d="M 2 1, L 22 1" stroke={style.fill} fill="transparent" strokeWidth="3" />
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


export default MoveUp;