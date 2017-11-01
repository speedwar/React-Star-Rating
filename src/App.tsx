import * as React from 'react';
import { PfRating } from './components/index';

interface Props {
}

export default class App extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="app-demo">
        <div className="app-demo-container">
          <PfRating count={5} />
          <div className="h-spacing-large" />
          <PfRating count={5} rating={2} readOnly={true} />
        </div>
      </div>
    );
  }
}
