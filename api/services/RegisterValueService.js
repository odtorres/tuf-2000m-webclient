
var http = require('http');

/** url */
var url = "http://localhost:1337/feed.txt";
//var url = "http://tuftuf.gambitlabs.fi/feed.txt";

/** Full text  */
var registerValuesText = "";

/** Register array  */
var registerValuesArray = [];

/** Register array  */
var registerValuesA = [];

/** Register Object  */
var registerValuesObject = {};


module.exports = {
    init: function (done) {
        registerValuesText = "";
        registerValuesA = [];
        http.get(url, function (response) {
            response.setEncoding('utf8');

            response.on('data', function (chunk) {
                registerValuesText += chunk;
            });

            response.on('end', function () {
                registerValuesA = registerValuesText.split("\r\n");
                registerValuesA.forEach(function (e, i, a) {
                    if (i == 0)
                        registerValuesArray[i] = e;
                    else
                        registerValuesArray[i] = e.split(":")[1];
                });
                registerValuesObject.date = registerValuesArray[0];
                registerValuesObject.REGISTERS = {};
                registerValuesObject.REGISTERS["(1-2) Flow Rate "] = [registerValuesArray[1], registerValuesArray[2]];
                registerValuesObject.REGISTERS["(3-4) Energy Flow Rate"] = [registerValuesArray[3], registerValuesArray[4]];
                registerValuesObject.REGISTERS["(5-6) Velocity"] = [registerValuesArray[5], registerValuesArray[6]];
                registerValuesObject.REGISTERS["(7-8) Fluid sound speed"] = [registerValuesArray[7], registerValuesArray[8]];
                registerValuesObject.REGISTERS["(9-10) Positive accumulator"] = [registerValuesArray[9], registerValuesArray[10]];
                registerValuesObject.REGISTERS["(11-12) Positive decimal fraction"] = [registerValuesArray[11], registerValuesArray[12]];
                registerValuesObject.REGISTERS["(13-14) Negative accumulator"] = [registerValuesArray[13], registerValuesArray[14]];
                registerValuesObject.REGISTERS["(15-16) Negative decimal fraction"] = [registerValuesArray[15], registerValuesArray[16]];
                registerValuesObject.REGISTERS["(17-18) Positive energy accumulator"] = [registerValuesArray[17], registerValuesArray[18]];
                registerValuesObject.REGISTERS["(19-20) Positive energy decimal fraction"] = [registerValuesArray[19], registerValuesArray[20]];
                registerValuesObject.REGISTERS["(21-22) Negative energy accumulator"] = [registerValuesArray[21], registerValuesArray[22]];
                registerValuesObject.REGISTERS["(23-24) Negative energy decimal fraction"] = [registerValuesArray[23], registerValuesArray[24]];
                registerValuesObject.REGISTERS["(25-26) Net accumulator"] = [registerValuesArray[25], registerValuesArray[26]];
                registerValuesObject.REGISTERS["(27-28) Net decimal fraction"] = [registerValuesArray[27], registerValuesArray[28]];
                registerValuesObject.REGISTERS["(29-30) Net energy accumulator"] = [registerValuesArray[29], registerValuesArray[30]];
                registerValuesObject.REGISTERS["(31-32) Net energy decimal fraction"] = [registerValuesArray[31], registerValuesArray[32]];
                registerValuesObject.REGISTERS["(33-34) Temperature #1/inlet"] = [registerValuesArray[33], registerValuesArray[34]];
                registerValuesObject.REGISTERS["(35-36) Temperature #2/outlet"] = [registerValuesArray[35], registerValuesArray[36]];
                registerValuesObject.REGISTERS["(37-38) Analog input AI3"] = [registerValuesArray[37], registerValuesArray[38]];
                registerValuesObject.REGISTERS["(39-40) Analog input AI4"] = [registerValuesArray[39], registerValuesArray[40]];
                registerValuesObject.REGISTERS["(41-42) Analog input AI5"] = [registerValuesArray[41], registerValuesArray[42]];
                registerValuesObject.REGISTERS["(43-44) Current input at AI3"] = [registerValuesArray[43], registerValuesArray[44]];
                registerValuesObject.REGISTERS["(45-46) Current input at AI3"] = [registerValuesArray[45], registerValuesArray[46]];
                registerValuesObject.REGISTERS["(47-48) Current input at AI3"] = [registerValuesArray[47], registerValuesArray[48]];
                registerValuesObject.REGISTERS["(49-50) System password"] = [registerValuesArray[49], registerValuesArray[50]];
                registerValuesObject.REGISTERS["(51) Password for hardware"] = [registerValuesArray[51]];
                registerValuesObject.REGISTERS["(53-55) Calendar"] = [registerValuesArray[53], registerValuesArray[54], registerValuesArray[55]];
                registerValuesObject.REGISTERS["(56) Day+Hour for Auto-Sav"] = [registerValuesArray[56]];
                registerValuesObject.REGISTERS["(59) Key to input"] = [registerValuesArray[59]];
                registerValuesObject.REGISTERS["(60) Go to Window #"] = [registerValuesArray[60]];
                registerValuesObject.REGISTERS["(61) LCD Back-lit lights"] = [registerValuesArray[61]];
                registerValuesObject.REGISTERS["(62) Times for the beeper"] = [registerValuesArray[62]];
                registerValuesObject.REGISTERS["(62) Pulses left for OCT"] = [registerValuesArray[62]];
                registerValuesObject.REGISTERS["(72) Error Code"] = (registerValuesArray[72] >>> 0).toString(2);
                registerValuesObject.REGISTERS["(77-78) PT100 resistance of inlet"] = [registerValuesArray[77], registerValuesArray[78]];
                registerValuesObject.REGISTERS["(79-80) PT100 resistance of outlet"] = [registerValuesArray[79], registerValuesArray[80]];
                registerValuesObject.REGISTERS["(81-82) Total travel time"] = [registerValuesArray[81], registerValuesArray[82]];
                registerValuesObject.REGISTERS["(83-84) Delta travel time "] = [registerValuesArray[83], registerValuesArray[84]];
                registerValuesObject.REGISTERS["(85-86) Upstream travel time"] = [registerValuesArray[85], registerValuesArray[86]];
                registerValuesObject.REGISTERS["(87-88) Downstream travel time"] = [registerValuesArray[87], registerValuesArray[88]];
                registerValuesObject.REGISTERS["(89-90) Output current"] = [registerValuesArray[89], registerValuesArray[90]];
                registerValuesObject.REGISTERS["(92) Working step and Signal Quality"] = [registerValuesArray[92]];
                registerValuesObject.REGISTERS["(93) Upstream strength"] = [registerValuesArray[93]];
                registerValuesObject.REGISTERS["(94) Downstream strength"] = [registerValuesArray[94]];
                registerValuesObject.REGISTERS["(96) Language"] = (registerValuesArray[96] == 0) ? "English" :
                    (registerValuesArray[96] == 1) ? "Chinese" : "Other";//0 : English，1:Chinese
                registerValuesObject.REGISTERS["(97-98) Rate of the measured travel"] = [registerValuesArray[97], registerValuesArray[98]];
                registerValuesObject.REGISTERS["(99-100) Reynolds number"] = [registerValuesArray[99], registerValuesArray[100]];

                return done();
            });

        }).on('error', function (e) {
            console.log("Got error: " + e.message);
        });
    },

    getRegisterValues: function (done) {
        return this.init(function () {
            done(registerValuesText);
        });
    },

    getRegisterArray: function (done) {
        return this.init(function () {
            done(registerValuesA);
        });
    },

    getRegisterObject: function (done) {
        return this.init(function () {
            done(registerValuesObject);
        });
    },

    getAllRegister: function (done) {
        return this.init(function () {
            done(registerValuesText, registerValuesA, registerValuesObject);
        });
    }

}