import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './tailwind.css'
import { Layout } from './components/Layout'
import { LandingPage } from './LandingPage'
import { GiftCardPage } from './pages/GiftCard'
import { PreCheckoutPage } from './pages/PreCheckoutPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gift-cards" element={<GiftCardPage />} />
          <Route path="/pre-checkout" element={<PreCheckoutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
