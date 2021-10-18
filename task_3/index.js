
function getUser(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    if (request.status === 200) {
      callback({
        status: request.status,
        data: JSON.parse(request.response),
      });
    } else {
      callback({
        status: request.status,
        url: url,
      });
    }
  });

  request.addEventListener("error", function () {
    callback({
      status: request.status,
    });
  });

  request.open("GET", url);

  request.send();
}

var urls = [
  "https://api.github.com/users/porsich",
  "https://api.github.com/users/vlecko",
];

var responses = [];

urls.forEach(function (url) {
  getUser(url, function (response) {
    responses.push(response);
  });
});

function wait(condition, callback) {
  setTimeout(() => {
    if (condition()) {
      callback();
    } else {
      wait(condition, callback);
    }
  }, 500);
}

wait(
  function () {
    return urls.length === responses.length;
  },
  function () {
    console.log(responses)
    console.log("Оба ответа получены");
  },
);
