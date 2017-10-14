
var crystalGame = {

    desiredRandomNumber: undefined,

    crystalRandomNumberOne: undefined,

    crystalRandomNumberTwo: undefined,

    crystalRandomNumberThree: undefined,

    crystalRandomNumberFour: undefined,

    wins: 0,

    losses: 0,

    score: 0,

    setup: function(){

        this.desiredRandomNumber = Math.floor(Math.random() * 120) + 19;
        this.crystalRandomNumberOne = Math.floor(Math.random() * 12) + 1;
        this.crystalRandomNumberTwo = Math.floor(Math.random() * 12) + 1;
        this.crystalRandomNumberThree = Math.floor(Math.random() * 12) + 1;
        this.crystalRandomNumberFour = Math.floor(Math.random() * 12) + 1;

        $(".randomNumber").html(this.desiredRandomNumber);
        $(".winCount").html(this.wins);
        $(".lossCount").html(this.losses);

        this.score = 0;
        $(".score").html(this.score);
    },

    addNum1: function(){
        this.score += this.crystalRandomNumberOne;
        $(".score").html(this.score);
    },

    addNum2: function(){

        this.score += this.crystalRandomNumberTwo;
        $(".score").html(this.score);
    },

    addNum3: function(){
        this.score += this.crystalRandomNumberThree;
        $(".score").html(this.score);
    },

    addNum4: function(){
        this.score += this.crystalRandomNumberFour;
        $(".score").html(this.score);
    },

    gameResult: function(){

        setInterval(function(){
            if(crystalGame.score > crystalGame.desiredRandomNumber){
                alert("you lose!");
                crystalGame.losses++;
                crystalGame.setup();
            }
            else if(crystalGame.score === crystalGame.desiredRandomNumber){
                alert("you win!");
                crystalGame.wins++;
                crystalGame.setup();
            };
        }, 500);
    },

};

$(document).ready(function(){

    crystalGame.setup();

    $("#crystOne").on("click", function(){
        crystalGame.addNum1();
    });
    $("#crystTwo").on("click", function(){
        crystalGame.addNum2();
    });
    $("#crystThree").on("click", function(){
        crystalGame.addNum3();
    });
    $("#crystFour").on("click", function(){
        crystalGame.addNum4();
    });

    crystalGame.gameResult();
});











