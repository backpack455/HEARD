#HEARD

Helping everyone get heard, avoid, and act against discrimination against minorities using geofencing, geocoding, location services, google cloud and apis to bring awareness to, avoid and act against.

Inspiration

As a minority myself, as in many countries, we have all seen and been discriminated based on our differences and other people and this is cause that still has not been reduced to an optimal level. With all of these points in consideration, I felt as it is my responsibility to use my productive coding skills in order to develop a high level application in order to help people be heard, avoid and act against forms of racial discrimination.

##Main Features of the App

First here is the news feed in the home page tab. It allows end user to obtain powerful, unbiased and truthful sources speaking regarding the topics of race, discrimination and protests in regards to real world events and the ability to quickly view if you choose. Here you see:. Overall this section helps inform the user and spread awareness.

Here is the Petitions Tab where users are able to choose a petition they would like to support in order to help take action for those respective reasons. Some of these include justice for Armuad Marbery and other such incidents. Here you see: This will help users quickly take action with the quickest approach rather than scavenging the web for petitions. You can click the view button and it. Overall, this section helps the user take action against racial discrimination.

Here in the Statistics tab where you can view all the numbers the app is calculating behind the scenes to provide data in order to take action. Here you see: ... More specific data stored behind the scenes can be provided to local lawmakers, legislative officials and the towns to push for actions in those areas to help improve society as a whole. Overall, this section helps the user take action against racial discrimination.

Now we move to our search tab where we have a maps UI displaying our locations. Due to some constraints, I am not able to use a physical phone. Hence this Iphone 11 simulator displays the default San Francisco location header on the map, where otherwise it would show your location. Here, we have a text input where we can type in a location and enter to see various results. Based on the location input, we find data regarding the amount of complaints in this city. Since this app has not published any complaints yet we see 0. Using a custom algorithm with multiple data points from various apis, it estimates the amount of potential occurrences of acts of discrimination. We also see a risk level in order to help you make a decision whether you are going to avoid this location or not. We also see the amount of people in help status, which is a status you can enable in order to alert people nearby in your city to help you. Additionally, their icon will come up on the map. End users will end up seeing it and this will help others respond by going to their location and responding in numbers to that act of racial discrimination. Additionally, we see how many HEARD users there are in this city to see others in support. Over hear we see a button we can click in order to send a data point to the app to show we have avoided the location we typed in, incrementing data counters by 1 to track it. If we go out, we see this button in order to go into “help” status. Overall, this helps users avoid certain locations based on multiple data points.

Now to the last part of our app.

Here is the complaint submission form where you can submit a complaint regarding a person, individual, location and specify details regarding an act of racial discrimination. Additionally, the user can attach a photo in order to identify the person who discriminated. This will help us take action against such people and reduce racial discrimination on the back side of the app and provide this information to such organizations that do. Additionally, this data will be posted to the backend in google firebase and the cloud where the data is stored and then is retrieved in this upcoming section where all users can see the various different complaints by users in their areas.

Here we refresh and see my complaint comes up and we have a simple UI displaying this information.

I used various apis such as the change.org api, news api, react-native-maps api, expo’s location api, the api provided by google firebase making the backend so easy, and various libraries for easy and efficient styling. These apis helped me make this app in such a small period of time.

That is all for this app and I hope this app can help make the world a better place.

How I built it

During the progression of this application, I built I primarily with already existing libraries which helped me style my elements quite quickly. I used libraries such as react-native native base, react-native-elements and react-native vector-icons. For the many apis I used in this project, I used change.org now deprecated api which allowed for the feed of petitions, a News API creating the feed of news, react-native maps api allowing for the maps UI, the Expo permissions and locations API making it very simple to take data points using their documentation, Google Firebase API to help me use a simple post method to post my data reducing tons of time and geolocation/geocoding api that came with expo permissions. All of these apis and libraries made it easier to make a high level application in such a tight time frame. Overall, I used APIs, Location Services, Geolocation, Geocoding, Google Firebase, to create an application for people to connect, use data to make decisions to go to a certain location, alert other users around them for help and take action using petitions and the technologies provided in the application.

