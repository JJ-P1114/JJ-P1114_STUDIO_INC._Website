// app/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server"

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold">Bonjour, {user.firstName} 👋</h1>
      <p className="mt-4 text-gray-700">Bienvenue dans ton espace personnel sécurisé.</p>
    </div>
  )
}
