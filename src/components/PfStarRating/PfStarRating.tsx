import * as React from 'react';
import {PfIcon} from '../index'; 
import * as cx from "classnames";

interface Props {
  count: number;
  rating?: number;
  viewMode?: boolean;
}

interface State {
  local_rating: number;
  temp_rating: number;
  applyClicked: boolean;
}

export class PfStarRating extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      local_rating: 0,
      temp_rating: 0,
      applyClicked: false
    };
  }

  private handleApplyEvent() {
    this.setState({ applyClicked: true});
  }

  public render() {
    const stars = [];
    for(var i = 0; i < this.props.count; i++) {
      let klass = 'pf-rating__btn';
      
      if (this.state.local_rating >= i && this.state.local_rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <button
          className={cx('pf-button-icon', klass)}
          onClick={() => null}
          onMouseOver={() => null}
          onMouseOut={() => null}
          tabIndex={0}
          type="button"
          aria-pressed="false"
          disabled={this.state.applyClicked || this.props.viewMode}
        >
          <PfIcon icon="star" alt="rating star icon"/>
        </button>
      );
    }

    const modalBox = (
      <div className="pf-rating-modal">
        <span className="pf-rating-modal__text">Thanks for your rating!</span>
      </div>
    );

    const contentClass = cx({
      "pf-rating-content": true,
      "is-disabled": this.state.applyClicked
    });

    const PfStarRating = (
      <div className="pf-rating">
        {this.state.applyClicked && modalBox}
        <div className={contentClass}>
          <h3 className="pf-rating-content__title">Rate this product</h3>
          <div className="h-spacing">
            {stars}
          </div>
          <button
            className="pf-button"
            type="button"
            tabIndex={0}
            onClick={() => this.handleApplyEvent()}
            disabled={this.state.applyClicked}
          >
            Apply
          </button>
        </div>
      </div>
    );

    const PfStarRatingViewMode = (
      <div className="pf-rating-view-mode">
        <div className="l-grid l-grid--align-middle">
          <div className="l-grid__item">
            <h3 className="pf-rating-view-mode__title">Average rating</h3>
          </div>
          <div className="l-grid__item">
            {stars}
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {this.props.viewMode ? PfStarRatingViewMode : PfStarRating}
      </div>
    );
  }
}

