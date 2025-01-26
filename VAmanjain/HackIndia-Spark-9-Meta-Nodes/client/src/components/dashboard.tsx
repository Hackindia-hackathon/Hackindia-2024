import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Search,
  User,
  FileCheck,
  Briefcase,
  Award,
  MessageSquare,
  Info,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";

export function DashboardComponentEmployer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen pt-24 bg-[#0A0A23] text-white">
      {/* Sidebar */}
    

  <motion.div
    className="fixed left-0 top-24 h-[85vh] bg-[#1C1C3B] z-10 overflow-hidden rounded-r-3xl"
    initial={{ width: 256 }}
    animate={{ width: isSidebarOpen ? 256 : 64 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col h-full p-4">
      <div className="flex items-center mb-8">
        {isSidebarOpen && (
          <h1 className="text-2xl font-bold mr-4">Dashboard</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
        >
          {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
      <nav className="flex-grow">
        <Button variant="ghost" className="w-full justify-start mb-2 px-0">
          <User className="mr-2" /> {isSidebarOpen && "Profile"}
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2 px-0">
          <FileCheck className="mr-2" /> {isSidebarOpen && "Verification"}
        </Button>
        <a
          href="/post-jobs"
          className="flex items-center w-full justify-start mb-2 group px-0"
        >
          <Briefcase className="mr-2" />
          {isSidebarOpen && "Post Jobs"}
        </a>
        <Button variant="ghost" className="w-full justify-start mb-2 px-0">
          <Award className="mr-2" /> {isSidebarOpen && "Leaderboard"}
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="w-full justify-start mb-2 px-0">
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
        <a
          href="/settings"
          className="flex items-center justify-start group px-0"
        >
          <Settings className="mr-2" />
          {isSidebarOpen ? (
            "Settings"
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#2D2D5B] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Settings
            </span>
          )}
        </a>
      </nav>
      <Button variant="ghost" className="w-full justify-start mt-auto px-0">
        <LogOut className="mr-2" /> {isSidebarOpen && "Logout"}
      </Button>
    </div>
  </motion.div>

      {/* Main Content */}
      <div
        className={`flex-grow p-8 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } transition-all duration-300`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search..."
              className="w-64 bg-[#1C1C3B] border-none rounded-3xl py-6 px-6"
              startAdornment={<Search className="text-gray-400" />}
            />
            <Button variant="outline" className="rounded-full">
              All
            </Button>
            <Button variant="outline" className="rounded-full">
              Skills
            </Button>
            <Button variant="outline" className="rounded-full">
              Reputation
            </Button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#1C1C3B] p-6 rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
            <div className="space-y-4">
              <div className="bg-[#2C2C4B] p-4 rounded-lg">
                <h3 className="font-semibold">E-commerce Platform</h3>
                <p className="text-sm text-gray-400 mb-2">
                  React, Node.js, MongoDB
                </p>
                <Progress value={75} className="h-2" />
              </div>
              <div className="bg-[#2C2C4B] p-4 rounded-lg">
                <h3 className="font-semibold">Machine Learning Model</h3>
                <p className="text-sm text-gray-400 mb-2">Python, TensorFlow</p>
                <Progress value={90} className="h-2" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#1C1C3B] p-6 rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Certificates</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>AWS Certified Solutions Architect</li>
              <li>Google Cloud Professional Data Engineer</li>
              <li>Certified Kubernetes Administrator</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-[#1C1C3B] p-6 rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Endorsements</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 mr-3"></div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-400">
                    Senior Developer at Tech Co.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 mr-3"></div>
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-gray-400">CTO at Startup Inc.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#1C1C3B] p-6 rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2C2C4B] px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-[#2C2C4B] px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-[#2C2C4B] px-3 py-1 rounded-full text-sm">
                Python
              </span>
              <span className="bg-[#2C2C4B] px-3 py-1 rounded-full text-sm">
                AWS
              </span>
              <span className="bg-[#2C2C4B] px-3 py-1 rounded-full text-sm">
                Docker
              </span>
              <span className="bg-[#2C2C4B] px-3 py-1 rounded-full text-sm">
                Kubernetes
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Popovers */}
      <div className="fixed bottom-4 right-4 flex space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-full">
              <MessageSquare className="h-4 w-4" /> News
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-[#1C1C3B] border-none mb-2 rounded-2xl">
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
              <Info className="h-4 w-4" /> Updates
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-[#1C1C3B] border-none mb-2 mx-4 rounded-2xl">
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
    </div>
  );
}
