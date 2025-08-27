"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  src: string
  className?: string
}

export function AudioPlayer({ src, className = "" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration)
        setIsLoading(false)
      }
    }
    const handleEnded = () => setIsPlaying(false)
    const handleError = (e: Event) => {
      console.error('Audio error:', e)
      setError('Failed to load audio')
      setIsLoading(false)
    }
    const handleLoadStart = () => {
      setError(null)
      setIsLoading(true)
    }
    const handleCanPlay = () => {
      updateDuration()
    }
    const handleLoadedMetadata = () => {
      updateDuration()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)
    audio.addEventListener('loadstart', handleLoadStart)

    // Try to load duration immediately if already available
    if (audio.readyState >= 1) {
      updateDuration()
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('loadstart', handleLoadStart)
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.error('Playback error:', err)
      setError('Playback failed')
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time) || time === Infinity) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  if (error) {
    return (
      <div className={`flex items-center space-x-3 bg-red-50 rounded-lg px-3 py-2 ${className}`}>
        <div className="text-red-600 text-sm">{error}</div>
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-3 bg-gray-100 rounded-lg px-3 py-2 ${className}`}>
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-8 h-8 text-black hover:opacity-80 transition-opacity"
        disabled={!!error}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
      
      <div className="flex items-center space-x-2 text-sm text-gray-700 min-w-[80px]">
        <span>{formatTime(currentTime)}</span>
        <span>/</span>
        <span>{isLoading ? "..." : formatTime(duration)}</span>
      </div>
      
      <div className="flex-1 bg-white rounded-full h-2 relative">
        <div 
          className="bg-gray-600 h-2 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  )
}
