
import { getSubmissionsByUser } from '@/lib/services/character-service'

export default async function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your 0N1 Characters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Character cards will be rendered here */}
      </div>
    </div>
  )
}
