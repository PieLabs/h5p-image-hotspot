(function () {

  var HotspotFeedback = React.createClass({
    displayName: 'HotspotFeedback',

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
        console.log('elementSize', this.state.elementSize);
        var x = this.props.feedbackPosition.x - this.state.elementSize.w / 2;
        var y = this.props.feedbackPosition.y - this.state.elementSize.h / 2;
        console.log('x and y', x, y);
        style = { left: x, top: y };
      }
      return React.createElement('div', { ref: ref => this.node = ref, className: classname, style: style });
    }
  });

  var FeedbackContainer = React.createClass({
    displayName: 'FeedbackContainer',

    render: function () {
      if (this.props.correct === undefined) {
        return React.createElement('div', null);
      } else {
        return React.createElement(
          'div',
          { className: 'hotspot-feedback-text' },
          this.props.msg
        );
      }
    }
  });

  var H5pImageHotspot = React.createClass({
    displayName: 'H5pImageHotspot',

    getInitialState: function () {
      return {};
    },
    onImageClick: function (mouseEvent) {
      if (this.props.env.mode === 'gather') {
        console.log('onImageClick', mouseEvent);
        var x = mouseEvent.pageX - mouseEvent.currentTarget.offsetLeft;
        var y = mouseEvent.pageY - mouseEvent.currentTarget.offsetTop;
        var feedbackPosition = { x: x, y: y };
        this.props.session.response = { x: x, y: y };
        this.setState({ feedbackPosition: feedbackPosition });
      }
    },
    render: function () {
      var mode = this.props.env.mode;
      var disabled = this.props.env.mode !== 'gather';
      var correct;
      var msg;
      if (mode === 'evaluate') {
        correct = this.props.outcome.correctness ? this.props.outcome.correctness === 'correct' : undefined;
        msg = this.props.outcome.feedback;
      }

      return React.createElement(
        'div',
        { className: 'h5p-image-hotspot-question' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'a',
            { 'class': 'info-link', target: '_blank', href: 'https://h5p.org/image-hotspot-question' },
            'port of h5p component'
          )
        ),
        React.createElement(
          'div',
          { className: 'image-wrapper', onClick: this.onImageClick },
          React.createElement('img', { className: 'hotspot-image', src: this.props.model.src }),
          React.createElement(HotspotFeedback, { disabled: disabled, correct: correct, feedbackPosition: this.state.feedbackPosition })
        ),
        React.createElement(FeedbackContainer, { correct: correct, msg: msg })
      );
    }
  });

  pie.framework('react').register('h5p-image-hotspot', H5pImageHotspot);
})();
