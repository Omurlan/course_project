import App from '@/app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/shared/config/i18n/i18n'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { SidebarProvider } from '@/app/providers/SidebarProvider'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(<BrowserRouter>
  <StoreProvider>
    <ErrorBoundary>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StoreProvider>
</BrowserRouter>)
export { Theme } from '@/shared/const/theme'
