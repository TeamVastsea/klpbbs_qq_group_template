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
      name: "KLPBBS我的世界交流①群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "M397749: 悬赏/联机/服务器",
      lastTime: "昨天 23:41",
      isActive: true,
    },
    {
      id: "2",
      name: "KLPBBS我的世界交流②群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Steve233: 有没有整合包推荐",
      lastTime: "09:12",
      isActive: true,
    },
    {
      id: "3",
      name: "KLPBBS我的世界交流③群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Alex001: 服务器开了没",
      lastTime: "05:32",
      isActive: true,
    },
    {
      id: "5",
      name: "KLPBBS我的世界交流⑤群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "EnderEye: 新版更新了？",
      lastTime: "昨天 22:18",
      isActive: true,
    },
    {
      id: "6",
      name: "KLPBBS我的世界交流⑥群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "RedstoneXD: 发个电路图",
      lastTime: "06:55",
      isActive: true,
    },
    {
      id: "7",
      name: "KLPBBS我的世界交流⑦群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "CreeperGirl: 怎么合成信标",
      lastTime: "昨天 19:07",
      isActive: true,
    },
    {
      id: "8",
      name: "KLPBBS我的世界交流⑧群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "BuilderMax: 这图怎么传啊",
      lastTime: "08:01",
      isActive: false,
    },
    {
      id: "9",
      name: "KLPBBS我的世界交流⑨群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Pigman: 村庄坐标有吗",
      lastTime: "昨天 21:20",
      isActive: true,
    },
    {
      id: "10",
      name: "KLPBBS我的世界交流⑩群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "GHASTX: 要联机的私聊",
      lastTime: "10:09",
      isActive: true,
    },
    {
      id: "11",
      name: "KLPBBS我的世界交流⑪群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Slime123: 有大佬带吗",
      lastTime: "02:47",
      isActive: false,
    },
    {
      id: "12",
      name: "KLPBBS内群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Admin: 请注意言论规范",
      lastTime: "昨天 16:30",
      isActive: true,
    },
    {
      id: "13",
      name: "皮肤创作交流群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "SkinPro: 新皮肤已上传",
      lastTime: "07:20",
      isActive: true,
    },
    {
      id: "14",
      name: "创意港湾版块交流群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "IdeaMan: 有个新模组想法",
      lastTime: "昨天 20:03",
      isActive: true,
    },
    {
      id: "15",
      name: "游戏资讯版块催审群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Moderator: 新帖审核中",
      lastTime: "01:17",
      isActive: true,
    },
    {
      id: "16",
      name: "Java版资源创作交流群",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "CoderBoy: 发布了新模组",
      lastTime: "04:40",
      isActive: true,
    },
    {
      id: "17",
      name: "KLPBBS QQ频道",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "ChannelBot: 今日讨论话题上线",
      lastTime: "昨天 18:12",
      isActive: true,
    }
  ],
  groupDetails: {
    "1": {
      id: "1",
      name: "KLPBBS我的世界交流①群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "598120166",
      introduction: "KLPBBS我的世界交流①群。欢迎大家积极参与讨论，共同维护良好的社区环境。",
      chatStatus: "满员"
    },
    "2": {
      id: "2",
      name: "KLPBBS我的世界交流②群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "151083999",
      introduction: "KLPBBS我的世界交流②群。",
      chatStatus: "火热"
    },
    "3": {
      id: "3",
      name: "KLPBBS我的世界交流③群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "131200488",
      introduction: "KLPBBS我的世界交流③群。",
      chatStatus: "火热"
    },
    "5": {
      id: "5",
      name: "KLPBBS我的世界交流⑤群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "964085979",
      introduction: "KLPBBS我的世界交流⑤群。",
      chatStatus: "爆满"
    },
    "6": {
      id: "6",
      name: "KLPBBS我的世界交流⑥群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "494820425",
      introduction: "KLPBBS我的世界交流⑥群。",
      chatStatus: "火热"
    },
    "7": {
      id: "7",
      name: "KLPBBS我的世界交流⑦群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "538497540",
      introduction: "KLPBBS我的世界交流⑦群。",
      chatStatus: "火热"
    },
    "8": {
      id: "8",
      name: "KLPBBS我的世界交流⑧群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "838923614",
      introduction: "KLPBBS我的世界交流⑧群。",
      chatStatus: "空闲"
    },
    "9": {
      id: "9",
      name: "KLPBBS我的世界交流⑨群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "916037204",
      introduction: "KLPBBS我的世界交流⑨群。",
      chatStatus: "火热"
    },
    "10": {
      id: "10",
      name: "KLPBBS我的世界交流⑩群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "210044288",
      introduction: "KLPBBS我的世界交流⑩群。",
      chatStatus: "火热"
    },
    "11": {
      id: "11",
      name: "KLPBBS我的世界交流⑪群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "904281052",
      introduction: "KLPBBS我的世界交流⑪群。",
      chatStatus: "空闲"
    },
    "12": {
      id: "12",
      name: "KLPBBS内群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "隐藏",
      introduction: "KLPBBS官方内部群，需申请加入。",
      chatStatus: "需申请"
    },
    "13": {
      id: "13",
      name: "皮肤创作交流群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "隐藏",
      introduction: "用于皮肤创作分享与交流，需申请加入。",
      chatStatus: "需申请"
    },
    "14": {
      id: "14",
      name: "创意港湾版块交流群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "隐藏",
      introduction: "创意港湾版块相关讨论群，需申请加入。",
      chatStatus: "需申请"
    },
    "15": {
      id: "15",
      name: "游戏资讯版块催审群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "隐藏",
      introduction: "游戏资讯板块催审群，用于版主沟通。",
      chatStatus: "需申请"
    },
    "16": {
      id: "16",
      name: "Java版资源创作交流群",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "332359582",
      introduction: "Java版资源创作与交流。",
      chatStatus: "空闲"
    },
    "17": {
      id: "17",
      name: "KLPBBS QQ频道",
      avatar: "/placeholder.svg?height=120&width=120",
      groupNumber: "ia4j9i7295",
      introduction: "KLPBBS QQ频道。欢迎加入社区讨论。",
      chatStatus: "火热"
    }
  }
};

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
                  <div className="flex items-center">
                    <h3 className={`font-medium truncate flex-1 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>{group.name}</h3>
                    <span className={`text-xs ml-2 text-right min-w-[56px] flex-shrink-0 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{group.lastTime}</span>
                  </div>
                  <p className={`text-sm truncate mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{group.lastMessage}</p>
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
