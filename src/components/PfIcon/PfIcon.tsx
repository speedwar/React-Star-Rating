import * as React from 'react';

class Props {
  id: string;
  label?: string;
  style?: string;
  hasAriaHidden?: boolean;
}

export class PfIcon extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public static defaultProps: Partial<Props> = {
      hasAriaHidden: true,
  };

  public render() {
    /* 
     * TODO: Use ReactInlineSVG module to load SVGs
     * Directly imported from sketch
     */
    const starSVG = (
      <svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={this.props.label}
        aria-hidden={this.props.hasAriaHidden}
      >
        <title>{this.props.label}</title>
        <path
          d="M13.79 20.25l-8.523 4.172 1.628-8.836L0 9.328 9.529 8.04 13.79 0l4.262 8.04 9.529 1.288-6.896 6.258 1.628 8.836z"
          fill="#E3E6E9"
          fillRule="evenodd"
        />
      </svg>
    );

    return (
      <span>
        {this.props.id === 'star' && starSVG}
      </span>
    );
  }
}