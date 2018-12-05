# Deploy on Google's Cloud Compute Engine

## Vocabulary

* Google Cloud Compute
* Instance
* CPU
* Project metadata
* SSH

## Outline

* Map:

  1. Set up a Google Cloud Account
  2. Create a Google Cloud Compute Instance
  3. Install Node.js on the instance
  4. Install our application on the instance
  5. Start our application

* Bonus:

  1. Use Instance Metadata to connect to your Google Cloud Compute Instance from your local machine

  2. Forward a domain to your instance 

##Overview

* Set up a Google Cloud Account

  - You can sign up for an account or use joshua+events@flatironschool.com (events120518)
    - Signing up for an account will require a credit card
    - It's going to promise you a free trial (but you may have to wave that)
    - The product we will be using doesn't charge you anyway

* Create a Google Cloud Compute Instance

  - Create a project
  - Compute Engine -> VM Instances -> Create Instance
  - Review options (select Ubuntu 18.1)
    - 744 hours free === 1 month

* Install Node.js on the instance

  * SSH in

  * ```
    curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

* Install our application on the instance

  * Copy the github link
  * Edit environment settings using vim

* Start our application

* Bonus:

  1. Forward a domain to your instance