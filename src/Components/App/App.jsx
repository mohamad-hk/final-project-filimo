import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import Rooter from "../root/Rooter";
import Manage_Free_content from "../Admin/Pages/Manage_Free_content/Manage_Free_content";
import Manage_Online_Cinema from "../Admin/Pages/Manage_Online_Cinema/Manage_Online_Cinema";
import Edit_Item_Online_Cinema from "../Admin/Pages/Manage_Online_Cinema/Edit_Item_Online_Cinema/Edit_Item_Online_Cinema";
import Create_Item_Online_Cinema from "../Admin/Pages/Manage_Online_Cinema/Create_Item_Online_Cinema/Create_Item_Online_Cinema";
import Create_Item_Free_Content from "../Admin/Pages/Manage_Free_content/Create_Item_Free_Content/Create_Item_Free_Content";
import Edit_Item_Free_Content from "../Admin/Pages/Manage_Free_content/Edit_Item_Free_Content/Edit_Item_Free_Content";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rooter />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/free-content" element={<Manage_Free_content />} />
        <Route path="/admin/online-filimo" element={<Manage_Online_Cinema />} />
        <Route
          path="/admin/online-filimo/Edit_item"
          element={<Edit_Item_Online_Cinema />}
        />
        <Route
          path="/admin/online-filimo/Create_item"
          element={<Create_Item_Online_Cinema />}
        />
        <Route
          path="/admin/free-content/Edit_item"
          element={< Edit_Item_Free_Content />}
        />
        <Route
          path="/admin/free-content/Create_item"
          element={<Create_Item_Free_Content />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
