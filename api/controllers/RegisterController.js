/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    index: function (req, res) {
        RegisterValueService.getRegisterValues(function(value){
            return res.send(value);
        });
    },
    array: function (req, res) {
        RegisterValueService.getRegisterArray(function(value){
            return res.json(value);
        });
    },
    object: function (req, res) {
        RegisterValueService.getRegisterObject(function (value) {
            return res.json(value);
        });
    },
    all: function (req, res) {
        RegisterValueService.getAllRegister(function (registerValuesText, registerValuesA, registerValuesObject) {
            var data = {registerValuesText : registerValuesText,
                         registerValuesA : registerValuesA,
                         registerValuesObject : registerValuesObject}
            return res.json(data);
        });
    }
};

