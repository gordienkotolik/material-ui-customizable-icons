/* tslint:disable:max-classes-per-file */
import EventHandler = React.EventHandler;

interface ObjectLiteral {
  [key: string]: any;
}
declare module "material-ui-customizable-icons" {
  export import SvgIcon = __Icons.SvgIcon;
  export import Active = __Icons.Active;
  export import Inactive = __Icons.Inactive;
  export import ChevronUp = __Icons.ChevronUp;
  export import ChevronDown = __Icons.ChevronDown;
  export import ChevronLeft = __Icons.ChevronLeft;
  export import ChevronRight = __Icons.ChevronRight;
  export import ArrowUp = __Icons.ArrowUp;
  export import ArrowDown = __Icons.ArrowDown;
  export import ArrowLeft = __Icons.ArrowLeft;
  export import ArrowRight = __Icons.ArrowRight;
  export import CaretUp = __Icons.CaretUp;
  export import CaretDown = __Icons.CaretDown;
  export import CaretLeft = __Icons.CaretLeft;
  export import CaretRight = __Icons.CaretRight;
  export import ViewArticles = __Icons.ViewArticles;
  export import ViewGrid = __Icons.ViewGrid;
  export import ViewHeadlines = __Icons.ViewHeadlines;
  export import ViewList = __Icons.ViewList;
  export import Hamburger = __Icons.Hamburger;
  export import Edit = __Icons.Edit;
  export import Delete = __Icons.Delete;
  export import MoveUp = __Icons.MoveUp;
  export import MoveDown = __Icons.MoveDown;
  export import MoveLeft = __Icons.MoveLeft;
  export import MoveRight = __Icons.MoveRight;
  export import Search = __Icons.Search;
  export import SearchPlus = __Icons.SearchPlus;
  export import SearchMinus = __Icons.SearchMinus;
  export import Github = __Icons.Github;
  export import Clear = __Icons.Clear;
  export import Save = __Icons.Save;
  export default {
    Active,
    Inactive,
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    CaretUp,
    CaretDown,
    CaretLeft,
    CaretRight,
    ViewArticles,
    ViewGrid,
    ViewHeadlines,
    ViewList,
    Hamburger,
    Edit,
    Delete,
    MoveUp,
    MoveDown,
    MoveLeft,
    MoveRight,
    Search,
    SearchPlus,
    SearchMinus,
    Github,
    Clear,
    Save,
  } as ObjectLiteral;
}

declare namespace __Icons {
  interface SvgIconProps {
    className?: string;
    style?: ObjectLiteral;
    pallet?: any;
    viewBox?: string;
    transform?: string;
    onClick?: EventHandler<any>;
  }
  interface SvgIconContext {
    muiTheme?: any;
  }
  export class SvgIcon extends React.Component<SvgIconProps, SvgIconContext> {
    public static defaultProps: SvgIconProps;
    public static context: SvgIconContext;
    public static contextTypes: any;
    public styles: any;
    public svg: () => React.ReactElement<any>;
  }
  export class Active extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Inactive extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ChevronUp extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ChevronDown extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ChevronLeft extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ChevronRight extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ArrowUp extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ArrowDown extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ArrowLeft extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ArrowRight extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class CaretUp extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class CaretDown extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class CaretLeft extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class CaretRight extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ViewArticles extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ViewGrid extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ViewHeadlines extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class ViewList extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Hamburger extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Edit extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Delete extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class MoveUp extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class MoveDown extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class MoveLeft extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class MoveRight extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Search extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class SearchPlus extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class SearchMinus extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Github extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Clear extends SvgIcon {
    public group: () => JSX.Element;
  }
  export class Save extends SvgIcon {
    public group: () => JSX.Element;
  }
}

declare module 'material-ui-customizable-icons/Active' {
  export import Active = __Icons.Active;
  export default Active;
}

declare module 'material-ui-customizable-icons/Inactive' {
  export import Inactive = __Icons.Inactive;
  export default Inactive;
}

declare module 'material-ui-customizable-icons/ChevronUp' {
  export import ChevronUp = __Icons.ChevronUp;
  export default ChevronUp;
}

