# NodeJS AngularJS RPI Controller

NodeJS RPI Controller have the following API:
* /api/info
	Return info about the RPI
* /api/uptime
	Return the RPI uptime
* /api/load
	Return the RPI load average
* /api/mem
	Return the RPI memory status
* /api/mounts
	Return the RPI mount points
* /api/network
	Return the RPI network interfaces
* /api/shutdown
	Shutdown the RPI
* /api/reboot
	Reboot the RPI

## Install

Pre-requisite:
* Node JS
* NPM

Clone the nodejs-rpi-controller repository, run `npm install` to grab the dependencies!

### Install to RPI

Pre-requisite:
* Node JS
* NPM

Clone the nodejs-rpi-controller repository.
Create a file secret.json inside nodejs-rpi-controller:

    {
        "host": "<Hostname>",
        "username": "<Pi user>",
        "password": "<Pi user password>"
    }

And run `npm install && grunt deploy` to install minimal version of the application!

### Running the app

Runs like a typical express app:

    node app.js

### Install on RPI init.d
* Create directory /opt/node/apps `sudo mkdir -p /opt/node/apps && sudo chown -R pi:pi /opt/node/apps`
* Clone git repository into /opt/node/apps `cd /opt/node/apps && git clone https://github.com/ryarnyah/nodejs-rpi-controller.git`
* Install dependencies `cd nodejs-rpi-controller && npm install`
* Create nodejs-rpi-controller startup script `sudo nano /etc/init.d/nodejs-rpi-controller-startup.sh`

Paste this:

    #!/bin/bash
    
    NODE=/opt/node/bin/node
    SERVER_JS_FILE=/opt/node/apps/nodejs-rpi-controller/app.js
    USER=pi
    OUT=/opt/node/apps/nodejs-rpi-controller/nodejs.log
    
    case "$1" in
    
    start)
         echo "starting node: $NODE $SERVER_JS_FILE"
         sudo -u $USER $NODE $SERVER_JS_FILE > $OUT 2>$OUT &
         ;;
    
    stop)
         killall $NODE
         ;;
    
    *)
         echo "usage: $0 (start|stop)"
    esac
    
    exit 0

Start nodejs server `sudo chmod +x /etc/init.d/nodejs-rpi-controller-startup.sh && sudo /etc/init.d/nodejs-rpi-controller-startup.sh start && sudo update-rc.d nodejs-rpi-controller-startup.sh defaults`

Go to `http://raspberrypi.local:3000/`
## License
MIT
