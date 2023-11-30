# ThoughtSo
ThoughtSo is a cross-platform [React Native](https://reactnative.dev/docs/environment-setup) & [Expo](https://docs.expo.dev/) To Do List application. It is largely inspired by (but not a direct copy of) the tutorial by [the YouTube channel "Made With Matt"](https://www.youtube.com/watch?v=0kL6nhutjQ8) and made mainly with JavaScript.

## Description
This application functions like any other To-Do List. The user can type in anything in the input field and, upon pressing the "add" button (circle with a plus sign on it), the input text is added in as a task. The task can be deleted from the red 'x' button on each individual task. Each task also has a light yellow square that acts as the indicator for whether or not the task is completed. If it is, both the square and the text turn green. If it's then clicked again, it'll be marked as active again; and so on and so forth forever and ever. 

The app also has three different tabs: the main one is "All", which shows every task the user has input (and has not deleted) regardless of status. Then, there is "Active", which only shows all tasks that haven't been marked as completed. Similarly, the final tab titled "Completed" only displays the tasks the user has marked as complete (green). These tasks, too, can be deleted at any time.

The app will remember your choices even after refreshing. Even if you yourself do not remember.

## Step-by-step guide - *"How do I actually use this thing?"*

First, download the files to your own computer, and then navigate to the project via your preferred CLI (e.g.; `PS C:\Users\yourusernamehere> cd C:\Users\yourusernamehere\OneDrive\Files\GitHub\ThoughtSo\expoToDo`). Then type in the command `code .` to have the code open in Visual Studio Code, if that's the IDE you prefer to use and for troubleshooting `npm react-native doctor` works well.

Don't forget to check that you have all the pre-requisites downloaded from [React Native's official documentation](https://reactnative.dev/docs/environment-setup?guide=native#:~:text=Installing%20dependencies)! 

Once you've navigated to the directory of the project you're trying to run (`cd`[insert file path here]), you can run metro (`npm start`/`npx expo start`) and android/iOS (`npm run android`/`npx react-native run android`) (on two separate Command Prompt tabs), connecting your project to an emulator from Android Studio. 

Remember to check that your React Native, SDK, and Gradle versions are correct and work together!


## Tech stack
* [Android Studio](https://developer.android.com/studio)
  
* [Expo](https://docs.expo.dev/)
* [React Native](https://reactnative.dev/docs/environment-setup) & [React](https://react.dev/learn)
* [Redux](https://redux.js.org/)

## Status
The development of this project is complete for the foreseeable future. 
