import React, { useState } from 'react';
import Answer from './Answer.jsx';

const QuestionItem = (props) => {

  const [state, setState] = useState({
    length: 2,
    helpfulNum: props.question.question_helpfulness,
    vote: false,
  });

  const findSeller = (answers) => {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].answerer_name === 'Seller') {
        let pop = answers.splice(i, 1);
        answers.unshift(pop);
      }
    }
  }

  const helpful = () => {
    // update the data in the app
    if (state.vote === false) {
      let voted = props.question.question_helpfulness += 1;
      setState({...state, helpfulNum: voted, vote: true});

      // then send the request to update the API

    } else {
      console.log('you voted');
    }

    // then send the request to update the API
  }

  const handleMoreAnswers = () => {
    setState({ ...state, length: state.length + 2 })
  };


  let answers = Object.values(props.question.answers);
  console.log(answers)

  //sort the answers by helpfulness
  const sortAnswers = (answers) => {
    let compare = (a, b) => {
      let voteA = a.helpfulness;
      let voteB = b.helpfulness;
      let comparision = 0;

      if (voteA < voteB) {
        comparision = 1;
      } else {
        comparision = -1;
      }

      return comparision;
    }
    answers.sort(compare);
  }

  sortAnswers(answers);
  // after sorting see if seller is asnwering



  if (answers.length > 2) {
    //slice the array to the correct length
    answers = answers.slice(0, state.length);

    return (
      <div>
        <p>
          Q: {props.question.question_body}
          <span>helpful? </span> <span onClick={helpful}> Yes ({state.helpfulNum})</span>  |
          <span>Add answer</span>
        </p>
        {answers.map((answer, index) => <Answer key={index} answer={answer} />)}
        <span onClick={handleMoreAnswers}>Load more answers</span>
      </div>

    )
  } else {
    return (
      <div>
        <p>
          Q: {props.question.question_body}
          <span>helpful? </span> <span onClick={helpful}> Yes ({state.helpfulNum})</span>  |
          <span>Add answer</span>
        </p>
        {answers.map((answer, index) => <Answer key={index} answer={answer} />)}

      </div>

    )
  }

}

export default QuestionItem;