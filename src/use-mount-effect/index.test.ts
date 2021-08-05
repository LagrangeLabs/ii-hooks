import { renderHook } from '@testing-library/react-hooks'
import useMountEffect from './index'

describe('useMountedEffect', () => {
  it('test useMounted', () => {
    const hook = renderHook(() => useMountEffect(jest.fn()))
    hook.unmount()
  })
})
