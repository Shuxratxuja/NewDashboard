import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

const rootElement = document.getElementById('root')
const queryClient = new QueryClient()

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer/>
    </QueryClientProvider>
    </BrowserRouter>
  )
} else {
  console.error("Root element not found!")
}
