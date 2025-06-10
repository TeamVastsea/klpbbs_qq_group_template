"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun } from "lucide-react"

const mockData = {
  groups: [
    {
      id: "1",
      name: "苦力怕论坛管理组",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "悬赏/联机/服务器 - M397749...",
      lastTime: "昨天23:41",
      isActive: true,
    },
    {
      id: "2",
      name: "Minecraft建筑交流群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "今天分享一个城堡建筑教程",
      lastTime: "12:30",
    },
    {
      id: "3",
      name: "AT 苦力怕论坛1群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "老丁电子尼古丁传输批发...",
      lastTime: "00:44",
    },
    {
      id: "4",
      name: "红石科技研究院",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "新的红石电路设计完成了！",
      lastTime: "11:20",
    },
    {
      id: "5",
      name: "Y-羊驼群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "孙笑川258: 还是麦小鼠当...",
      lastTime: "00:44",
    },
    {
      id: "6",
      name: "模组开发者联盟",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "1.20.1版本适配进度如何？",
      lastTime: "09:15",
    },
    {
      id: "7",
      name: "M-Mine群(mineb...)",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "奶昔邀请明月庄主加入了...",
      lastTime: "00:39",
    },
    {
      id: "8",
      name: "服务器运维交流",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "服务器今天又崩了三次...",
      lastTime: "08:45",
    },
    {
      id: "9",
      name: "中国最大的躺平论坛",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "大湿: 炉石管道",
      lastTime: "00:19",
    },
    {
      id: "10",
      name: "皮肤制作工作室",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "新皮肤预览图已上传",
      lastTime: "07:30",
    },
    {
      id: "11",
      name: "网络建设与运维",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "狼狼的插入你的网口: ...",
      lastTime: "00:15",
    },
    {
      id: "12",
      name: "游戏测试小组",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Beta版本bug汇总报告",
      lastTime: "06:20",
    },
    {
      id: "13",
      name: "K-内群(klpbbs)",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "菜猫是谁: [动画表情]",
      lastTime: "00:14",
    },
    {
      id: "14",
      name: "创意建筑大赛",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "本月主题：未来城市",
      lastTime: "昨天",
    },
    {
      id: "15",
      name: "新手指导群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "萌新求助：怎么做自动农场？",
      lastTime: "05:45",
    },
  ],
  groupDetails: {
    "1": {
      id: "1",
      name: "苦力怕论坛管理组",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "1051855098",
      introduction: "苦力怕论坛官方管理群，负责论坛日常管理和用户服务。欢迎大家积极参与讨论，共同维护良好的社区环境。",
    },
    "2": {
      id: "2",
      name: "Minecraft建筑交流群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "2087654321",
      introduction:
        "专注于Minecraft建筑技巧分享和交流的群组。无论你是建筑新手还是大神，都欢迎在这里分享你的作品和心得。",
    },
    "3": {
      id: "3",
      name: "AT 苦力怕论坛1群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "3098765432",
      introduction: "苦力怕论坛第一交流群，汇聚了众多Minecraft爱好者。在这里可以讨论游戏技巧、分享有趣的发现。",
    },
    "4": {
      id: "4",
      name: "红石科技研究院",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "4012345678",
      introduction: "专业的红石电路研究和分享群组。从简单的红石门到复杂的计算机，这里有最前沿的红石科技。",
    },
    "5": {
      id: "5",
      name: "Y-羊驼群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "5023456789",
      introduction: "轻松愉快的聊天群，主要讨论游戏和生活趣事。群友关系融洽，氛围轻松活跃。",
    },
    "6": {
      id: "6",
      name: "模组开发者联盟",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "6034567890",
      introduction: "Minecraft模组开发者的专业交流平台。分享开发经验、讨论技术难题、发布最新模组。",
    },
    "7": {
      id: "7",
      name: "M-Mine群(mineb...)",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "7045678901",
      introduction: "Mine系列服务器官方群，提供服务器最新资讯、活动通知和玩家交流平台。",
    },
    "8": {
      id: "8",
      name: "服务器运维交流",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "8056789012",
      introduction: "Minecraft服务器运维人员交流群。分享运维经验、讨论服务器优化、解决技术问题。",
    },
    "9": {
      id: "9",
      name: "中国最大的躺平论坛",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "9067890123",
      introduction: "放松心情的休闲交流群，讨论生活、游戏、娱乐等轻松话题。让我们一起躺平享受生活。",
    },
    "10": {
      id: "10",
      name: "皮肤制作工作室",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "1078901234",
      introduction: "专业的Minecraft皮肤制作和分享群组。提供皮肤制作教程、工具推荐和作品展示。",
    },
    "11": {
      id: "11",
      name: "网络建设与运维",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "1189012345",
      introduction: "网络技术和服务器运维专业交流群。讨论网络架构、服务器配置、安全防护等技术话题。",
    },
    "12": {
      id: "12",
      name: "游戏测试小组",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "1290123456",
      introduction: "游戏测试和bug反馈专业群组。参与游戏测试、反馈问题、改进游戏体验。",
    },
    "13": {
      id: "13",
      name: "K-内群(klpbbs)",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "1301234567",
      introduction: "苦力怕论坛内部交流群，主要用于论坛管理和核心用户交流。",
    },
    "14": {
      id: "14",
      name: "创意建筑大赛",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "1412345678",
      introduction: "定期举办建筑比赛的群组。展示创意作品、参与比赛、学习建筑技巧。",
    },
    "15": {
      id: "15",
      name: "新手指导群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "1523456789",
      introduction: "专门为Minecraft新手提供指导和帮助的群组。老玩家热心解答，新手快速成长。",
    },
  },
}

