import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const feedBackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <button
        className="ButtonRating"
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
      >
        {button}
      </button>
    );
  });
};

feedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default feedBackOptions;
