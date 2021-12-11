## The packages used:
- [React](https://reactjs.org/) A JavaScript library for building user interfaces.
- [axios](https://www.npmjs.com/package/axios) is a promise based HTTP client for the browser and node.js.
- [redux](https://www.npmjs.com/package/redux) is a predictable state container for JavaScript apps.
- [react-redux](https://www.npmjs.com/package/react-redux) is a React bindings for Redux.
- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension) is a debugging platform for Redux apps.
- [react-icons](https://react-icons.github.io/react-icons/) Include popular icons in your React projects easily with react-icons.
- [sweetalert2](https://sweetalert2.github.io/) A Beautiful, Responsive, Customizable, Accessible (Wai-aria) Replacement For Javascript's Popup Boxes.


## Description
**The description** 
It is a link between backend and frontend and fetching the task from Mongoose Data Base, and before all that, you have to register and login to view your Post


## How to use
- **Signup:** At first, you need to register a new account
- **Login:** As a user I can login to the platform so that I can log my exit points
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add a new post** You can create as many stickers as you want
- **Edit post** You can also add if you add a task and want to modify it
- **delete post** As a user I can add players to a tournament
- **like with post** If you like the post or for an experiment, you can like the post
- **comment post** Write a comment under the photo or post
 


## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | SplashPage           | public `<Route>`           | Home page                                                    |
| `//resgister`    | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup|
| `/login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
|  `/postdelet/id` |  delete task         |                            |                                                              |
| `/post`         |ShowAllTasksForTheUser| user only `<PrivateRoute>` |   Delete exit                                             |
| `/post`          | add a task           | user only `<PrivateRoute>` | Details of a exit  to edit                             |
|`/postsupdeta/id` | Editing the task     | user only `<PrivateRoute>` | Edits a exit                                          |


## components

**login**
**register**
**post**

## UML Diagram (Front-end)
![Diagram-Page-5 drawio](https://user-images.githubusercontent.com/92248175/145694558-c07c92eb-fdfe-47cb-b813-b08d824f3482.png)


# Server / Backend
## Models
schema post

``` 
{
const mongoose = require("mongoose");

const post = new mongoose.Schema({
  img: { type: String },
  desc: { type: String, require: true },
  time: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", post);

}
```




schema user

``` 
{

const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  img: { type: String },
  isDelet: { type: Boolean, default: false },
  verified: { type: Boolean, default: false, },
  resetLink: { type: String, default: '' },
  role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
});


module.exports = mongoose.model("User", user);

}
```



schema role

``` 
{
const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: { type: String },
  permossion: { type: Array },
});
module.exports = mongoose.model("Role", role);
}
```


schema like

``` 
{
const mongoose = require("mongoose");


const like = new mongoose.Schema({
  like: { type: Boolean, default: false },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});


module.exports = mongoose.model("Like", like);

}
```
