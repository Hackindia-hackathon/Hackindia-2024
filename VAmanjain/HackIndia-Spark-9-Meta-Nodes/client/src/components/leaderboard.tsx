'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function LeaderboardPage() {
  const leaderboardData = [
    { rank: 1, name: "Dr. Jane Smith", role: "AI Researcher", endorsements: 1234, accuracy: 98.5 },
    { rank: 2, name: "Prof. Alex Johnson", role: "Data Scientist", endorsements: 1156, accuracy: 97.8 },
    { rank: 3, name: "Sarah Williams", role: "Cloud Architect", endorsements: 1098, accuracy: 97.2 },
    { rank: 4, name: "Michael Brown", role: "Cybersecurity Expert", endorsements: 987, accuracy: 96.9 },
    { rank: 5, name: "Emily Davis", role: "Blockchain Developer", endorsements: 943, accuracy: 96.5 },
  ]

  return (
    <div className="space-y-6 pt-24 px-6 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold"
      >
        Expert Leaderboard
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle>Top Endorsers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Endorsements</TableHead>
                  <TableHead className="text-right">Accuracy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((expert, index) => (
                  <motion.tr
                    key={expert.rank}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TableCell className="font-medium">
                      {expert.rank === 1 && <Badge className="mr-2">🥇</Badge>}
                      {expert.rank === 2 && <Badge className="mr-2">🥈</Badge>}
                      {expert.rank === 3 && <Badge className="mr-2">🥉</Badge>}
                      {expert.rank}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${expert.name.charAt(0)}`} alt={expert.name} />
                          <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {expert.name}
                      </div>
                    </TableCell>
                    <TableCell>{expert.role}</TableCell>
                    <TableCell className="text-right">{expert.endorsements.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{expert.accuracy}%</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle>Total Endorsements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5,418</p>
            <p className="text-sm text-gray-400">Across all experts this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle>Average Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">97.4%</p>
            <p className="text-sm text-gray-400">Overall endorsement accuracy</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle>Most Endorsed Skill</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">Machine Learning</p>
            <p className="text-sm text-gray-400">1,245 endorsements this month</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}