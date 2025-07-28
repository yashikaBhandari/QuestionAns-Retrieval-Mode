// components / navbar.tsx

'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '../store/useAuth'

export default function Navbar() {
  const { token, setToken } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    setToken('')  // Use empty string instead of null
    router.push('/login')
  }

  if (!token) return null

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <span>MyApp</span>
      <button onClick={handleLogout} className="text-sm">Logout</button>
    </nav>
  )
}
