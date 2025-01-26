import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Plus,
  Settings,
  Trophy,
  User,
  FileText,
  Briefcase,
  Book,
  Code,
  Award,
  TrendingUp,
  MessageSquare,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

export function DashboardComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("news");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen pt-24 bg-[#0A0A23] text-white">
      {/* <motion.div
        className="fixed top-24 left-0 h-[85vh] bg-[#1C1C3B] z-10 flex flex-col rounded-r-3xl"
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
        <nav className="flex flex-col p-4 gap-4 mt-16">
      
          <a href="/profile" className="flex items-center justify-start group">
            <User className="mr-2" />
            {isSidebarOpen ? (
              "Profile"
            ) : (
              <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Profile
              </span>
            )}
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center justify-start group"
              >
                <Plus className="mr-2" />
                {isSidebarOpen ? (
                  "Add"
                ) : (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#2D2D5B] text-white rounded-2xl">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4   ">
                <Button className="w-full bg-[#3D3D7B] hover:bg-[#4D4D8B] rounded-2xl">
                  <Award className="mr-2" />
                  Add Certificate
                </Button>
                <Button className="w-full bg-[#3D3D7B] hover:bg-[#4D4D8B] rounded-2xl">
                  <Code className="mr-2" />
                  Add Project
                </Button>
                <Button className="w-full bg-[#3D3D7B] hover:bg-[#4D4D8B] rounded-2xl">
                  <Book className="mr-2" />
                  Add Skill
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="justify-start group"
                onClick={() => setIsHistoryOpen(true)}
              >
                <FileText className="mr-2" />
                {isSidebarOpen ? (
                  "History"
                ) : (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    History
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <h2 className="text-lg font-semibold mb-4">History</h2>
              <div className="space-y-4">
                <div className="bg-[#2C2C4B] p-3 rounded-xl">
                  <p className="font-semibold">New endorsement received</p>
                  <p className="text-sm text-gray-400">2 hours ago</p>
                </div>
                <div className="bg-[#2C2C4B] p-3 rounded-xl">
                  <p className="font-semibold">Certificate approved</p>
                  <p className="text-sm text-gray-400">1 day ago</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <a
            href="/leaderboard"
            className="flex items-center justify-start group"
          >
            <Trophy className="mr-2" />
            {isSidebarOpen ? (
              "Leaderboard"
            ) : (
              <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Leaderboard
              </span>
            )}
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Bell className="mr-2" /> {isSidebarOpen && "Notifications"}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <h2 className="text-lg font-semibold mb-4">Notifications</h2>
              <div className="space-y-4">
                <div className="bg-[#2C2C4B] p-3 rounded-xl">
                  <p className="font-semibold">New endorsement received</p>
                  <p className="text-sm text-gray-400">2 hours ago</p>
                </div>
                <div className="bg-[#2C2C4B] p-3 rounded-xl">
                  <p className="font-semibold">Certificate approved</p>
                  <p className="text-sm text-gray-400">1 day ago</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

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
          <Button variant="ghost" className="justify-start mt-auto group">
            <LogOut className="mr-2" />
            {isSidebarOpen ? (
              "Logout"
            ) : (
              <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Logout
              </span>
            )}
          </Button>
        </nav>
      </motion.div> */}

<motion.div
  className="fixed top-24 left-0 h-[85vh] bg-[#1C1C3B] z-10 flex flex-col rounded-r-3xl"
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
  
  <nav className="flex flex-col p-4 gap-4 mt-16">
    <a href="/profile" className="flex items-center justify-start group">
      <User className="mr-2" />
      {isSidebarOpen ? (
        "Profile"
      ) : (
        <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Profile
        </span>
      )}
    </a>

    <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="flex px-0 items-center justify-start group"
              >
                <Plus className="mr-2" />
                {isSidebarOpen ? (
                  "Add"
                ) : (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#2D2D5B] text-white rounded-2xl">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <a href="/certificate-submission" className="flex justify-center  py-4 w-full bg-[#3D3D7B] hover:bg-[#4D4D8B] rounded-2xl">
                  <Award className="mr-2" />
                  Add Certificate
                </a>
                <a href="/" className="flex justify-center  py-4 w-full bg-[#3D3D7B] hover:bg-[#4D4D8B] rounded-2xl">
                  <Code  className="mr-2" />
                  Add Project
                </a>
                <a href="/" className="flex justify-center  py-4 w-full bg-[#3D3D7B] hover:bg-[#4D4D8B] rounded-2xl">
                  <Book className="mr-2" />
                  Add Skill
                </a>
              </div>
            </DialogContent>
          </Dialog>

    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="flex px-0 items-center justify-start group"
          onClick={() => setIsHistoryOpen(true)}
        >
          <FileText className="mr-2" />
          {isSidebarOpen ? (
            "History"
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              History
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <h2 className="text-lg font-semibold mb-4">History</h2>
        <div className="space-y-4">
          <div className="bg-[#2C2C4B] p-3 rounded-xl">
            <p className="font-semibold">New endorsement received</p>
            <p className="text-sm text-gray-400">2 hours ago</p>
          </div>
          <div className="bg-[#2C2C4B] p-3 rounded-xl">
            <p className="font-semibold">Certificate approved</p>
            <p className="text-sm text-gray-400">1 day ago</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>

    <a href="/leaderboard" className="flex items-center justify-start group">
      <Trophy className="mr-2" />
      {isSidebarOpen ? (
        "Leaderboard"
      ) : (
        <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Leaderboard
        </span>
      )}
    </a>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex px-0 items-center justify-start group mb-2">
          <Bell className="mr-2" /> {isSidebarOpen && "Notifications"}
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="bg-[#2C2C4B] p-3 rounded-xl">
            <p className="font-semibold">New endorsement received</p>
            <p className="text-sm text-gray-400">2 hours ago</p>
          </div>
          <div className="bg-[#2C2C4B] p-3 rounded-xl">
            <p className="font-semibold">Certificate approved</p>
            <p className="text-sm text-gray-400">1 day ago</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>

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

    {/* Logout Button */}
    <Button variant="ghost" className=" px-0 justify-start mt-auto group">
      <LogOut className="mr-2" />
      {isSidebarOpen ? (
        "Logout"
      ) : (
        <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Logout
        </span>
      )}
    </Button>

  </nav>
</motion.div>

      <main
        className={`flex-1 p-8 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "ml-[250px]" : "ml-[60px]"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          <motion.div
            className="col-span-full bg-[#1C1C3B] p-6 rounded-3xl"
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
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="@johndoe"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">
                    John Doe endorsed your React skills
                  </p>
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

          <Card className="bg-[#1C1C3B] col-span-full">
            <CardHeader>
              <CardTitle>Skill Progress</CardTitle>
              <CardDescription>
                Your skill improvement over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1C1C3B",
                        border: "none",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Bottom Right Popovers */}
      <div className="fixed bottom-4 right-4 flex space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-full">
              <MessageSquare className="h-4 w-4" /> News
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-[#1C1C3B] border-none rounded-2xl mb-2 mx-4">
            <h3 className="font-semibold mb-2">News</h3>
            <div className="space-y-2">
              <p className="text-sm">
                New AI course available: "Introduction to Machine Learning"
              </p>
              <p className="text-sm">
                Upcoming webinar: "Blockchain in Enterprise Applications"
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-full">
              <Info className="h-4 w-4" /> Hiring
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-[#1C1C3B] border-none rounded-2xl mb-2 mx-4">
            <h3 className="font-bold mb-2">Current Job Openings</h3>
            <ul className="space-y-2">
              <li>Senior React Developer at TechCorp</li>
              <li>Machine Learning Engineer at AI Innovations</li>
            </ul>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-full ">
              <Info className="h-4 w-4" /> Updates
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-[#1C1C3B] border-none rounded-2xl mb-2 mx-4">
            <h3 className="font-semibold mb-2">Updates</h3>
            <div className="space-y-2">
              <p className="text-sm">
                Platform maintenance scheduled for next week
              </p>
              <p className="text-sm">
                New feature: Skill endorsement verification
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* <Drawer open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
        <DrawerContent className="bg-[#1C1C3B] text-white">
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
              <Button variant="outline" className="bg-[#3D3D7B] hover:bg-[#4D4D8B] text-white">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
        <DrawerContent className="bg-[#1C1C3B] text-white">
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
              <Button variant="outline" className="bg-[#3D3D7B] hover:bg-[#4D4D8B] text-white">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </div>
  );
}
