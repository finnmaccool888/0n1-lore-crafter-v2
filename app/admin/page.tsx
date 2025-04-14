
import { SubmissionDashboard } from '@/components/admin/submission-dashboard'

export default function AdminPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <SubmissionDashboard />
    </div>
  )
}
