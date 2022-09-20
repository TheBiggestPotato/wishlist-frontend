import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CreateList from "./pages/createList";
import { AuthProvider } from "./hooks/auth";
import Lists from "./pages/Lists";
import ListItem from "./pages/createItem";
import CreateGroup from "./pages/createGroup";
import ProtectedRoutes from "./hooks/protectedRoutes";
import Items from "./pages/Items";
import Groups from "./pages/Groups";
import InsideList from "./pages/insideList";
import InsideGroup from "./pages/insideGroup";
import EditList from "./pages/EditList";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/items/create" element={<ListItem />} />
            <Route path="/lists/create" element={<CreateList />} />
            <Route path="/groups/create" element={<CreateGroup />} />
            <Route path="/items" element={<Items />} />
            <Route path="/groups" element={<Groups />} />
            // path="/lists/:id"
            <Route path="/lists/:id" element={<InsideList />} />
            <Route path="/lists/:id/edit" element={<EditList />} />
            <Route path="/groups/:id" element={<InsideGroup />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