##Challenges I ran into

Some last second challenges I ran to was the manipulation of the database on Google Firebase. While creating the video in fact, I realize that some of the parameters were missing and were not being updated properly. I eventually realized that the naming conventions for the some of the parameters being updated both in the state and in firebase got mixed up. Unfortunately this took way to long and results in me having to cut the video up into two different sections. I stayed up until 1am and got it done. Thanks to all the great documentation and other tutorials I was able to effectively implement the rest. ##What I learned I learned a lot. Prior to this, I had not had experience with geolocation, geofencing and other location services which I found quite fascinating after I was able to fully learn them. I also learned how to upload large amounts of data to Google Firebase, which was easy with the help of tutorials, which I had previously thought was hard. Additionally, I learned new styling elements such as how to created rounded images and permissions to the images directory which I was not previously familiar with. At the beginning of this project, I did not think I would finish. However, I had learned that after you gain enough time with certain things and learn how to do it and push yourself to do it, you realize it is much easier than anticipated.

Theme and How This Promotes Social Good

Overall, this application was created in order to help reduce racial discrimination

##Design

I created a comprehensive and simple UI to make it easy for users to navigate and understand the purposes of the Application. Additionally, I used previously mentioned utilities in order to create a modern look.

What's next for HEARD (Helping Eliminate All Racial Discrimination) App

I hope to create an API endpoint for the algorithm I created in order to determined the estimated occurrences of racial discriminations and calculated risk level rather than having it on the app. In the long term, this will reduce complexity if the app becomes larger.

##How to Run It?

Download. Run 'Yarn install' after in the project and run 'react-native run-ios' or 'run-android' depending on your simulator and the app should begin installing on your simulator or emulator
# How I built it
I built this app using the hybrid application development platform called React Native. I used expo for faster testing and a better and managed workflow. I wrote this entire app in Javascript. Now to the construction of the main features of the app. For the Information feeds, I used a **News API with several endpoints** to gather information in relation to its respective topic by reliable sources. For the search page, I used **react-native-maps in order to gather the accurate location (long, lat, geolocation) of the user and create the maps UI**. Additionally, I used **Google Firebase as my backend** in order to store this data in a database where it would be accessible to the local authorities in real time. For the East people at a location and risk level , I used an **algorithm I created using multiple data points such as the population of the residing city**, the amount of users recorded in the database and density of the city. For the last page, I used individual reliable sources to provide Preparation resources to be ready for and prepared for emergency situations.

# Challenges I ran into
Overall, there were many challenges I faced over the course of this entire project. One of the earlier issues I had was in relation to the tracking of geolocation and using that data, uploading it to the backend and then redisplaying it onto the map. Although this may have not been visible during the demonstration, I wanted to ensure full functionality. The reason some of the data was not showing was due to my incorrect way of passing the props and setting state and overall scope of the project, which I eventually resolved. One of the other Issues I had was in relation to the News API feed which had multiple failed requests and was not pulling through. The issue, I eventually figured out, was due to the incorrect formatting and mapping of data, which did not load the data properly. Additionally, I wasn't assigning keys properly. 
# Accomplishments that I'm proud of
Some of the accomplishments I am proud of is creating the **algorithm to calculate risk level based on several data points such s population in the residing city, he amount of users recording in the database in that city and the density of the residing city.** I was also proud of creating an interface that was able to use locations and map this data to a backend. I am also proud of implementing my first multi-endpoint api in a react native app.
# What I learned
I learned a lot of new things during this entire project. I learned how to implement react-native-maps, how to implement some basic functionality's such as webview and deep linking, allowing me to access certain websites for resources in my prep resources tab and overall how to troubleshoot in low time constraints. Overall, this time constraint helped me work more efficiently and prioritize.
# What's next for In Case of an Emergency
In the future, I hope to host this algorithm on an API endpoint rather than on the app itself. Additionally, I would like to my own api endpoint for the resources since I am using a website webview at the moment. **I also would like to create more features in my backend such as alerting the app that you will be going somewhere to adjust the algorithm accordingly and have a lot more user input. I look forward to that in the future and hope this can help the overall community in such times.**
