/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


class Hamburger extends SvgIcon {
  public displayName: string = 'Hamburger';
  public group(style: any): JSX.Element {
    return (
      <g>
        <path d="M 1 6, L 23 6" stroke={style.fill} fill="transparent" strokeWidth="3" />
        <path d="M 1 12, L 23 12" stroke={style.fill} fill="transparent" strokeWidth="3" />
        <path d="M 1 18, L 23 18" stroke={style.fill} fill="transparent" strokeWidth="3" />
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


export default Hamburger;