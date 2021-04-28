basic.forever(function () {
    if (108 > input.compassHeading() && 60 < input.compassHeading()) {
        basic.showArrow(ArrowNames.West)
    } else if (60 > input.compassHeading() && 32 < input.compassHeading()) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (32 > input.compassHeading() || 329 < input.compassHeading()) {
        basic.showArrow(ArrowNames.North)
    } else if (329 > input.compassHeading() && 305 < input.compassHeading()) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (305 > input.compassHeading() && 254 < input.compassHeading()) {
        basic.showArrow(ArrowNames.East)
    } else if (254 > input.compassHeading() && 211 < input.compassHeading()) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (211 > input.compassHeading() && 137 < input.compassHeading()) {
        basic.showArrow(ArrowNames.South)
    } else if (137 > input.compassHeading() && 108 < input.compassHeading()) {
        basic.showArrow(ArrowNames.SouthWest)
    } else {
        basic.clearScreen()
    }
})
