const _ = require('lodash');

exports.model = function(question, session, env){

  let out = _.assign({}, question.model); 
  delete out.feedback;
  out.disabled = env.mode !== 'gather';

  if(env.mode === 'evaluate'){
    let response = session.response;
    var correctResponse = question.correctResponse; 
    var xOk = response.x >= correctResponse.topLeft.x && response.x <= correctResponse.bottomRight.x;
    var yOk = response.y >= correctResponse.topLeft.y && response.y <= correctResponse.bottomRight.y;
    out.correct = xOk && yOk;
    out.feedback = question.model.feedback[out.correct ? 'correct' : 'incorrect'];
  }
  return out;
}