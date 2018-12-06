# Deploy on Google's Cloud Compute Engine

## Outline

* Map:

  1. Set up a Google Cloud Account
  2. Create a Google Cloud Compute Instance
  3. Install Node.js on the instance
  4. Install our application on the instance
  5. Start our application


##Overview

* Set up a Google Cloud Account

  - You can sign up for an account or use joshua+events@flatironschool.com (events120518)
    - Signing up for an account will require a credit card
    - It's going to promise you a free trial (but you may have to wave that)
    - The product we will be using doesn't charge you anyway

* Create a Google Cloud Compute Instance

  - Create a project

  - Compute Engine -> VM Instances -> Create Instance

    - Machine Type: Micro Instance

    - Boot Disk: Ubuntu 18.1
    - Allow HTTP traffic
    - Allow HTTPS traffic

  - Review options 

    - select a micro instance
    - select Ubuntu 18.1
      - 744 hours free === 1 month
    - Turn on HTTP and HTTPS access

* Install Node.js on the instance

  * SSH in

  * ```
    curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

* Install our application on the instance

  * Copy the github link
    * `https://github.com/Joshua-Miles/google-cloud-compute-120518.git`
  * Clone it 
  * Install dependencies with npm

* Start our application



## Automated Deployment

* Install nodemon
* Install child-process-promise
* Add a handler for the `/deploy` endpoint which uses the child-process-promise.exec function to pull updates to the google 
* Add `http://<your IP>/deploy` as a GitHub web hook for the repository you want to autodeploy from. 