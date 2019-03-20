import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo'

export const APP_STORAGE_KEY = 'FlashCards:decks'
export const NOTIFICATION_KEY = 'FlashCards:notifications'

const decks = {
  javascript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a Closure?",
        answer: "A closure is the combination of a function and the lexical environment within which that function was declared."
      },
      {
        question: "What is an advantage of asynchronous programming over synchronous?",
        answer: "Synchronous code is executed sequentially and blocks other tasks from running"
      },
      {
        question: "What is a pure function?",
        answer: "A pure function produces the same output given a certain input and produces no side effects."
      }
    ]
  },
  react: {
    title: "React",
    questions: [
      {
        question: "When would you use a Class Component over a Functional Component?",
        answer: "If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component."
      }
    ]
  }
}

export function getDecks() {
  return new Promise((res, rej) => {
    setTimeout( () => res({...decks}), 500)
  })
}


export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Study!',
    body: "Don't forget to study flashcards today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) { // check if set
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              // if we havn't set up notification but we have permission:
              Notifications.cancelAllScheduledNotificationsAsync()

              // tomorrow at 8:00
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)
              
              //create the notification
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}