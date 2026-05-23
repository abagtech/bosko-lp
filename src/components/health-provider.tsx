'use client'

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react'

type HealthStatus = 'ok' | 'error'

interface HealthContextType {
  status: HealthStatus
  lastCheck: Date | null
}

const HealthContext = createContext<HealthContextType | undefined>(undefined)

export function HealthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<HealthStatus>('ok')
  const [lastCheck, setLastCheck] = useState<Date | null>(null)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('/api/health', {
          cache: 'no-store',
        })
        if (response.ok) {
          const data = await response.json()
          const newStatus = data.status === 'ok' ? 'ok' : 'error'
          setStatus(newStatus)
        } else {
          setStatus('error')
        }
      } catch (error) {
        setStatus('error')
      }
      setLastCheck(new Date())
    }

    checkHealth()
    const interval = setInterval(checkHealth, 60000)

    return () => clearInterval(interval)
  }, [])

  const value = useMemo(() => ({ status, lastCheck }), [status, lastCheck])

  return <HealthContext.Provider value={value}>{children}</HealthContext.Provider>
}

export function useHealth() {
  const context = useContext(HealthContext)
  if (!context) {
    return { status: 'ok' as HealthStatus, lastCheck: null }
  }
  return context
}
