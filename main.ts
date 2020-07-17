function head_yes () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S1, 120)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S1, 120)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        head_yes()
        basic.pause(1000)
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        head_NO()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Happy)
})
function head_NO () {
    robotbit.Servo(robotbit.Servos.S2, 160)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S2, 60)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S2, 160)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S2, 110)
    basic.pause(200)
}
basic.showIcon(IconNames.Heart)
basic.pause(200)
basic.showIcon(IconNames.SmallHeart)
basic.pause(200)
basic.forever(function () {
    if (timeanddate.secondsSinceReset() % 9 == 0) {
        basic.showIcon(IconNames.Asleep)
    } else if (timeanddate.secondsSinceReset() % 7 == 0) {
        basic.showIcon(IconNames.Ghost)
    }
})
