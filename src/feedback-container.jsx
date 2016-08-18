import React from 'react';

var FeedbackContainer = React.createClass({
  render: function () {
    if (this.props.correct === undefined) {
      return <div></div>;
    } else {
      return <div className="hotspot-feedback-text">{this.props.msg}</div>;
    }
  }
});

module.exports = FeedbackContainer;