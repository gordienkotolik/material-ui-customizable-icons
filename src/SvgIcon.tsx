import * as React from 'react';
import EventHandler = React.EventHandler;

import {ObjectLiteral} from "../typings/common";


interface Props {
  className?: string;
  style?: ObjectLiteral;
  pallet?: any;
  viewBox?: string;
  transform?: string;
  onClick?: EventHandler<any>;
}

interface Context {
  muiTheme?: any;
}

class SvgIcon extends React.Component<Props, any> {
  public static defaultProps = {
    className: '',
    style: {},
    pallet: {},
    viewBox: '0 0 24 24',
    transform: '',
  };
  public context: Context;
  public static contextTypes = {
    muiTheme: React.PropTypes.object,
  };
  public styles = {
    display: 'inline-block',
    height: '24px',
    width: '24px',
    userSelect: 'none',
    cursor: 'inherit',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  };
  public svg(children: JSX.Element, className: string, style: ObjectLiteral, viewBox: string, transform: string) {
    return (
      <svg
        viewBox={viewBox}
        style={style}
        className={className}
        onClick={this.props.onClick}
      >
        <g transform={transform}>
          {children}
        </g>
      </svg>
    );
  }
}


export default SvgIcon;