declare module 'material-ui-customizable-icons/ChevronDown' {
  export import ChevronDown = __Icons.ChevronDown;
  export default ChevronDown;
}

declare module 'material-ui-customizable-icons/ChevronLeft' {
  export import ChevronLeft = __Icons.ChevronLeft;
  export default ChevronLeft;
}

declare module 'material-ui-customizable-icons/ChevronRight' {
  export import ChevronRight = __Icons.ChevronRight;
  export default ChevronRight;
}

declare module 'material-ui-customizable-icons/ArrowUp' {
  export import ArrowUp = __Icons.ArrowUp;
  export default ArrowUp;
}

declare module 'material-ui-customizable-icons/ArrowDown' {
  export import ArrowDown = __Icons.ArrowDown;
  export default ArrowDown;
}

declare module 'material-ui-customizable-icons/ArrowLeft' {
  export import ArrowLeft = __Icons.ArrowLeft;
  export default ArrowLeft;
}

declare module 'material-ui-customizable-icons/ArrowRight' {
  export import ArrowRight = __Icons.ArrowRight;
  export default ArrowRight;
}

declare module 'material-ui-customizable-icons/CaretUp' {
  export import CaretUp = __Icons.CaretUp;
  export default CaretUp;
}

declare module 'material-ui-customizable-icons/CaretDown' {
  export import CaretDown = __Icons.CaretDown;
  export default CaretDown;
}

declare module 'material-ui-customizable-icons/CaretLeft' {
  export import CaretLeft = __Icons.CaretLeft;
  export default CaretLeft;
}

declare module 'material-ui-customizable-icons/CaretRight' {
  export import CaretRight = __Icons.CaretRight;
  export default CaretRight;
}

declare module 'material-ui-customizable-icons/ViewArticles' {
  export import ViewArticles = __Icons.ViewArticles;
  export default ViewArticles;
}

declare module 'material-ui-customizable-icons/ViewGrid' {
  export import ViewGrid = __Icons.ViewGrid;
  export default ViewGrid;
}

declare module 'material-ui-customizable-icons/ViewHeadlines' {
  export import ViewHeadlines = __Icons.ViewHeadlines;
  export default ViewHeadlines;
}

declare module 'material-ui-customizable-icons/ViewList' {
  export import ViewList = __Icons.ViewList;
  export default ViewList;
}

declare module 'material-ui-customizable-icons/Hamburger' {
  export import Hamburger = __Icons.Hamburger;
  export default Hamburger;
}

declare module 'material-ui-customizable-icons/Edit' {
  export import Edit = __Icons.Edit;
  export default Edit;
}

declare module 'material-ui-customizable-icons/Delete' {
  export import Delete = __Icons.Delete;
  export default Delete;
}

declare module 'material-ui-customizable-icons/MoveUp' {
  export import MoveUp = __Icons.MoveUp;
  export default MoveUp;
}

declare module 'material-ui-customizable-icons/MoveDown' {
  export import MoveDown = __Icons.MoveDown;
  export default MoveDown;
}

declare module 'material-ui-customizable-icons/MoveLeft' {
  export import MoveLeft = __Icons.MoveLeft;
  export default MoveLeft;
}

declare module 'material-ui-customizable-icons/MoveRight' {
  export import MoveRight = __Icons.MoveRight;
  export default MoveRight;
}

declare module 'material-ui-customizable-icons/Search' {
  export import Search = __Icons.Search;
  export default Search;
}

declare module 'material-ui-customizable-icons/SearchPlus' {
  export import SearchPlus = __Icons.SearchPlus;
  export default SearchPlus;
}

declare module 'material-ui-customizable-icons/SearchMinus' {
  export import SearchMinus = __Icons.SearchMinus;
  export default SearchMinus;
}

declare module 'material-ui-customizable-icons/Github' {
  export import Github = __Icons.Github;
  export default Github;
}

declare module 'material-ui-customizable-icons/Clear' {
  export import Clear = __Icons.Clear;
  export default Clear;
}

declare module 'material-ui-customizable-icons/Save' {
  export import Save = __Icons.Save;
  export default Save;
}