'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Start muted
  const [volume, setVolume] = useState(0.5)
  const [showControls, setShowControls] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [needsInteraction, setNeedsInteraction] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current
      
      // Set initial properties
      audio.volume = volume
      audio.muted = true // Start muted for autoplay
      
      const handleLoadedData = () => {
        console.log('Audio loaded successfully')
        setIsLoaded(true)
        setError(null)
        // Try autoplay immediately when loaded
        setTimeout(() => tryAutoplay(), 100)
      }
      
      const handleCanPlay = () => {
        console.log('Audio can play')
        setIsLoaded(true)
        setError(null)
        // Try autoplay when ready
        setTimeout(() => tryAutoplay(), 100)
      }
      
      const handleError = (e: Event) => {
        const audioElement = e.target as HTMLAudioElement
        let errorMsg = 'Unknown error'
        
        if (audioElement.error) {
          switch (audioElement.error.code) {
            case MediaError.MEDIA_ERR_ABORTED:
              errorMsg = 'Playback aborted'
              break
            case MediaError.MEDIA_ERR_NETWORK:
              errorMsg = 'Network error'
              break
            case MediaError.MEDIA_ERR_DECODE:
              errorMsg = 'Decode error - file format may not be supported'
              break
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
              errorMsg = 'Audio format not supported'
              break
          }
        }
        
        console.error('Audio error:', errorMsg, audioElement.error)
        setError(errorMsg)
        setIsLoaded(false)
        setIsPlaying(false)
      }
      
      const handleEnded = () => {
        console.log('Audio ended')
        // Auto replay
        if (audio) {
          audio.currentTime = 0
          audio.play().catch(err => console.log('Replay error:', err))
        }
      }
      
      const handlePlay = () => {
        console.log('Audio playing')
        setIsPlaying(true)
      }
      
      const handlePause = () => {
        console.log('Audio paused')
        setIsPlaying(false)
      }
      
      audio.addEventListener('loadeddata', handleLoadedData)
      audio.addEventListener('canplay', handleCanPlay)
      audio.addEventListener('error', handleError)
      audio.addEventListener('ended', handleEnded)
      audio.addEventListener('play', handlePlay)
      audio.addEventListener('pause', handlePause)
      
      // Try to load and play immediately
      audio.load()
      
      // Multiple autoplay attempts
      const attemptAutoplay = () => {
        if (!isPlaying) {
          tryAutoplay()
        }
      }
      
      // Try autoplay after short delays
      const timers = [
        setTimeout(attemptAutoplay, 500),
        setTimeout(attemptAutoplay, 1000),
        setTimeout(attemptAutoplay, 2000)
      ]
      
      return () => {
        audio.removeEventListener('loadeddata', handleLoadedData)
        audio.removeEventListener('canplay', handleCanPlay)
        audio.removeEventListener('error', handleError)
        audio.removeEventListener('ended', handleEnded)
        audio.removeEventListener('play', handlePlay)
        audio.removeEventListener('pause', handlePause)
        timers.forEach(timer => clearTimeout(timer))
      }
    }
  }, [])

  // Autoplay function - always start muted
  const tryAutoplay = async () => {
    if (!audioRef.current) return
    
    const audio = audioRef.current
    
    // Don't try if already playing
    if (!audio.paused) {
      console.log('Audio already playing')
      return
    }
    
    try {
      console.log('Starting autoplay with muted audio...')
      audio.muted = true
      audio.volume = volume
      
      const playPromise = audio.play()
      
      if (playPromise !== undefined) {
        await playPromise
        console.log('✓ Autoplay successful (muted)')
        setIsPlaying(true)
        setIsMuted(true)
        setError(null)
        setNeedsInteraction(true)
      }
    } catch (err: any) {
      console.error('✗ Autoplay failed:', err.name, err.message)
      
      // Try one more time with explicit muted
      try {
        audio.muted = true
        audio.volume = 0
        await audio.play()
        console.log('✓ Autoplay successful on retry')
        setIsPlaying(true)
        setIsMuted(true)
        setError('Click anywhere to hear music')
        setNeedsInteraction(true)
      } catch (retryErr) {
        console.error('✗ Retry failed:', retryErr)
        setError('Click anywhere to start music')
        setNeedsInteraction(true)
      }
    }
  }

  // Listen for ANY user interaction to unmute
  useEffect(() => {
    if (needsInteraction && isPlaying && isMuted) {
      const handleInteraction = () => {
        if (audioRef.current && isMuted) {
          console.log('User interacted, unmuting audio')
          audioRef.current.muted = false
          audioRef.current.volume = volume
          setIsMuted(false)
          setNeedsInteraction(false)
          setError(null)
        }
      }

      // Listen for any interaction on the entire document
      const events = ['click', 'keydown', 'touchstart', 'scroll', 'mousemove']
      events.forEach(event => {
        document.addEventListener(event, handleInteraction, { once: true, passive: true })
      })

      return () => {
        events.forEach(event => {
          document.removeEventListener(event, handleInteraction)
        })
      }
    }
  }, [needsInteraction, isPlaying, isMuted, volume])

  // Global autoplay trigger on any interaction (backup strategy)
  useEffect(() => {
    const handleGlobalInteraction = () => {
      if (!isPlaying && audioRef.current) {
        console.log('Global interaction detected, trying to play')
        tryAutoplay()
      }
    }

    // Add listeners for first interaction
    document.addEventListener('click', handleGlobalInteraction, { once: true })
    document.addEventListener('touchstart', handleGlobalInteraction, { once: true })
    document.addEventListener('keydown', handleGlobalInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleGlobalInteraction)
      document.removeEventListener('touchstart', handleGlobalInteraction)
      document.removeEventListener('keydown', handleGlobalInteraction)
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = async () => {
    if (!audioRef.current) return
    
    try {
      if (isPlaying) {
        console.log('Pausing audio...')
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        console.log('Playing audio...')
        // Reset audio if ended
        if (audioRef.current.ended) {
          audioRef.current.currentTime = 0
        }
        
        // Unmute if user manually clicks play
        if (audioRef.current.muted) {
          audioRef.current.muted = false
          setIsMuted(false)
          setNeedsInteraction(false)
        }
        
        // Try to play
        const playPromise = audioRef.current.play()
        
        if (playPromise !== undefined) {
          await playPromise
          console.log('Audio started successfully')
          setIsPlaying(true)
          setError(null)
        }
      }
    } catch (err: any) {
      console.error('Play error:', err)
      let errorMsg = 'Failed to play audio'
      
      if (err.name === 'NotAllowedError') {
        errorMsg = 'Browser blocked autoplay - click play again'
      } else if (err.name === 'NotSupportedError') {
        errorMsg = 'Audio format not supported by browser'
      }
      
      setError(errorMsg)
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted
      audioRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      
      if (!newMutedState) {
        setNeedsInteraction(false)
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      if (newVolume > 0) {
        audioRef.current.muted = false
        setIsMuted(false)
        setNeedsInteraction(false)
      }
    }
    if (newVolume === 0) {
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        muted
      >
        <source src="/musik.mpeg" type="audio/mpeg" />
        <source src="/musik.mpeg" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <AnimatePresence mode="wait">
            {showControls && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 space-y-3 w-64"
              >
                {/* Title */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Music size={16} className="text-primary-500" />
                    <span className="text-sm font-semibold text-gray-700">Background Music</span>
                  </div>
                  <button
                    onClick={() => setShowControls(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    aria-label="Minimize"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                {/* Status */}
                {needsInteraction && isPlaying && isMuted && (
                  <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded animate-pulse">
                    Click anywhere to start music
                  </div>
                )}
                
                {error && !needsInteraction && (
                  <div className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">
                    {error}
                  </div>
                )}
                
                {!error && !isLoaded && (
                  <div className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    Loading audio...
                  </div>
                )}
                
                {!error && isLoaded && !isPlaying && !needsInteraction && (
                  <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    Ready to play
                  </div>
                )}
                
                {isPlaying && !isMuted && !needsInteraction && (
                  <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    Now playing
                  </div>
                )}

                {/* Controls */}
                <div className="flex items-center space-x-3">
                  {/* Play/Pause Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    disabled={!isLoaded || !!error}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all ${
                      (!isLoaded || error) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause size={20} fill="white" />
                    ) : (
                      <Play size={20} fill="white" className="ml-0.5" />
                    )}
                  </motion.button>

                  {/* Volume Control */}
                  <div className="flex items-center space-x-2 flex-1">
                    <button
                      onClick={toggleMute}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX size={20} />
                      ) : (
                        <Volume2 size={20} />
                      )}
                    </button>
                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #0891b2 0%, #0891b2 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
                        }}
                        aria-label="Volume"
                      />
                      <div className="text-xs text-gray-500 text-center mt-1">
                        {Math.round(volume * 100)}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Playing Indicator */}
                {isPlaying && (
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-primary-500 rounded-full"
                        animate={{
                          height: [8, 16, 8],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Minimized Button */}
          {!showControls && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setShowControls(true)}
              className="p-4 hover:bg-gray-50 transition-colors"
              aria-label="Show controls"
            >
              <div className="flex items-center space-x-2">
                {isPlaying ? (
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-5 bg-primary-500 rounded-full"
                        animate={{
                          height: [12, 20, 12],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <Music size={20} className="text-gray-400" />
                )}
              </div>
            </motion.button>
          )}
        </div>
      </motion.div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #0891b2;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: all 0.2s;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #0891b2;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: all 0.2s;
        }

        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </>
  )
}
