/* Soccer Game

 Get game to Load

 Get ball to move left or right randomly

 Score Button only works if ball is next to the goal aka score button

 keep tally of game score

 win conditon first one to 10

 */








class Soccer {
    constructor() {
        this.movebutton = document.getElementById('moveball')
        this.scoreleft = document.getElementById('scoreleft')
        this.ball = document.querySelectorAll('.ball')
        this.scoreright = document.getElementById('scoreright')
        this.score = document.getElementById('score')
        this.leftscore = 0
        this.rightscore = 0
        this.balllocation = 2
        this.ball[this.balllocation].style.display = 'block'
        this.start = document.getElementById('startGame')


        this.movebutton.addEventListener('click', ()=> {
            this.moveball ()
        })

        this.scoreright.addEventListener('click', ()=>  {
                 
        })
        
        this.scoreleft.addEventListener('click', ()=> {

        })
        
        //get game from a blank state to display

        this.start.addEventListener('click', ()=> {
            
        })
    }
    
    
    moveball()  { 
        // one = left  and two = right
        let direction = Math.ceil(Math.random() *2)
        if (direction == 1 && this.balllocation == 3) {
            this.balllocation = 2
        } else if (direction == 1 && this.balllocation == 2) {
            this.balllocation = 1
        } else if (direction == 1 && this.balllocation == 1) {
            this.balllocation = 0
        } else if (direction == 2 && this.balllocation == 0) {
            this.balllocation = 1
        } else if (direction == 2 && this.balllocation == 1) {
            this.balllocation = 2
        } else if (direction == 2 && this.balllocation == 2) {
            this.balllocation = 3
        }
        
         // where the ball will be displayed on

        this.ball.forEach(el => {
            if (el == this.ball[this.balllocation]) {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        })
        console.log(this.balllocation)
    } 



}

const newgame = new Soccer
