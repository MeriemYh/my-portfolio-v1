'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { RxArrowLeft } from 'react-icons/rx'

const BackButton: React.FC = () => {
  const router = useRouter()

  return (
    <Button 
      className="fixed left-4  gap-2 rounded-full z-50 bg-background/80 backdrop-blur-sm shadow-md" 
      variant="ghost" 
      onClick={() => router.back()}
      aria-label="Go back"
    >
      <RxArrowLeft className="h-4 w-4" />
    </Button>
  )
}

export default BackButton