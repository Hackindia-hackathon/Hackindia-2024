import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Bell, Lock, User, Globe, Moon, Sun, Zap, Mail, MessageSquare, FileCheck, Bell as BellIcon } from 'lucide-react'

export function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

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

  return (
    <motion.div
      className="space-y-8 pt-24 px-6  w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-3xl font-bold">Settings</motion.h1>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-[#1C1C3B] col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><User className="mr-2" /> Account Information</CardTitle>
            <CardDescription>Update your account details here.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Dr. Jane Smith" className="bg-[#2C2C4B] border-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="jane.smith@example.com" className="bg-[#2C2C4B] border-none" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Senior AI Researcher & Tech Evangelist" className="bg-[#2C2C4B] border-none" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Account Changes</Button>
          </CardFooter>
        </Card>

        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><Lock className="mr-2" /> Privacy Settings</CardTitle>
            <CardDescription>Manage your privacy preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Profile Visibility</Label>
                <p className="text-sm text-muted-foreground">Control who can see your profile</p>
              </div>
              <Select defaultValue="public">
                <SelectTrigger className="w-[180px] bg-[#2C2C4B] border-none">
                  <SelectValue placeholder="Select visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="connections">Connections Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="two-factor" />
              <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><BellIcon className="mr-2" /> Notification Preferences</CardTitle>
            <CardDescription>Manage how you receive notifications.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="email-notifications" />
              <Label htmlFor="email-notifications" className="flex items-center"><Mail className="mr-2" /> Email Notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push-notifications" />
              <Label htmlFor="push-notifications" className="flex items-center"><MessageSquare className="mr-2" /> Push Notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="endorsement-requests" />
              <Label htmlFor="endorsement-requests" className="flex items-center"><FileCheck className="mr-2" /> Endorsement Requests</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="new-messages" />
              <Label htmlFor="new-messages" className="flex items-center"><Bell className="mr-2" /> New Messages</Label>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><Zap className="mr-2" /> Appearance Settings</CardTitle>
            <CardDescription>Customize the look of your dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Color Theme</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred color theme</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={isDarkMode ? "outline" : "default"}
                  size="icon"
                  onClick={() => setIsDarkMode(false)}
                >
                  <Sun className="h-4 w-4" />
                </Button>
                <Button
                  variant={isDarkMode ? "default" : "outline"}
                  size="icon"
                  onClick={() => setIsDarkMode(true)}
                >
                  <Moon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <Select defaultValue="medium">
                <SelectTrigger id="font-size" className="w-full bg-[#2C2C4B] border-none">
                  <SelectValue placeholder="Select font size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1C1C3B]">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><Globe className="mr-2" /> Language and Region</CardTitle>
            <CardDescription>Set your preferred language and region.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language" className="w-full bg-[#2C2C4B] border-none">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select defaultValue="us">
                <SelectTrigger id="region" className="w-full bg-[#2C2C4B] border-none">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="eu">European Union</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save All Changes</Button>
      </motion.div>
    </motion.div>
  )
}