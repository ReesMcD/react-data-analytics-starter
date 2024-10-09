import { createFileRoute } from '@tanstack/react-router'
import TeamPage from '../pages/team/TeamPage'

export const Route = createFileRoute('/team/$teamId')({
  component: TeamPage,
})
