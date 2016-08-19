import React from 'react';

var FeedbackContainer = React.createClass({
  render: function () {
    
    if (this.props.correct === undefined) {
      return <div></div>;
    } else {
      var style = { left: this.props.feedbackPosition.x, top: this.props.feedbackPosition.y };
      var className = 'hotspot-feedback-text fade-in ';

      if(this.props.correct !== undefined){
        className += this.props.correct ? 'correct' : 'incorrect';
      }

      return <div 
        style={style}
        className={className}>{this.props.msg}</div>;
    }
  }
});

module.exports = FeedbackContainer;