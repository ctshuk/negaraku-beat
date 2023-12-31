function Beat_L3 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Beat_L0()
        Beat_L1()
        Beat_L2()
        Beat_L3()
        Beat_L4()
        Beat_L5()
        Beat_L6()
    }
})
function Beat_L4 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(208, music.beat(BeatFraction.Whole))
}
function Beat_L1 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(208, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
}
function Beat_L2 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(208, music.beat(BeatFraction.Whole))
}
function Beat_L5 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
}
function Beat_L6 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    Beat_L0()
    Beat_L1()
    Beat_L2()
    Beat_L3()
    Beat_L4()
    Beat_L5()
    Beat_L6()
})
function Beat_L0 () {
    music.playTone(622, music.beat(BeatFraction.Double))
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
}
radio.setGroup(1)
edubitRgbBit.setPixelColor(0, 0xff0000)
edubitRgbBit.setPixelColor(1, 0x0000ff)
edubitRgbBit.setPixelColor(2, 0xffff00)
edubitRgbBit.setPixelColor(3, 0xffffff)
basic.forever(function () {
    led.plotBarGraph(
    edubitSoundBit.readSoundSensor(),
    1023
    )
})
