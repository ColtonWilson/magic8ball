
    let magic8Ball = {};
    magic8Ball.listofanswers = ['img/magic8ball_1.png','img/magic8ball_2.png','img/magic8ball_3.png','img/magic8ball_4.png','img/magic8ball_5.png',
                                'img/magic8ball_6.png','img/magic8ball_7.png','img/magic8ball_8.png','img/magic8ball_9.png','img/magic8ball_10.png'];
   
    magic8Ball.getAnswer = function(question)
    {
      // if(question.equals( "Answer to the Ultimate Question of Life, the Universe, and Everything?"))
      // {
      //   document.getElementById('42').innerText = "42";
      // }
      // else
      // {
      let randomNumber = Math.random();
      let randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      let answer = this.listofanswers[randomAnswer];
      
      document.getElementById('ballanswer').src = answer;
      //}
      
  

    };

    magic8Ball.postquestion = function(question)
    {
        document.getElementById('asking').innerText = question;
    }


    document.getElementById('questionButton').addEventListener('click', function() {
        let question = prompt(" What Knowledge You Seek", "Answer to the Ultimate Question of Life, the Universe, and Everything?");
          magic8Ball.getAnswer(question);
          magic8Ball.postquestion(question);
    });
    


  