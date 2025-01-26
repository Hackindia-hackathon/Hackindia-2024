import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { Briefcase, DollarSign, MapPin, Clock, Calendar, Users, Tag, Zap } from 'lucide-react'

export function PostJobPage() {
  const { toast } = useToast()
  const [jobType, setJobType] = useState("full-time")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating API call
    setTimeout(() => {
      const success = Math.random() > 0.5 // Randomly succeed or fail
      if (success) {
        toast({
          title: "Job Posted Successfully",
          description: "Your job has been successfully posted and is now live.",
          duration: 5000,
        })
      } else {
        toast({
          title: "Error Posting Job",
          description: "There was an error posting your job. Please try again.",
          variant: "destructive",
          duration: 5000,
        })
      }
    }, 1000)
  }

  return (
    <motion.div
      className="space-y-8 pt-24 px-6 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-3xl font-bold">Post a New Job</motion.h1>

      <form onSubmit={handleSubmit}>
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#1C1C3B] col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><Briefcase className="mr-2" /> Job Details</CardTitle>
              <CardDescription>Provide the main details about the job position.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g. Senior React Developer" required className="bg-[#2C2C4B] border-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your Company Name" required className="bg-[#2C2C4B] border-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="job-description">Job Description</Label>
                <Textarea id="job-description" placeholder="Describe the job role and responsibilities" required className="bg-[#2C2C4B] border-none min-h-[100px]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><MapPin className="mr-2" /> Location & Type</CardTitle>
              <CardDescription>Specify the job location and type.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. New York, NY" required className="bg-[#2C2C4B] border-none" />
              </div>
              <div className="space-y-2">
                <Label>Job Type</Label>
                <RadioGroup defaultValue="full-time" onValueChange={setJobType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-time" id="full-time" />
                    <Label htmlFor="full-time">Full-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="part-time" id="part-time" />
                    <Label htmlFor="part-time">Part-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="contract" id="contract" />
                    <Label htmlFor="contract">Contract</Label>
                  </div>
                </RadioGroup>
              </div>
              {jobType === "contract" && (
                <div className="space-y-2">
                  <Label htmlFor="contract-duration">Contract Duration (months)</Label>
                  <Input id="contract-duration" type="number" min="1" max="24" placeholder="e.g. 6" className="bg-[#2C2C4B] border-none" />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><DollarSign className="mr-2" /> Compensation</CardTitle>
              <CardDescription>Provide details about the job's compensation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="salary-range">Salary Range</Label>
                <div className="flex items-center space-x-2">
                  <Input id="salary-min" type="number" placeholder="Min" className="bg-[#2C2C4B] border-none" />
                  <span>-</span>
                  <Input id="salary-max" type="number" placeholder="Max" className="bg-[#2C2C4B] border-none" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Salary Visibility</Label>
                <Select defaultValue="visible">
                  <SelectTrigger className="w-full bg-[#2C2C4B] border-none">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visible">Visible to all</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                    <SelectItem value="negotiable">Show as Negotiable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="benefits" />
                <Label htmlFor="benefits">Include benefits package</Label>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><Users className="mr-2" /> Requirements & Skills</CardTitle>
              <CardDescription>Specify the requirements and skills for the job.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Slider
                  id="experience"
                  min={0}
                  max={15}
                  step={1}
                  defaultValue={[3]}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Minimum Education</Label>
                <Select defaultValue="bachelors">
                  <SelectTrigger id="education" className="w-full bg-[#2C2C4B] border-none">
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">Ph.D.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Required Skills</Label>
                <Textarea id="skills" placeholder="e.g. React, Node.js, TypeScript" className="bg-[#2C2C4B] border-none" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B] col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><Zap className="mr-2" /> Additional Information</CardTitle>
              <CardDescription>Provide any additional details about the job posting.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="remote-option" />
                <Label htmlFor="remote-option">Remote work option available</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="urgent-hiring" />
                <Label htmlFor="urgent-hiring">Urgent hiring</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="application-deadline">Application Deadline</Label>
                <Input id="application-deadline" type="date" className="bg-[#2C2C4B] border-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Textarea id="additional-notes" placeholder="Any other information you want to include" className="bg-[#2C2C4B] border-none" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-end space-x-2 mt-8">
          <Button variant="outline" type="button">Cancel</Button>
          <Button type="submit">Post Job</Button>
        </motion.div>
      </form>
    </motion.div>
  )
}