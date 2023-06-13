import { render } from 'react-dom'
import App from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { SidebarProvider } from 'app/providers/SidebarProvider'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>

    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
)
