/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class ChevronUp extends SvgIcon {
  public displayName: string = 'ChevronUp';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 13 2 L 2 13" stroke={style.fill} fill="transparent" strokeWidth="4" />
        <path d="M 10 2 L 22 13" stroke={style.fill} fill="transparent" strokeWidth="4" />
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


export default ChevronUp;