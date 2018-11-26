let roofWidth = 0
let roofLength = 0
let wallWidth = 0
let wallLength = 0
let wallHeight = 0
player.onChat("house", function (width, length, height) {
    wallHeight = height
    wallLength = length
    wallWidth = width
    roofLength = length
    roofWidth = width
    agent.setItem(Block.PlanksSpruce, 1, 1)
    build4walls()
    agent.setItem(Block.SpruceWoodStairs, 1, 1)
    buildRoof()
    agent.setItem(Block.YellowStainedGlassPane, 1, 1)
    fillRoof()
})
function build4walls() {
    for (let i = 0; i < wallHeight; i++) {
        for (let i = 0; i < 2; i++) {
            agent.setAssist(AgentAssist.PlaceOnMove, true)
            agent.move(SixDirection.Forward, wallWidth)
            agent.turn(TurnDirection.Right)
            agent.move(SixDirection.Forward, wallLength)
            agent.turn(TurnDirection.Right)
        }
        agent.move(SixDirection.Up, 1)
        agent.setAssist(AgentAssist.PlaceOnMove, false)
        agent.move(SixDirection.Left, 1)
    }
}
function buildRoof() {
    for (let i = 0; i < 2; i++) {
        agent.move(SixDirection.Left, 1)
        agent.turn(TurnDirection.Right)
        for (let i = 0; i < roofWidth; i++) {
            agent.place(SixDirection.Forward)
            agent.move(SixDirection.Left, 1)
        }
        agent.move(SixDirection.Left, 1)
        agent.move(SixDirection.Forward, 1)
        agent.turn(TurnDirection.Right)
        for (let i = 0; i < wallLength; i++) {
            agent.place(SixDirection.Forward)
            agent.move(SixDirection.Left, 1)
        }
        agent.move(SixDirection.Forward, 1)
    }
}
function fillRoof() {
    for (let i = 0; i < roofLength - 1; i++) {
        agent.move(SixDirection.Right, 1)
        for (let i = 0; i < roofWidth - 1; i++) {
            agent.move(SixDirection.Forward, 1)
            agent.place(SixDirection.Down)
        }
        agent.move(SixDirection.Back, roofWidth - 1)
    }
}
