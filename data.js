var APP_DATA = {
  "scenes": [
    {
      "id": "0-image1",
      "name": "Electroknit Dymaxion VR View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.5012423609771073,
        "pitch": -0.2115588756214528,
        "fov": 1.5707963267948966
      }, // {
        //   "yaw": 1.4697767647941031,
        //   "pitch": -0.3273774728262282,
        //   "rotation": 0,
        //   "target": "0-image1"
        // }
      "linkHotspots": [
        // {
        //   "yaw": 1.4697767647941031,
        //   "pitch": -0.3273774728262282,
        //   "rotation": 0,
        //   "target": "0-image1"
        // }
      ],
      "infoHotspots": [
       {
          "yaw": 1.4697767647941031,
          "pitch": -0.3273774728262282,
          "title": "Example Tile",
          "text": "This is an example info bit"
        }]
    }
  ],
  "name": "electroknit-dymaxion",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
