# Retry Mechanism for Failed API Calls

## 📌 Problem Statement

Implement a robust retry mechanism to handle failed API calls.  
The goal is to simulate an unreliable API that may fail randomly and then build logic that automatically retries the request until it succeeds or until a maximum retry limit is reached.

## 🎯 Requirements

- Create a dummy API function that **randomly succeeds or fails**.
- Implement a **retry mechanism** that:
  - Accepts an API function to execute.
  - Retries the API call when it fails.
  - Stops retrying after a configurable number of attempts.
  - Waits for a configurable delay before each retry.
- Return the API response if any retry attempt succeeds.
- If all retries fail, return a meaningful error.
- Log retry attempts to the console (for debugging and visibility).

## 🧪 Expected Behavior

- The program should retry the API call on failures.
- If a retry attempt succeeds, return the successful response.
- If all retries fail, show an error such as:
  - Failed after 3 attempts: API failed due to network issue.
- Console output should clearly indicate each retry attempt.

## 🎯 Learning Goals

- Understand promise-based error handling in JavaScript.
- Practice implementing custom retry strategies.
- Simulate real-world scenarios involving flaky or unstable network calls.
- Write reusable utility functions.
