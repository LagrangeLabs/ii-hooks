import { useEffect } from 'react'

const useMountEffect = (fn: () => void) => {
  useEffect(() => {
    fn()
  }, [])
}

export default useMountEffect
