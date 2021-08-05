import { renderHook } from '@testing-library/react-hooks'
import useUpdateEffect from './index'

describe('useUpdateEffect', () => {
  it('test useUpdate', () => {
    let initialState = 3
    const { rerender } = renderHook(() =>
      useUpdateEffect(() => {
        initialState = initialState + 1
      }),
    )
    expect(initialState).toEqual(3)
    rerender()
    expect(initialState).toEqual(4)
    rerender()
    expect(initialState).toEqual(5)
  })
  it('test useUpdate deps', () => {
    let initialState = 3
    const { rerender } = renderHook(() =>
      useUpdateEffect(() => {
        initialState = initialState + 1
      }, [initialState]),
    )
    initialState = 5
    rerender()
    expect(initialState).toEqual(6)
    initialState = 8
    rerender()
    expect(initialState).toEqual(9)
  })
})
