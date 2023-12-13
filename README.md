# ThoughtSo
ThoughtSo is a cross-platform [React Native](https://reactnative.dev/docs/environment-setup) & [Expo](https://docs.expo.dev/) To Do List application. It is largely inspired by (but not a direct copy of) the tutorial by [the YouTube channel "Made With Matt"](https://www.youtube.com/watch?v=0kL6nhutjQ8) and made mainly with JavaScript.

<img width="960" alt="todo list in android studio" src="https://github.com/luminietos/ThoughtSo/assets/77718358/f042a532-4c27-4736-932c-3e7bd1b8c407">

image alt: A screenshot of the to-do list app in Android Studio, exemplifying how it'd look on a mobile device. The title reads "Today's tasks", and above it are three different smaller, centered texts that act as the app's tabs when clicked. The tabs are: "All", "Active", and "Completed". Underneath the title are four three user-input tasks. These tasks, individually, read: "Cheese", "Milk", "Oranges", and "Bread". Underneath the tasks is the input field, which has placeholder text that reads "Write a task here". Next to the input field is a round button with the plus symbol on it, which acts as the submit button for the text the user has typed in the input field. The color palette is that of a dark mode. 


## Description
This application functions like any other To-Do List. The user can type in anything in the input field and, upon pressing the "add" button (circle with a plus sign on it), the input text is added in as a task. The task can be deleted from the red 'x' button on each individual task. Each task also has a light yellow square that acts as the indicator for whether or not the task is completed. If it is, both the square and the text turn green. If it's then clicked again, it'll be marked as active again; and so on and so forth forever and ever. 

The app also has three different tabs.

The main tab is "All", which shows every task the user has input (and has not deleted) regardless of status. 
![todo list all tab](https://github.com/luminietos/ThoughtSo/assets/77718358/d036a2c7-4e94-4ecd-aa88-9e245ad86ecd)

image alt: The landing page of the to-do list application titled "Today's tasks". The page has five different user-input tasks, two of which have been marked as completed, visualized by their checkboxes and the tasks' texts being green. 


Then, there is "Active", which only shows all tasks that haven't been marked as completed. 
![todo list active tab](https://github.com/luminietos/ThoughtSo/assets/77718358/5e475e6b-3215-4dc2-95ce-f4e4309f6f5b)

image alt: The "Active" tab of the app. It displays three out of the five aforementioned tasks, as only three were not marked as completed. 


Similarly, the final tab titled "Completed" only displays the tasks the user has marked as complete (green). These tasks, too, can be deleted at any time.

![todo list completed tab](https://github.com/luminietos/ThoughtSo/assets/77718358/063a6540-86bf-475e-b2f2-4053957e0558)

image alt: The final tab; the "Completed" tab. It displays the two tasks the user wrote that have been marked as compeleted (green). The first task reads "Deploy latest project", and the second simply reads "D&D" session. 


The app will remember your choices even after refreshing. Even if you yourself do not remember.

## Step-by-step guide - *"How do I actually use this thing?"*

First, download the files to your computer, and then navigate to the project via your preferred CLI (e.g.; `PS C:\Users\yourusernamehere> cd C:\Users\yourusernamehere\OneDrive\Files\GitHub\ThoughtSo\expoToDo`). Then type in the command `code .` to have the code open in Visual Studio Code, if that's the IDE you prefer to use, and for troubleshooting `npm react-native doctor` works well.

<img width="378" alt="todo list expo start example" src="https://github.com/luminietos/ThoughtSo/assets/77718358/ce8a4b9d-b8af-4ac6-bf64-c6441cad87c8">

image alt: A screenshot of Visual Studio Code's terminal on this project's directory, displaying what happens when you run the command: "npx expo start".


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
