import * as React from "react";
import * as cx from "classnames";

// FIXME: Replace with inlineSVG
const star = require('../../assets/icons/ic_star.svg');

class Props {
  icon: string;
  alt: string;
  style?: string;
}

class State {
  iconType: string;
}

export class PfIcon extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      iconType: ""
    };
  }

  
  public render() {
    return (
      <img
        src={(this.props.icon === "star") && star} //NOTE: Quick hack to load star icon
        className={cx(this.props.style)}
        alt={this.props.alt} />
    );
  }
}
