import * as React from 'react';
import {PfStarRating} from './components/index';

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
          <PfStarRating count={5} />
          <br />
          <PfStarRating count={5} viewMode={true} />
        </div>
      </div>
    );
  }
}

