"use client"

import React, { FC, useState, useEffect, ReactNode } from "react"

interface ClientOnlyProps {
  children: ReactNode
}

const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return <>{children}</>
}

export default ClientOnly
