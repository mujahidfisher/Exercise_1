let fs = require("fs")

fs.appendFile('data.txt', "Hi Mujahid!", function (err) {
    if (err){
        console.log("Yes! no errors!");
    console.log("There is a small error!");
    }
});

let content = "Lets go Jeol!"

fs.writeFile('data.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
});

fs.appendFile('data.txt', " Good Game!", function (err) {
    if (err){
        console.log("New content is added");
    }
});

// fs.writeFile will override what ever is on the file but fs.appendFile will just add the content with any previous content.
