// src/app/signup/page.tsx

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", { email, password },{ withCredentials: true })
      alert('Signup successful! Please login.')
      router.push('/login')
    } catch (err) {
      console.error('Signup failed:', err)
      alert('Signup failed. Please try again.')
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="flex bg-white shadow-lg rounded-xl overflow-hidden w-[80%] max-w-4xl">
        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src="/aiimage.jpg"
            alt="Signup"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 space-y-5">
          <h2 className="text-3xl font-bold text-center text-indigo-700">Create Account</h2>
          <p className="text-center text-gray-500">Join us and get started</p>

          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-700 text-black"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-700 text-black"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-indigo-600 text-black py-2 rounded-md hover:bg-indigo-700 transition"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
