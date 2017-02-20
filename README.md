material-ui-customizable-icons
=======================

## [Material-UI Customizable Icons](https://gasite.in.ua/open-source/material-ui-customizable-icons/)

A set of minimalistic customizable material design SVG-icon components for React.


## Requirements

- [Node](https://nodejs.org) 7.5.0 or newer
- [Typescript](https://www.typescriptlang.org) 2.1.5 or newer
- [Babel](https://babeljs.io) 6.2.2 or newer


## Required Knowledge

I recommend that you get to know [React](http://facebook.github.io/react/) and [Material-UI](http://material-ui.com/).

## Installation
```sh
npm i material-ui-customizable-icons --save
```

## Usage
Once installed, just import and use the components:
```javascript
import React from `react`;
import Active from 'material-ui-customizable-icons/Active';

const className = 'custom-icon';
const viewBox = '0 0 48 48';
const transform = 'scale(2)';
const style = {
  width: '48px',
  height: '48px',
};
const pallet = {
  circle: 'rgba(169, 169, 169, 1)',
  tick: 'rgba(255, 255, 255, 1)',
};

const Example = () => (
  <Active
    className={className}
    style={style}
    className={className}
    transform={transform}
    pallet={pallet}
  />
);

export default Example;
```


#### Common Properties
| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| className | String | '' | Adds custom class to SVG container.|
| style | Object | {} | Adds custom inline styles to SVG container. |
| viewBox | String | '0 0 24 24' | Defines view-box attribute of SVG container.|
| transform | String | '0 0 24 24' | The transform property applies a 2D or 3D transformation to an element.|
| pallet | Object | {} | Component-specific colors pallet. |

#### Components list and their specific pallets:
| Component        | Preview           | Pallet properties to specify colors for |
| ------------- |-------------| -----| -------- |
| Active | ![Active Icon](svg/active.svg) | circle, tick |
| Inactive | No Image Yet | circle, tick, crossing |
| ChevronUp | No Image Yet | primary |
| ChevronDown | No Image Yet | primary |
| ChevronLeft | No Image Yet | primary |
| ChevronRight | No Image Yet | primary |
| CaretUp | No Image Yet | primary |
| CaretDown | No Image Yet | primary |
| CaretLeft | No Image Yet | primary |
| CaretRight | No Image Yet | primary |
| ViewArticles | No Image Yet | primary |
| ViewGrid | No Image Yet | primary |
| ViewHeadlines | No Image Yet | primary |
| ViewList | No Image Yet | primary |
| Hamburger | No Image Yet | primary |
| Edit | No Image Yet | primary |
| Delete | No Image Yet | cap, bucket, cross |
| MoveUp | No Image Yet | arrow, strip |
| MoveDown | No Image Yet | arrow, strip |
| MoveLeft | No Image Yet | arrow, strip |
| MoveRight | No Image Yet | arrow, strip |
| Search | No Image Yet | stick, ring |
| SearchPlus | No Image Yet | stick, ring, plus |
| SearchMinus | No Image Yet | stick, ring, minus |
| Github | No Image Yet | cat, ring |


## Contribute

1. [Submit an issue](https://github.com/gordienkotolik//material-ui-customizable-icons/issues)
2. Fork the repository
3. Create a dedicated branch (never ever work in `master`)
4. The first time, run command: `yarn` into the directory
5. Fix bugs or implement features


## License
This project is licensed under the terms of the
[MIT license](https://github.com/gordienkotolik//material-ui-customizable-icons/blob/master/LICENSE)