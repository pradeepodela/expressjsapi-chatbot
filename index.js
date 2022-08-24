const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/get", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
var d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51
struct = {
  'date': today,
  'time': `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
  'name':'',
  'url':'',
  'email':'',
  'phno':'',
  'service':''


}
app.post("/create", async (req, res) => {
  const data = req.body;
  // await User.add({ data });
  intent = data['queryResult']['intent']['displayName']
  if (intent == 'Default Welcome Intent - name - custom'){
    let name = data['queryResult']['parameters']['person']['name']
    struct['name'] = name
    // console.log('name:',name)
  }
  if (intent == 'Default Welcome Intent - url'){
    let url = data['queryResult']['parameters']['url']
        // console.log(`This is the url: ${url}`)
        struct['url'] = url
  }
  if (intent == 'Default Welcome Intent -email'){
    let email = data['queryResult']['parameters']['email']
        // console.log(`This is the email: ${email}`)
        struct['email'] = email
  }
  if (intent == 'Default Welcome Intent-service'){
    let service = data['queryResult']['queryText']
        // console.log(`This is the service: ${service}`)
        struct['service'] = service
  }
  if (intent == 'Default Welcome Intent-phno'){
    let phno = data['queryResult']['parameters']['phone-number']
        // console.log(`This is the phno: ${phno}`)
        struct['phno'] = phno
        await User.add(struct);
  
  console.log('----------------------------------------------------------------------------------------------');
  console.log(struct);
  console.log('----------------------------------------------------------------------------------------------');
  }

  res.send({ msg: "User Added" })

});

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   delete req.body.id;
//   const data = req.body;
//   await User.doc(id).add(data);
//   res.send({ msg: "Updated" });
// });

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await User.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });
app.listen(4000, () => console.log("Up & RUnning *4000"));
