import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { MainLayout } from "./layout/main-layout"
import { ProductDitail } from "./components/productDetile"
import ProfileLayout from "./layout/profile-layout"
import Obuna from "./profile/obuna-bo'lish"
import Xisob from "./profile/e-xisob"
import Kitoblarim from "./profile/kitoblarim"
import Saqlanganlar from "./profile/saqlanganlar"
import Sozlamalar from "./profile/sozlamalar"
import Profile from "./profile/obuna-bo'lish"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="obuna" element={<Obuna/>} />
            <Route path="e-xisob" element={<Xisob/>} />
            <Route path="kitob" element={<Kitoblarim />} />
            <Route path="saved" element={<Saqlanganlar />} />
            <Route path="sozlama" element={<Sozlamalar />} />
        </Route>

          <Route index element={<Home />}/>
          <Route path="product/:id" element={<ProductDitail />} />

          <Route path="*" element={<h1>NOT FOUND</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App