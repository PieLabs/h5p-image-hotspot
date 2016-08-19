import React from 'react';

var HotspotFeedback = React.createClass({
  componentDidMount: function () {
    setTimeout(function () {
      var rect = this.node.getBoundingClientRect();
      var sizes = { w: rect.width, h: rect.height };
      this.setState({ elementSize: sizes });
    }.bind(this), 100);
  },
  render: function () {

    var classname = 'hotspot-feedback' + (this.props.feedbackPosition ? ' fade-in' : '');
    
    if (this.props.disabled) {
      classname += ' disabled';
    } 
    
    if (this.props.correct === true) {
      classname += ' correct';
    } else if (this.props.correct === false) {
      classname += ' incorrect';
    }

    var style = {};
    if (this.props.feedbackPosition && this.state.elementSize) {
      var x = this.props.feedbackPosition.x - (this.state.elementSize.w / 2);
      var y = this.props.feedbackPosition.y - (this.state.elementSize.h / 2);
      style = { left: x, top: y };
    }
    return <div ref={(ref) => this.node = ref} className={classname} style={style}></div>
  }
});

module.exports = HotspotFeedback;