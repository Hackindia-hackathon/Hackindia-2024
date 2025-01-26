'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function VerificationPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  const candidates = [
    { id: 1, name: "Alice Johnson", role: "Full Stack Developer", skills: ["React", "Node.js", "MongoDB"] },
    { id: 2, name: "Bob Smith", role: "Data Scientist", skills: ["Python", "Machine Learning", "SQL"] },
    { id: 3, name: "Carol Williams", role: "DevOps Engineer", skills: ["Docker", "Kubernetes", "AWS"] },
  ]

  return (
    <div className="space-y-6 pt-24 px-6 h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold"
      >
        Verification Requests
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {candidates.map((candidate, index) => (
          <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={`cursor-pointer transition-all bg-[#1C1C3B] ${
                selectedCandidate?.id === candidate.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedCandidate(candidate)}
            >
              <CardHeader className="flex flex-row items-center space-y-0">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${candidate.name.charAt(0)}`} alt={candidate.name} />
                  <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{candidate.name}</CardTitle>
                  <p className="text-sm text-gray-400">{candidate.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {selectedCandidate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 space-y-4"
        >
          <h2 className="text-xl font-semibold">Verify {selectedCandidate.name}</h2>
          <div className="space-y-2">
            {selectedCandidate.skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <Input type="checkbox" id={skill} className="w-4 h-4" />
                <label htmlFor={skill} className="text-gray-300">{skill}</label>
              </div>
            ))}
          </div>
          <Textarea placeholder="Add comments or feedback..." className="h-24 bg-[#1C1C3B] text-white" />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setSelectedCandidate(null)}>Cancel</Button>
            <Button>Submit Verification</Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}