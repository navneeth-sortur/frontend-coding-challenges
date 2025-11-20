const unstableApi = () => {
  return new Promise((resolve, reject) => {
    const chance = Math.random();

    setTimeout(() => {
      if (chance < 0.5) {
        reject("API failed due to network issue");
      } else {
        resolve({ message: "API success!", chance });
      }
    }, 500);
  });
};

const withRetry = async (fn, retries = 3, baseDelay = 1000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === retries) {
        throw new Error(`Failed after ${retries} attempts: ${err}`);
      }
      const delay = baseDelay * Math.pow(2, attempt - 1); // using exponential backoff here
      console.log(
        `Attempt ${attempt} failed: ${err} \n Retrying in ${delay}ms...`
      );

      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

module.exports = { unstableApi, withRetry };
