const doTask = (iterations) => {
  return new Promise((resolve, reject) => {
    const numbers = [];

    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6",
        });
      }
    }

    resolve({
      error: false,
      value: numbers,
    });
  });
};

const veces = 6;
doTask(veces)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
