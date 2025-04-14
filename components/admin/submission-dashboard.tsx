
import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Submission {
  id: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  characterData: any
  aiAnalysis: any
  createdAt: string
}

export function SubmissionDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  async function fetchSubmissions() {
    const res = await fetch('/api/submissions')
    const data = await res.json()
    setSubmissions(data)
    setLoading(false)
  }

  async function handleApprove(id: string) {
    await fetch(`/api/submissions/${id}/approve`, { method: 'POST' })
    fetchSubmissions()
  }

  async function handleReject(id: string) {
    await fetch(`/api/submissions/${id}/reject`, { method: 'POST' })
    fetchSubmissions()
  }

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Character Submissions</h1>
      
      {loading ? (
        <p>Loading submissions...</p>
      ) : (
        submissions.map(submission => (
          <Card key={submission.id} className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {submission.characterData.name}
              </h3>
              <Badge>{submission.status}</Badge>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Submitted: {new Date(submission.createdAt).toLocaleDateString()}
            </div>
            
            {submission.aiAnalysis && (
              <div className="bg-muted p-2 rounded">
                <h4 className="font-medium">AI Analysis</h4>
                <p className="text-sm">{submission.aiAnalysis.analysis}</p>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={() => handleApprove(submission.id)}
                variant="default"
                disabled={submission.status !== 'PENDING'}
              >
                Approve
              </Button>
              <Button
                onClick={() => handleReject(submission.id)}
                variant="destructive"
                disabled={submission.status !== 'PENDING'}
              >
                Reject
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  )
}
