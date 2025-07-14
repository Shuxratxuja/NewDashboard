import React, { ReactNode, useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Dashboard from "./_root/pages/Dashboard"
import Login from "./_auth/forms/Login"
import NotFound from "./components/NotFound"
import { AuthProvider, AuthContex } from "./context/AuthContex"
import RootLayout from "./_root/RootLayout"
import Socials from './_root/pages/Socials/Socials'
import Projects from './_root/pages/Projects'
import Skills from './_root/pages/Skills/Skills'
import AuthLayout from "./_auth/AuthLayout"
import { RingLoader } from "react-spinners"

type PrivateRouteProps = {
  children: ReactNode
}



const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement => {
  const { isAuthenticated, isLoading } = useContext(AuthContex)

  if (isLoading) {
    return <div className="w-full h-[100vh] flex justify-center items-center"><RingLoader/></div>
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />
}

function App(): React.ReactElement {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          element={
            <PrivateRoute>
              <RootLayout />
            </PrivateRoute>
          }
        >
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