export default function ChatInterface() {
  const [selectedGroup, setSelectedGroup] = useState<string>("1")
  const [groups, ] = useState(mockData.groups)
  const [groupDetails, ] = useState(mockData.groupDetails)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // 模拟从API获取数据
  useEffect(() => {
    // 实际应用中，这里可以从API获取数据
  }, [])

  const handleSelectGroup = (groupId: string) => {
    setSelectedGroup(groupId)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`flex h-screen transition-colors duration-300 ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-slate-800" : "bg-gradient-to-br from-blue-50 to-indigo-100"
        }`}
    >
      {/* 左侧群列表 */}
      <div
        className={`w-80 flex flex-col border-r shadow-lg transition-colors duration-300 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
      >
        {/* 顶部标题栏 */}
        <div
          className={`p-4 flex items-center justify-between shadow-md transition-colors duration-300 ${isDarkMode
              ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white"
              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            }`}
        >
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-3 border-2 border-white shadow-md">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
              <AvatarFallback className={isDarkMode ? "bg-gray-600" : "bg-blue-400"}>QQ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="font-bold text-lg">群聊列表</h2>
              <p className="text-xs opacity-90">{groups.length} 个群聊</p>
            </div>
          </div>

          {/* 主题切换按钮 */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${isDarkMode ? "hover:bg-gray-600 text-yellow-300" : "hover:bg-blue-700 text-white"
              }`}
            aria-label="切换主题"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* 群列表 */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {groups.map((group) => (
              <div
                key={group.id}
                className={`flex items-center p-3 m-1 cursor-pointer rounded-lg transition-all duration-200 ${group.id === selectedGroup
                    ? isDarkMode
                      ? "bg-gray-700 border-l-4 border-blue-400 shadow-sm"
                      : "bg-blue-100 border-l-4 border-blue-500 shadow-sm"
                    : isDarkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-50"
                  }`}
                onClick={() => handleSelectGroup(group.id)}
              >
                <Avatar className="h-12 w-12 mr-3 shadow-sm">
                  <AvatarImage src={group.avatar || "/placeholder.svg"} alt={group.name} />
                  <AvatarFallback
                    className={`text-white ${isDarkMode
                        ? "bg-gradient-to-br from-gray-600 to-gray-700"
                        : "bg-gradient-to-br from-blue-400 to-blue-500"
                      }`}
                  >
                    {group.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className={`font-medium truncate ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                      {group.name}
                    </h3>
                    <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {group.lastTime}
                    </span>
                  </div>
                  <p className={`text-sm truncate mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {group.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* 右侧群详情 */}
      {selectedGroup && groupDetails[selectedGroup as keyof typeof groupDetails] && (
        <div
          className={`flex-1 flex flex-col transition-colors duration-300 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
        >
          {/* 群信息卡片 */}
          <div
            className={`p-8 transition-colors duration-300 ${isDarkMode ? "bg-gradient-to-r from-gray-800 to-gray-700" : "bg-gradient-to-r from-white to-blue-50"
              }`}
          >
            <Card
              className={`shadow-lg border-0 backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? "bg-gray-700/80 border-gray-600" : "bg-white/80 border-gray-200"
                }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Avatar
                    className={`h-24 w-24 shadow-lg ring-4 transition-colors duration-300 ${isDarkMode ? "ring-gray-600" : "ring-blue-100"
                      }`}
                  >
                    <AvatarImage
                      src={groupDetails[selectedGroup as keyof typeof groupDetails].avatar || "/placeholder.svg"}
                      alt={groupDetails[selectedGroup as keyof typeof groupDetails].name}
                    />
                    <AvatarFallback
                      className={`text-white text-2xl ${isDarkMode
                          ? "bg-gradient-to-br from-gray-600 to-gray-700"
                          : "bg-gradient-to-br from-blue-400 to-blue-600"
                        }`}
                    >
                      {groupDetails[selectedGroup as keyof typeof groupDetails].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h1
                        className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? "text-gray-100" : "text-gray-800"
                          }`}
                      >
                        {groupDetails[selectedGroup as keyof typeof groupDetails].name}
                      </h1>
                      <div
                        className={`flex items-center space-x-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                      >
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? "bg-gray-600 text-gray-200" : "bg-blue-100 text-blue-700"
                            }`}
                        >
                          群号: {groupDetails[selectedGroup as keyof typeof groupDetails].groupNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 群介绍区域 */}
          <div className="flex-1 p-8">
            <Card
              className={`h-full shadow-lg border-0 transition-colors duration-300 ${isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
                }`}
            >
              <CardContent className="p-8 h-full">
                <div className="space-y-6">
                  <div>
                    <h2
                      className={`text-xl font-semibold mb-4 flex items-center transition-colors duration-300 ${isDarkMode ? "text-gray-100" : "text-gray-800"
                        }`}
                    >
                      <div
                        className={`w-1 h-6 rounded-full mr-3 transition-colors duration-300 ${isDarkMode ? "bg-blue-400" : "bg-blue-500"
                          }`}
                      ></div>
                      群介绍
                    </h2>
                    <Separator
                      className={`mb-6 transition-colors duration-300 ${isDarkMode ? "bg-gray-600" : "bg-gray-200"}`}
                    />
                  </div>

                  <div
                    className={`rounded-xl p-6 border transition-colors duration-300 ${isDarkMode
                        ? "bg-gradient-to-r from-gray-600 to-gray-700 border-gray-500"
                        : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100"
                      }`}
                  >
                    <p
                      className={`leading-relaxed text-lg transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                    >
                      {groupDetails[selectedGroup as keyof typeof groupDetails].introduction}
                    </p>
                  </div>

                  {/* 装饰性元素 */}
                  <div className="flex justify-center mt-12">
                    <div className="flex space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${isDarkMode ? "bg-blue-400" : "bg-blue-300"
                          }`}
                      ></div>
                      <div
                        className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
                          }`}
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${isDarkMode ? "bg-blue-600" : "bg-blue-500"
                          }`}
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
