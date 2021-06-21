Blockly.Blocks["xbot_input_color_sensor_read"] = {
  init: function () {
    this.jsonInit({
      colour: "#04D30D",
      tooltip: "",
      message0: "%3 đọc cảm biến màu sắc cổng %1 giá trị %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "RGB",
          options: [
            ["RED","r"],
            ["GREEN","g"],
            ["BLUE","b"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/tsXx1MH/rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_input_color_sensor_detect"] = {
  init: function () {
    this.jsonInit({
      colour: "#04D30D",
      tooltip: "",
      message0: "%3 cảm biến màu sắc cổng %1 phát hiện màu %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "color",
          options: [
            ["trắng","w"],
            ["đen","d"],
            ["đỏ","r"],
            ["xanh lá", "g"],
            ["xanh dương", "b"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/tsXx1MH/rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Python["xbot_input_color_sensor_read"] = function (block) {
  var port = block.getFieldValue("port");
  var RGB = block.getFieldValue("RGB");
  // TODO: Assemble Python into code variable.
  var code = "color_sensor.read("+ port +", '" + RGB + "')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_input_color_sensor_detect"] = function (block) {
  var port = block.getFieldValue("port");
  var color = block.getFieldValue("color");
  // TODO: Assemble Python into code variable.
  var code = "color_sensor.detect("+ port +", '" + color +"')";
  return [code, Blockly.Python.ORDER_NONE];
};