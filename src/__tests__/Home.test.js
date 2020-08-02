import Home from '../pages/Home.svelte'
import { render } from '@testing-library/svelte'

test('it works', () => {
  const wrap = render(Home)
  expect(wrap.textContent).toBe('2')
})