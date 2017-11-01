import * as React from 'react';
import * as cx from 'classnames';
import { PfIcon } from '../index'; 

class Props {
  count: number;
  rating?: number;
  readOnly?: boolean;
}

class State {
  storedRating: number;
  tempRating: number;
  applyClicked: boolean;
}

// Mock data
const ratingObj = [
  {id: 1, iconType: 'star', label: 'Rating Score One button'},
  {id: 2, iconType: 'star', label: 'Rating Score Two button'},
  {id: 3, iconType: 'star', label: 'Rating Score Three button'},
  {id: 4, iconType: 'star', label: 'Rating Score Four button'},
  {id: 5, iconType: 'star', label: 'Rating Score Five button'}
];

export class PfRating extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      storedRating: this.props.rating || NaN,
      tempRating: NaN,
      applyClicked: false
    };
  }

  handleApplyEvent() {
    this.setState({ applyClicked: true });
  }

  handleStarEvent(i: number) {
    this.setState({ storedRating: this.state.tempRating });
  }

  onStarMouseOver(i: number) {
    this.setState({ tempRating: i });
  }

  onStarMouseOut(i: number) {
    this.setState({ tempRating: this.state.storedRating });
  }

  public render() {
    // for loop approach
    /* 
    const stars = [];
    const count = this.props.count;
    let i;

    for (i = 0; i <= count; i++) {
      let buttonClass;
      if ((this.state.tempRating >= i && this.state.tempRating != null) || this.state.storedRating >= i) {
        buttonClass = 'is-selected';
      }

      stars.push(
        <button
          key={`id_rating_button_${i}`}
          type="button"
          tabIndex={0}
          className={cx('pf-button-icon pf-rating__button', buttonClass)}
          onClick={this.handleStarEvent.bind(this, i)}
          onMouseOver={this.onStarMouseOver.bind(this, i)}
          onMouseOut={this.onStarMouseOut.bind(this, i)}
          onFocus={this.onStarMouseOver.bind(this, i)}
          onBlur={this.onStarMouseOut.bind(this, i)}
          disabled={this.state.applyClicked || this.props.readOnly}
          aria-label={`Rating_button_${i}`}
          aria-disabled={this.state.applyClicked || this.props.readOnly}
        >
          <PfIcon id="star" label={`rating ${i}`} />
        </button>
      );
    }
    */

    // Map with mockdata approach
    const starsButtonGroup = ratingObj.map((item, i) => {
        let starButtonClass;
        if ((this.state.tempRating >= i && this.state.tempRating != null) || this.state.storedRating >= i) {
          starButtonClass = 'is-selected';
        }

        return (
          <button
            key={`id_rating_${item.id}`}
            type="button"
            tabIndex={0}
            className={cx('pf-button-icon pf-rating__button', starButtonClass)}
            onClick={this.handleStarEvent.bind(this, i)}
            onMouseOver={this.onStarMouseOver.bind(this, i)}
            onMouseOut={this.onStarMouseOut.bind(this, i)}
            onFocus={this.onStarMouseOver.bind(this, i)}
            onBlur={this.onStarMouseOut.bind(this, i)}
            disabled={this.state.applyClicked || this.props.readOnly}
            aria-label={item.label}
            aria-disabled={this.state.applyClicked || this.props.readOnly}
          >
            <PfIcon id={item.iconType} label={item.label}/>
          </button>
        )
      }
    );

    const modalBox = (
      <div className="pf-rating-modal">
        <span className="pf-rating-modal__text">Thanks for your rating!</span>
      </div>
    );

    const contentClass = cx({
      'pf-rating-content': true,
      'is-disabled': this.state.applyClicked
    });

    const renderRating = (
      <div className="pf-rating">
        {this.state.applyClicked && modalBox}
        <div className={contentClass}>
          <h3 className="pf-rating-content__title">Rate this product</h3>
          <div className="h-spacing">
            {starsButtonGroup}
          </div>
          <button
            className="pf-button"
            type="button"
            tabIndex={0}
            onClick={() => this.handleApplyEvent()}
            disabled={this.state.applyClicked}
            aria-label="Rating apply button"
            aria-disabled={this.state.applyClicked}
          >
            Apply
          </button>
        </div>
      </div>
    );

    const renderRatingReadOnly = (
      <div className="pf-rating-read-only">
        <div className="l-grid l-grid--align-middle">
          <div className="l-grid__item">
            <h3 className="pf-rating-read-only__title">Average rating</h3>
          </div>
          <div className="l-grid__item">
            {starsButtonGroup}
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {this.props.readOnly ? renderRatingReadOnly : renderRating}
      </div>
    );
  }
}
