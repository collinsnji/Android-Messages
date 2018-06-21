# Android-Messages
Android Messages desktop app wrapper for Mac. 

### Download and Install
Download the latest build suitable for your operating system     
from the release page here: https://github.com/collinsnji/Android-Messages/releases

### How to Build and Run

Clone the repository and run the code locally without installing the app.
```shell
    # clone the repository
    $ git clone https://github.com/collinsnji/Android-Messages.git
    $ cd Android-Messages
    
    # install dev dependencies
    $ yarn install
    
    # run the application
    $ yarn start
```
### Create a MacOS Binary
To create an installable binary for MacOS, run the following commands:

```shell
    # create a package
    $ yarn package

    # create a DMG installer 
    $ yarn installer
```
Alternatively, you could run `$ yarn build` to build a `.dmg` installer for Mac.   
I had a few issues with this method though. So please feel free to open a new issue.   


### Notes

Feel free to submit a PR with build scripts for other operating systems.

The app was built and tested on my computer, and my computer only. And it works! 
You know the saying, "if it works on my computer, then it is production ready!".
So yeah don't bullshit me with "it doesn't work on my computer" yada yada        

Feel free to open new issues if you find any (I bet you will) and PRs are highly welcomed! 

`PS. I tested/made this on a MBP 2017 with macOS High Sierra 10.13.5`  


## DISCLAIMER:   

I do not own Android Messages, and the app icon distributed with it. It's a property of Google.  
I simply created a distributable macOS binary for the Google's Android Messages Web.

Please see [support.google.com](https://support.google.com/messages/answer/7611075?p=web_computer&visit_id=1-636651929680042970-1740597568&rd=1) for more info 
