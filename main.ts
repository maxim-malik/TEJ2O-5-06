/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Oct 2025
 * This program shows distance using an ultrasonic sensor
*/

let distanceToObject:number = 0

//setup
basic.showIcon(IconNames.Happy)

//find distance with sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})