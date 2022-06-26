# working links:
## [dumplinks-e123d.web.app](https://dumplinks-e123d.web.app/)
## [dumplinks-e123d.firebaseapp.com](https://dumplinks-e123d.firebaseapp.com/)

# dumplinks
Dumplinks is a platform to store and share links between users and devices(pc ⇄ phone).

## working
For every unique key user enters, DumpLinks stores a set of links and text. The text and links can be accessed again from any device by entering that key. This is the functionality. It could be used for various purposes. 

1. Seamless transfer of text and links across devices without login latency and a record on any social media platforms.
2. Can be used as a secret vault between a group to store specific info. 
3. DumpLinks is made to be responsive to work seamlessly on all devices; initial view is adopted form default browser display theme and later user can opt and swith between themes available.
4. Secret conversation using a key which will not leave a trace on your device.

initial view before data is extracted:

![Screenshot from 2022-06-26 17-16-24](https://user-images.githubusercontent.com/37890718/175812556-76843cf2-9c0c-4c24-add2-00abfdcc481c.png)

view after data of KEY demoKey is extracted:

![Screenshot from 2022-06-26 17-15-25](https://user-images.githubusercontent.com/37890718/175812536-a56b0cc9-e8da-4797-800a-a80bd40b079f.png)

above images in light mode:
![Screenshot from 2022-06-26 17-19-15](https://user-images.githubusercontent.com/37890718/175812670-6aaa8798-d649-400d-be8a-c43ca6f240ff.png)


![Screenshot from 2022-06-26 17-19-35](https://user-images.githubusercontent.com/37890718/175812691-f3ef7837-28c8-47e9-8d48-938f6cff66a4.png)



## How we built it
we used reactjs for our application logic & for our backend, we used firebase for our data and app hosting .

## Challenges we ran into
few challenges were we ran into are data storing if at all a login is present it would be no different from rest of the existing apps or websites but for that we came up with a single page app where data is retreived with a single key and that reduced the time taken for page transission and authentication.
