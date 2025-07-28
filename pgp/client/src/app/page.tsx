// page .tsx 

'use client'

import { useAuth } from './store/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
  const { token } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  }, [token, router])

  if (!token) return null // prevent flicker

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyApp!</h1>
      <p className="text-lg text-gray-700 mb-6">You are logged in 🎉</p>
      <button
        onClick={() => router.push('/dashboard')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Dashboard
      </button>
    </main>
  )
}
