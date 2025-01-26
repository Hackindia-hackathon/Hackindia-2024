import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, ChevronLeft, ChevronRight, LogOut, Plus, Settings, Trophy, User, FileText, Briefcase, Book, Code, Award, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('news')
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-[#0A0A23] text-white">
      <motion.div
        className=" top-24 left-5 h-auto py-16 rounded-3xl bg-[#1C1C3B] z-10"
        initial={{ width: isSidebarOpen ? 250 : 60 }}
        animate={{ width: isSidebarOpen ? 250 : 60 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
        </Button>
        <nav className="flex flex-col p-4 gap-4">
          <Button variant="ghost" className="justify-start">
            <User className="mr-2" />
            {isSidebarOpen && "Profile"}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="justify-start">
                <Plus className="mr-2" />
                {isSidebarOpen && "Add"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button className="w-full">
                  <Award className="mr-2" />
                  Add Certificate
                </Button>
                <Button className="w-full">
                  <Code className="mr-2" />
                  Add Project
                </Button>
                <Button className="w-full">
                  <Book className="mr-2" />
                  Add Skill
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" className="justify-start" onClick={() => setIsHistoryOpen(true)}>
            <FileText className="mr-2" />
            {isSidebarOpen && "History"}
          </Button>
          <Button variant="ghost" className="justify-start">
            <Trophy className="mr-2" />
            {isSidebarOpen && "Leaderboard"}
          </Button>
          <Button variant="ghost" className="justify-start" onClick={() => setIsNotificationsOpen(true)}>
            <Bell className="mr-2" />
            {isSidebarOpen && "Notifications"}
          </Button>
           <a href="/settings" className="flex items-center justify-start group">
    <Settings className="mr-2" />
    {isSidebarOpen ? (
      "Settings"
    ) : (
      <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Settings
      </span>
    )}
  </a>
          <Button variant="ghost" className="justify-start mt-auto">
            <LogOut className="mr-2" />
            {isSidebarOpen && "Logout"}
          </Button>
        </nav>
      </motion.div>

      <main className="flex-1 pt-24 p-8 ml-[60px] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            className="col-span-full bg-[#1C1C3B] p-6 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Search Appear</h2>
            <div className="text-4xl font-bold">89.2%</div>
            <Progress value={89.2} className="mt-2" />
          </motion.div>
          
          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
              <CardDescription>Your verified certifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Award className="h-5 w-5 text-blue-500" />
                <span>Data Science Fundamentals</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Your latest projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-green-500" />
                <span>E-commerce Platform</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Code className="h-5 w-5 text-purple-500" />
                <span>Machine Learning Model</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Your top skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-red-500" />
                <span>JavaScript (Expert)</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <span>Python (Advanced)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle>Recent Endorsements</CardTitle>
              <CardDescription>Latest skill endorsements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe endorsed your React skills</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1C3B]">
            <CardHeader>
              <CardTitle>Job Matches</CardTitle>
              <CardDescription>Based on your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Senior Frontend Developer</span>
                  <span className="text-green-500">95% match</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data Scientist</span>
                  <span className="text-yellow-500">80% match</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="fixed bottom-4 right-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-[#1C1C3B]">
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="hiring">Hiring</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>
          <AnimatePresence>
            {activeTab && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1C1C3B] p-4 rounded-t-lg mt-2 w-[300px]"
              >
                <TabsContent value="news">
                  <h3 className="font-bold mb-2">Latest Industry News</h3>
                  <ul className="space-y-2">
                    <li>New AI breakthrough in natural language processing</li>
                    <li>Tech giants announce collaboration on quantum computing</li>
                  </ul>
                </TabsContent>
                <TabsContent value="hiring">
                  <h3 className="font-bold mb-2">Current Job Openings</h3>
                  <ul className="space-y-2">
                    <li>Senior React Developer at TechCorp</li>
                    <li>Machine Learning Engineer at AI Innovations</li>
                  </ul>
                </TabsContent>
                <TabsContent value="updates">
                  <h3 className="font-bold mb-2">Recent Platform Updates</h3>
                  <ul className="space-y-2">
                    <li>New skill assessment feature added</li>
                    <li>Improved project showcase functionality</li>
                  </ul>
                </TabsContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>
      </div>

      <Drawer open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Endorsement & Certification History</DrawerTitle>
            <DrawerDescription>Your recent achievements and endorsements</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="font-medium">Full Stack Development Certification</p>
                <p className="text-sm text-muted-foreground">Achieved on June 15, 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <User className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-medium">React Skills Endorsed by Jane Smith</p>
                <p className="text-sm text-muted-foreground">Received on July 2, 2023</p>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>Stay updated with your latest activities</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-4">
              <Bell className="h-8 w-8 text-green-500" />
              <div>
                <p className="font-medium">New job match: Senior Frontend Developer</p>
                <p className="text-sm text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="font-medium">You've reached the top 10% in React skills!</p>
                <p className="text-sm text-muted-foreground">Yesterday</p>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}