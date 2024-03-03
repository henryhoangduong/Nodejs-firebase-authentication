const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./authentication-e289e-firebase-adminsdk-jvtvv-78e05d4e5e.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
    console.log(req.body)
    const userResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false
    });
res.json(userResponse)
})

app.post('/', (req, res) => {
    res.json({'message':"hello world"})
})



const Port = process.env.PORT || 8080;
app.listen(Port, () => {
  console.log(`Server is runnig on Port ${Port}`);
});
