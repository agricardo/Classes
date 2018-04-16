const mario = {
    width: '40px',
    height: "60px",
    x: 0,
    y: 0,
    imgSet: "marioImageSet.png",
    interface: {
        a: () => {
            //mario jumps
        },
        x: () => {
            //does action
        },
        r1: () => {
            //run fast
        }
    }
}

// const badGuy = {
//     width: '40px',
//     height: '60px',
//     x: 0,
//     y: 0,
// }

function badGuy(id){
    this.id = id
    this.width = '40px'
    this.height = '60px'
    this.x = 0
    this.y = 0
}

function gameRunning(mario){

}