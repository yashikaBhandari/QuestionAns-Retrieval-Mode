// src/app/dashboard/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../store/useAuth'

export default function DashboardPage() {
  const token = useAuth((state) => state.token)
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  }, [token])

  if (!token) return <div>Redirecting...</div>

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome to your Dashboard!</h1>
      <p>Your token is: {token}</p>
    </div>
  )
}
