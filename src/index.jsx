import React from 'react';
import HotspotFeedback from './hotspot-feedback.jsx';
import FeedbackContainer from './feedback-container.jsx';

var H5pImageHotspot = React.createClass({
  getInitialState: function () {
    return {};
  },
  onImageClick: function (mouseEvent) {
    if (this.props.disabled){
      return;
    }
    var x = mouseEvent.pageX - mouseEvent.currentTarget.offsetLeft;
    var y = mouseEvent.pageY - mouseEvent.currentTarget.offsetTop;
    var feedbackPosition = { x: x, y: y };
    this.props.session.response = { x: x, y: y };
    this.setState({ feedbackPosition: feedbackPosition });
  },
  render: function () {

    console.log('render:', this.props.model); 

    return <div className="h5p-image-hotspot-question">
      <div><a class="info-link" target="_blank" href="https://h5p.org/image-hotspot-question">port of h5p component</a></div>
      <div className="image-wrapper" onClick={this.onImageClick}>
        <img className="hotspot-image" src={this.props.model.src}></img>
        <HotspotFeedback 
          disabled={this.props.model.disabled} 
          correct={this.props.model.correct} 
          feedbackPosition={this.state.feedbackPosition}/>
      </div>
      <FeedbackContainer 
        correct={this.props.model.correct} 
        msg={this.props.model.feedback}/>
    </div>;
  }
});

module.exports = H5pImageHotspot;

