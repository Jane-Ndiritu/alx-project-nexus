# Polling System Backend — GraphQL + Subscriptions

This backend powers the real-time polling application.

## 🚀 Features
- Create polls
- Vote on polls
- Live updates via GraphQL subscriptions (pollUpdated)
- In-memory database (simple)
- Works with Apollo Client frontend

## 📦 Installation
npm install


## ▶ Run Development Server
npm run dev

## ▶ Build + Start
npm run build
npm start


## 🔗 GraphQL Endpoint
- HTTP: http://localhost:4000/graphql
- WebSocket: ws://localhost:4000/graphql

## 🧪 Sample Query
query {
getPoll {
question
options
votes
}
}


## 🧪 Create Poll Mutation
mutation {
createPoll(question: "Favourite food?", options: ["Pizza", "Burger"]) {
question
}
}


## 🧪 Vote Mutation
mutation {
vote(optionIndex: 0) {
votes
}
}



## 🧪 Subscription
subscription {
pollUpdated {
question
options
votes
}
}
