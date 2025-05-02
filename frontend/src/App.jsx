import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { AuthProvider } from "../src/context/auth"
import { SearchBlogProvider } from "./context/searchBlog"

function App() {
  return (
    <SearchBlogProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </SearchBlogProvider>
  )
}

export default App
