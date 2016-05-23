exports.createOutcome = function(question, response, settings){
  
  var correctResponse = question.correctResponse; 
  var xOk = response.x >= correctResponse.topLeft.x && response.x <= correctResponse.bottomRight.x;
  var yOk = response.y >= correctResponse.topLeft.y && response.y <= correctResponse.bottomRight.y;
  var correct = xOk && yOk;
  var feedback = question.model.feedback;
   
  return {
    correctness: correct ? 'correct' : 'incorrect',
    feedback: correct ? feedback.correct : feedback.incorrect
  };
}