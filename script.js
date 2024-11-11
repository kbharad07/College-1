const topics = {
    topic1: {
      notes: "This is Topic 1: Introduction to HTML. It includes basic tags and structure.",
      quiz: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which tag is used for the largest heading?", options: ["<h1>", "<h6>"], answer: "<h1>" }
      ]
    },
    topic2: {
      notes: "This is Topic 2: Introduction to CSS. It covers styling basics.",
      quiz: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "Which property is used to change background color?", options: ["color", "background-color"], answer: "background-color" }
      ]
    },
    topic3: {
      notes: "This is Topic 3: Introduction to JavaScript. Learn scripting basics.",
      quiz: [
        { question: "Which of the following is a JavaScript framework?", options: ["React", "CSS"], answer: "React" },
        { question: "What is the correct syntax for 'if' in JavaScript?", options: ["if(condition)", "if condition"], answer: "if(condition)" }
      ]
    }
  };
  
  function loadContent(topicKey) {
    const topic = topics[topicKey];
    const content = document.getElementById('content');
    
    if (topic) {
      content.innerHTML = `
        <h2>${topicKey.toUpperCase()}</h2>
        <p>${topic.notes}</p>
        <button onclick="startQuiz('${topicKey}')">Start Quiz</button>
      `;
    } else {
      content.innerHTML = <p>Topic not found!</p>;
    }
  }
  
  function startQuiz(topicKey) {
    const quizData = topics[topicKey].quiz;
    const content = document.getElementById('content');
    
    let quizHtml = '<form id="quiz-form">';
    quizData.forEach((q, i) => {
      quizHtml += `
        <div>
          <p>${i + 1}. ${q.question}</p>
          ${q.options.map((opt) => <label><input type="radio" name="q${i}" value="${opt}">${opt}</label>).join('<br>')}
        </div><br>
      `;
    });
    
    quizHtml += `
      <button type="button" onclick="submitQuiz('${topicKey}')">Submit Quiz</button>
      <button type="button" onclick="showSolutions('${topicKey}')">Give Up</button>
    </form>
    <div id="results"></div>
    `;
    content.innerHTML = quizHtml;
  }
  
  function submitQuiz(topicKey) {
    const quizData = topics[topicKey].quiz;
    const form = document.getElementById('quiz-form');
    const results = document.getElementById('results');
    
    let score = 0;
    quizData.forEach((q, i) => {
      const userAnswer = form[q${i}]?.value;
      if (userAnswer === q.answer) score++;
    });
  
    results.innerHTML = <p>You scored ${score} out of ${quizData.length}.</p>;
    if (score >= 1) {
      results.innerHTML += <p>You passed! Proceed to the next topic.</p>;
    } else {
      results.innerHTML += <p>Try again or check solutions.</p>;
    }
  }
  
  function showSolutions(topicKey) {
    const quizData = topics[topicKey].quiz;
    const results = document.getElementById('results');
    
    results.innerHTML = <h3>Solutions:</h3>;
    quizData.forEach((q, i) => {
      results.innerHTML += <p>${i + 1}. ${q.question} <strong>Answer:</strong> ${q.answer}</p>;
    });
  }