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
  isApplied: boolean;
}

// Mock data
const ratingObj = [
  {id: 1, iconType: 'star', label: 'Rating Score One button'},
  {id: 2, iconType: 'star', label: 'Rating Score Two button'},
  {id: 3, iconType: 'star', label: 'Rating Score Three button'},
  {id: 4, iconType: 'star', label: 'Rating Score Four button'},
  {id: 5, iconType: 'star', label: 'Rating Score Five button'},
  {id: 6, iconType: 'star', label: 'Rating Score Six button'},
  {id: 7, iconType: 'star', label: 'Rating Score Seven button'},
  {id: 8, iconType: 'star', label: 'Rating Score Eight button'},
  {id: 9, iconType: 'star', label: 'Rating Score Nine button'},
  {id: 10, iconType: 'star', label: 'Rating Score Ten button'}
];

export class PfRating extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      storedRating: this.props.rating || 0,
      tempRating: 0,
      isApplied: false
    };
  }

  public render() {
    // for-loop approach
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
          onClick={() => this.setState({ storedRating: i })}
          onMouseOver={() => this.setState({ tempRating: i })}
          onMouseOut={() => this.setState({ tempRating: this.state.storedRating })}
          disabled={this.state.isApplied || this.props.readOnly}
          aria-label={`Rating_button_${i}`}
          aria-disabled={this.state.isApplied || this.props.readOnly}
        >
          <PfIcon id="star" label={`rating ${i}`} />
        </button>
      );
    }
    */

    // Map with mockdata approach
    const starsButtonGroup = ratingObj.map((item, i) => {
        i += 1; // NOTE: Forcing INDEX to be started from 1 instead 0.

        if (this.props.count < i) {
          return false;
        }

        let starButtonClass;
        if ((this.state.tempRating >= i) || this.state.storedRating >= i) {
          starButtonClass = 'is-selected';
        }

        return (
          <button
            key={`id_rating_${item.id}`}
            type="button"
            tabIndex={0}
            className={cx('pf-button-icon pf-rating__button', starButtonClass)}
            onClick={() => this.setState({ storedRating: i })}
            onMouseOver={() => this.setState({ tempRating: i })}
            onMouseOut={() => this.setState({ tempRating: this.state.storedRating })}
            disabled={this.state.isApplied || this.props.readOnly}
            aria-label={item.label}
            aria-disabled={this.state.isApplied || this.props.readOnly}
          >
            <PfIcon id={item.iconType} />
          </button>
        );
      }
    );

    const modalBox = (
      <div className="pf-rating-modal">
        <span className="pf-rating-modal__text">Thanks for your rating!</span>
      </div>
    );

    const contentClass = cx({
      'pf-rating-content': true,
      'is-applied': this.state.isApplied
    });

    const renderRating = (
      <div className="pf-rating">
        {this.state.isApplied && modalBox}
        <div className={contentClass}>
          <h3 className="pf-rating-content__title">Rate this product</h3>
          <div className="h-spacing">
            {starsButtonGroup}
          </div>
          <button
            className="pf-button"
            type="button"
            tabIndex={0}
            onClick={() => this.setState({ isApplied: true })}
            disabled={this.state.isApplied}
            aria-label="Rating apply button"
            aria-disabled={this.state.isApplied}
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
