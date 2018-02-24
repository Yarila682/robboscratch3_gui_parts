
var sensor_types = ["SENSOR_TYPE_ANALOG","SENSOR_TYPE_DIGITAL"];
var sensor_names = ["NONE","ULTRASONIC","COLOR"];
var sensor_version = [""]

class SensorsAPI{



    constructor(){




    }


static getSensorInitType(){

    return sensor_types[0];
}

static getSensorInitName(){

    return sensor_names[0];
}


}

export default SensorsAPI;
