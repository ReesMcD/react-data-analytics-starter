import { createLazyFileRoute } from '@tanstack/react-router'
import Charts from '../pages/charts/Charts'

export const Route = createLazyFileRoute('/charts')({
  component: Charts,
})
