var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrium_edited",
      "name": "Atrium_edited",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.0898685932221905,
        "pitch": 0.07028213682771067,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": -0.16528602048440888,
          "pitch": 0.018590972077475953,
          "rotation": 0,
          "target": "1-level-2_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2959092921244384,
          "pitch": -0.13165355364229114,
          "title": "Welcome to NUS Business School!",
          "text": "This way to explore level 2 and 3."
        },
        {
          "yaw": 3.035586487031196,
          "pitch": -0.025305626456624708,
          "title": "Cafe",
          "text": "OM NOM NOM time!"
        }
      ]
    },
    {
      "id": "1-level-2_edited",
      "name": "Level 2_edited",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.525952454673302,
        "pitch": 0.1423607757123868,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": -3.137793557485356,
          "pitch": -0.11894908311382935,
          "rotation": 0,
          "target": "2-level-3_edited"
        },
        {
          "yaw": -3.120382157895923,
          "pitch": 0.3383481734259668,
          "rotation": 3.141592653589793,
          "target": "0-atrium_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8625833329349506,
          "pitch": 0.0822926669289199,
          "title": "Tutorial Rooms",
          "text": "Here,, you will have small group discussions with your Prof!"
        }
      ]
    },
    {
      "id": "2-level-3_edited",
      "name": "Level 3_edited",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.047884351224168,
        "pitch": 0.1577588262808831,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": 2.8424795056440386,
          "pitch": 0.0597219358106873,
          "rotation": 3.141592653589793,
          "target": "1-level-2_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4377385766043016,
          "pitch": -0.06454068865165219,
          "title": "Seminar Room 1",
          "text": "Classes are held here."
        }
      ]
    }
  ],
  "name": "Business School",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
