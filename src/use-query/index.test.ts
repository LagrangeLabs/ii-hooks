import useQuery from './index'

describe('useQuery', () => {
  it('test useQuery return params', () => {
    const result = useQuery<{ a: string }>(`https://aiindeed.com?a=1`)
    expect(result.a).toEqual(`1`)
  })
  it('test useQuery return params 2', () => {
    const result = useQuery<{ a: string; b: string }>(
      `https://aiindeed.com?a=1&b=2`,
    )
    expect(result.a).toEqual(`1`)
    expect(result.b).toEqual(`2`)
  })
})
