import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { useState } from "react";
import NavBar from "./components/NavBar";

const users = [
  {
    name: "Sandhya Devi",
    email: "sandhya02999@gmail.com",
    pic: "https://i.pinimg.com/originals/eb/38/42/eb384216915f5df11d140454e605c05a.jpg",
    id: "1",
  },
  {
    name: "Nivish",
    email: "nivish@gmail.com",
    pic: "https://th.bing.com/th/id/R.9af16829ff96a7a07af3deb783415d47?rik=%2b6GDPGLzqa8xcw&riu=http%3a%2f%2fstatic.tumblr.com%2fuuu6po7%2f94bm9vuc0%2fandrew-garfield-golden-globes-2011-01.jpg&ehk=lG7mCe%2b%2fitE9tDI6boa5RRoTwYbrrnfXjV6wut%2bQ13w%3d&risl=&pid=ImgRaw&r=0",
    id: "2",
  },
  {
    name: "Nandhini",
    email: "Creola55@hotmail.com",
    pic: "https://i.pinimg.com/originals/eb/38/42/eb384216915f5df11d140454e605c05a.jpg",
    id: "3",
  },
  {
    name: "Dhuruv",
    email: "dhuruv02@gmail.com",
    pic: "https://th.bing.com/th/id/R.66b4118ef4e591e84ef9298e646022a8?rik=mpWg7HcRiTnm%2fA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f13500000%2f-Boy-A-Portrait-Shoot-andrew-garfield-13530838-1707-2560.jpg&ehk=ulpUIrJRDnIzqf5rayhlSzFDENcNMTNlcSQuPLNzOW0%3d&risl=&pid=ImgRaw&r=0",
    id: "4",
  },
  {
    name: "Priya",
    email: "priya@gmail.com",
    pic: "https://i.pinimg.com/originals/ac/e3/89/ace389179f687fb5e0530054e624d712.jpg",
    id: "5",
  },
];

function App() {
  const [userList, setUserList] = useState(users);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home
              users={userList}
              userList={userList}
              setUserList={setUserList}
            />
          </Route>
          <Route path="/adduser">
            <AddUser userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="/edit/:id">
            <EditUser userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="/profile/:id">
            <Profile userList={userList} />
          </Route>
          <Route path="/editprofile/:id">
            <EditProfile userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="**" exact>
            <h2>404</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;