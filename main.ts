enum Digital {
    //% block="low"
    //% block.loc.nl="laag"
    Low,
    //% block="high"
    //% block.loc.nl="hoog"
    High,
}

enum Motor {
    //% block="M1"
    M1,
    //% block="M2"
    M2,
    //% block="M3"
    M3,
    //% block="M4"
    M4,
}

enum Servo {
    //% block="S1" 
    S1,
    //% block="S2"
    S2,
    //% block="S3" 
    S3,
    //% block="S4"
    S4,
}

enum ServoType {
    //% block="180"
    ST180 = 180,
    //% block="180"
    ST27 = 270,
    //% block="360"
    ST360 = 360,
}

enum Switch {
    //% block="released"
    //% block.loc.nl="losgelaten"
    Pressed,
    //% block="pressed"
    //% block.loc.nl="ingedrukt"
    Released,
}

enum Track {
    //% block="far left"
    //% block.loc.nl="ver links"
    FarLeft = 1,
    //% block="left"
    //% block.loc.nl="links"
    Left = 2,
    //% block="right"
    //% block.loc.nl="rechts"
    Right = 4,
    //% block="far right"
    //% block.loc.nl="ver rechts"
    FarRight = 8
}

enum Track2 {
    //% block="◌ ◌"
    None,
    //% block="● ◌"
    Left,
    //% block="◌ ●"
    Right,
    //% block="● ●"
    Both,
}

enum Track4 {
    //% block="◌ ◌ ◌ ◌" 
    State_0,
    //% block="● ◌ ◌ ◌" 
    State_1,
    //% block="◌ ● ◌ ◌" 
    State_2,
    //% block="● ● ◌ ◌" 
    State_3,
    //% block="◌ ◌ ● ◌" 
    State_4,
    //% block="● ◌ ● ◌" 
    State_5,
    //% block="◌ ● ● ◌" 
    State_6,
    //% block="● ● ● ◌" 
    State_7,
    //% block="◌ ◌ ◌ ●" 
    State_8,
    //% block="● ◌ ◌ ●" 
    State_9,
    //% block="◌ ● ◌ ●" 
    State_10,
    //% block="● ● ◌ ●"
    State_11,
    //% block="◌ ◌ ● ●" 
    State_12,
    //% block="● ◌ ● ●" 
    State_13,
    //% block="◌ ● ● ●" 
    State_14,
    //% block="● ● ● ●" 
    State_15,
}

enum Spin {
    //% block="clockwise"
    //% block.loc.nl="rechtsom"
    Clockwise,
    //% block="anti-clockwise"
    //% block.loc.nl="linksom"
    AntiClockwise
}

enum Pace {
    //% block="slow"
    //% block.loc.nl="langzaam"
    Slow,
    //% block="normal"
    //% block.loc.nl="normaal"
    Normal,
    //% block="fast"
    //% block.loc.nl="snel"
    Fast,
}

// RJPort MODULE

// the arrays AnalogRJ and DigitalRJ are valid
// for both NezhaBrick and NezhaPro (V2)

let AnalogRJ = [AnalogPin.P8, AnalogPin.P1,
AnalogPin.P12, AnalogPin.P2,
AnalogPin.P14, AnalogPin.P13,
AnalogPin.P16, AnalogPin.P15]

let DigitalRJ = [DigitalPin.P8, DigitalPin.P1,
DigitalPin.P12, DigitalPin.P2,
DigitalPin.P14, DigitalPin.P13,
DigitalPin.P16, DigitalPin.P15]

enum RJPort {
    //% block="port J1"
    //% bloc.loc.nl="poort J1"
    J1,
    //% block="port J2"
    //% bloc.loc.nl="poort J2"
    J2,
    //% block="port J3"
    //% bloc.loc.nl="poort J3"
    J3,
    //% block="port J4"
    //% bloc.loc.nl="poort J4"
    J4,
}

enum RJLine {
    //% block="line A"
    LA,
    //% block="line B"
    LB,
}

function analogPin(port: RJPort, line: RJLine): number {
    return AnalogRJ[port * 2 + line]
}

function digitalPin(port: RJPort, line: RJLine): number {
    return DigitalRJ[port * 2 + line]
}

function analogRead(port: RJPort, line: RJLine): number {
    return pins.analogReadPin(AnalogRJ[port * 2 + line])
}

function analogWrite(port: RJPort, line: RJLine, value: number) {
    pins.analogWritePin(AnalogRJ[port * 2 + line], value)
}

function digitalRead(port: RJPort, line: RJLine): Digital {
    return pins.digitalReadPin(DigitalRJ[port * 2 + line])
}

function digitalWrite(port: RJPort, line: RJLine, value: Digital) {
    pins.digitalWritePin(DigitalRJ[port * 2 + line], value);
}
