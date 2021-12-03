let questions = [
    {
      numb: 1,
      question: "Why we use shorcut key F12 ?",
      answer: "For Save an exsisting file on new location",
      options: [
        "For Quit Word application",
        "For Change case",
        "For Save an exsisting file on new location",
        "For Make a New File"
      ]
    },
    {
      numb: 2,
      question: "In which tab we can find Footnote option?",
      answer: "Refrences",
      options: [
        "Refrences",
        "Insert",
        "Mailing",
        "Veiw"
      ]
    },
    {
      numb: 3,
      question: "What is run command to launch word application ? ",
      answer: "Winword",
      options: [
        "1 August",
        "11 August",
        "19 September",
        "None of the above"
      ]
    },
    {
      numb: 4,
      question: "To move data from one part of the document to another, following is used",
      answer: "Cut and Paste",
      options: [
        "Cut and Delete",
        "Copy and Paste",
        "Cut and Paste",
        "Copy and undo"
      ]
    },
    {
      numb: 5,
      question: "Which is not in MS word? ? ",
      answer: "Magic Tool",
      options: [
        "Italic",
        "Bold",
        "Magic Tool",
        "Font"
      ]
    },
    {
      numb: 6,
      question: "What is the blank space outside the printing area on a page?",
      answer: "Margin",
      options: ["Clipart", "Margin", "Header", "Footer"]
    },
    {
      numb: 7,
      question: "Which of the following software is used for making CVs / Letters ?",
      answer: "Microsoft Word",
      options: ["Java", "Microsoft Excel", "Microsoft PowerPoint",
       "Microsoft Word"]
    },
    {
      numb: 8,
      question: "Press ____ to open the help window in MS word document. ",
      answer: "F1",
      options: ["F8", "F5", "F1", "F3"]
    },
    {
      numb: 9,
      question: "The name of a word document displays in ____",
      answer: "Program Bar",
      options: [
        "Ribbion",
        "Status Bar",
        "Program Bar",
        "Tool Bar"
      ]
    },
    {
      numb: 10,
      question: "The center the selected text, the shortcut key is",
      answer: "Ctrl + E",
      options: ["Ctrl + C", "Ctrl + D", "Ctrl + E", "Ctrl + G"]
    },
    {
      numb: 11,
      question: "A major step before taking print of the document is",
      answer: "To see print preview of the document",
      options: ["To set paper setting", "To save the document", "To see print preview of the document", "Both A & C"]
    },
    {
      numb: 12,
      question: "Portrait and Landscape are",
      answer: "Page Orientation",
      options: ["Page Layout", "Paper Size", "Page Orientation", "All of above"]
    },
    {
      numb: 13,
      question: "	The process of removing unwanted part of an image is called",
      answer: "Cropping",
      options: ["Hiding", "Bordering", "Alignment", "Cropping"]
    },
    {
      numb: 14,
      question: "Which items are placed at the end of a document",
      answer: "Endnote",
      options: ["Footnote", "Endnote", "Header", "Footer"]
    },
    {
      numb: 15,
      question: "Which one can be used as watermark in a word document",
      answer: "Both A & B",
      options: ["Text", "Image", "Both A & B", "None"]
    },
    {
      numb: 16,
      question: "Where footnotes appear in a document",
      answer: "Bottom of a Page",
      options: ["End of the Document", "Bottom of a Page", "End of Heading", "None"]
    },
    {
      numb: 17,
      question: "To Spell Check Which Function Key You Will Press ?",
      answer: "F7",
      options: ["F7", "F5", "F6", "F4"]
    },
    {
      numb: 18,
      question: "Ctrl + H Is Short Cut For ?",
      answer: "Open Find And Replace Dialog Box With Activating Replace Tab",
      options: ["Open Find And Replace Dialog Box With Activating Go To Tab", "Open Find And Replace Dialog Box With Activating Find Tab", "Open Find And Replace Dialog Box With Activating Replace Tab", "Open Insert Dialog Box Activating Insert Hyper Link Tab"]
    },
    {
      numb: 19,
      question: "Which is the default alignment in word?",
      answer: "Left",
      options: ["Right", "Center", "Left", "Justify"]
    },
    {
      numb: 20,
      question: "Which enables us to send the same letter to different persons ?",
      answer: "Mail Merge",
      options: ["Macros", "Templates", "Mail Merge", "None of Above"]
    },
    {
      numb: 21,
      question: "Which do you press to force a page break?",
      answer: "Ctrl + Enter",
      options: ["Ctrl + Alt", "Ctrl + Enter", "Ctrl + Shift + Alt", "Ctrl + Break"]
    },
    {
      numb: 22,
      question: "Which of the following is used to create newspaper style columns?",
      answer: "Format Column",
      options: ["Format Tabs", "Table Insert Table", "Insert Textbox", "Format Column"]
    },
    {
      numb: 23,
      question: "What is the default font used in MS Word document?",
      answer: "Calibiri",
      options: ["Arial", "Calibiri", "Times Roman", "algerian"]
    },
    {
      numb: 24,
      question: "In Microsoft Word using CTRL+SHIFT with any of the arrow keys",
      answer: "Ctrl + E",
      options: ["Paste Something", "Delete Something", "Highlight a block of text", "None of Above"]
    },
    {
      numb: 25,
      question: "To text alignment right, the shortcut key is",
      answer: "Ctrl + R",
      options: ["Ctrl + C", "Ctrl + D", "Ctrl + E", "Ctrl + R"]
    }
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
  ];
  //selecting all required elements
  const start_btn = document.querySelector(".start_btn button");
  const info_box = document.querySelector(".info_box");
  const exit_btn = info_box.querySelector(".buttons .quit");
  const continue_btn = info_box.querySelector(".buttons .restart");
  const quiz_box = document.querySelector(".quiz_box");
  const result_box = document.querySelector(".result_box");
  const option_list = document.querySelector(".option_list");
  const time_line = document.querySelector("header .time_line");
  const timeText = document.querySelector(".timer .time_left_txt");
  const timeCount = document.querySelector(".timer .timer_sec");
  
  // if startQuiz button clicked
  start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
  };
  
  // if exitQuiz button clicked
  exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
  };
  
  // if continueQuiz button clicked
  continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
  };
  
  let timeValue = 15;
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter;
  let counterLine;
  let widthValue = 0;
  
  const restart_quiz = result_box.querySelector(".buttons .restart");
  const quit_quiz = result_box.querySelector(".buttons .quit");
  
  // if restartQuiz button clicked
  restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  };
  
  // if quitQuiz button clicked
  quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
  };
  
  const next_btn = document.querySelector("footer .next_btn");
  const bottom_ques_counter = document.querySelector("footer .total_que");
  
  // if Next Que button clicked
  next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
      //if question count is less than total question length
      que_count++; //increment the que_count value
      que_numb++; //increment the que_numb value
      showQuetions(que_count); //calling showQestions function
      queCounter(que_numb); //passing que_numb value to queCounter
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      startTimer(timeValue); //calling startTimer function
      startTimerLine(widthValue); //calling startTimerLine function
      timeText.textContent = "Time Left"; //change the timeText to Time Left
      next_btn.classList.remove("show"); //hide the next button
    } else {
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      showResult(); //calling showResult function
    }
  };
  
  // getting questions and options from array
  function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
  
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag =
      "<span>" +
      questions[index].numb +
      ". " +
      questions[index].question +
      "</span>";
    let option_tag =
      '<div class="option"><span>' +
      questions[index].options[0] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[1] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[2] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[3] +
      "</span></div>";
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
    const option = option_list.querySelectorAll(".option");
  
    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "optionSelected(this)");
    }
  }
  // creating the new div tags which for icons
  let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
  let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
  
  //if user clicked on option
  function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
  
    if (userAns == correcAns) {
      //if user selected option is equal to array's correct answer
      userScore += 1; //upgrading score value with 1
      answer.classList.add("correct"); //adding green color to correct selected option
      answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
    } else {
      answer.classList.add("incorrect"); //adding red color to correct selected option
      answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
      console.log("Wrong Answer");
  
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Auto selected correct answer.");
        }
      }
    }
    for (i = 0; i < allOptions; i++) {
      option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
  }
  
  function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
      // if user scored more than 3
      //creating a new span tag and passing the user score number and total question number
      let scoreTag =
        "<span>and congrats! , You got <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
    } else if (userScore > 1) {
      // if user scored more than 1
      let scoreTag =
        "<span>and nice , You got <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag;
    } else {
      // if user scored less than 1
      let scoreTag =
        "<span>and sorry , You got only <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag;
    }
  }
  
  function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
      timeCount.textContent = time; //changing the value of timeCount with time value
      time--; //decrement the time value
      if (time < 9) {
        //if timer is less than 9
        let addZero = timeCount.textContent;
        timeCount.textContent = "0" + addZero; //add a 0 before time value
      }
      if (time < 0) {
        //if timer is less than 0
        clearInterval(counter); //clear counter
        timeText.textContent = "Time Off"; //change the time text to time off
        const allOptions = option_list.children.length; //getting all option items
        let correcAns = questions[que_count].answer; //getting correct answer from array
        for (i = 0; i < allOptions; i++) {
          if (option_list.children[i].textContent == correcAns) {
            //if there is an option which is matched to an array answer
            option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            console.log("Time Off: Auto selected correct answer.");
          }
        }
        for (i = 0; i < allOptions; i++) {
          option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
        }
        next_btn.classList.add("show"); //show the next button if user selected any option
      }
    }
  }
  
  function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
      time += 1; //upgrading time value with 1
      time_line.style.width = time + "px"; //increasing width of time_line with px by time value
      if (time > 549) {
        //if time value is greater than 549
        clearInterval(counterLine); //clear counterLine
      }
    }
  }
  
  function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag =
      "<span><p>" +
      index +
      "</p> of <p>" +
      questions.length +
      "</p> Questions</span>";
    bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
  }
  