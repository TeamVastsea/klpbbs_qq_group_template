"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun } from "lucide-react"
import { toast } from "@/hooks/use-toast"

// 导入新的类型和API
import { GroupVO, GroupDetailVO } from "@/types"
import { fetchAllGroups, fetchGroupDetail } from "@/api"
import { mockGroups, mockGroupDetails } from "@/api/mockData"

export default function ChatInterface() {
  const [selectedGroup, setSelectedGroup] = useState<string>("1")
  const [groups, setGroups] = useState<GroupVO[]>([])
  const [groupDetails, setGroupDetails] = useState<Record<string, GroupDetailVO>>({})
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  // 从API获取数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 获取群组列表
        const groupsData = await fetchAllGroups();
        setGroups(groupsData);

        // 预加载第一个群组的详情
        if (groupsData.length > 0) {
          const firstGroupId = groupsData[0].id;
          const detail = await fetchGroupDetail(firstGroupId);
          if (detail) {
            setGroupDetails(prev => ({ ...prev, [firstGroupId]: detail }));
          }
          setSelectedGroup(firstGroupId);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // 使用模拟数据作为后备
        setGroups(mockGroups);
        setGroupDetails(mockGroupDetails);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 当选择的群组变化时，获取该群组的详情
  useEffect(() => {
    const getGroupDetail = async () => {
      // 如果已经有缓存的详情，则不再请求
      if (groupDetails[selectedGroup]) return;
      
      try {
        const detail = await fetchGroupDetail(selectedGroup);
        if (detail) {
          setGroupDetails(prev => ({ ...prev, [selectedGroup]: detail }));
        }
      } catch (error) {
        console.error(`Failed to fetch detail for group ${selectedGroup}:`, error);
      }
    };

    if (selectedGroup && !loading) {
      getGroupDetail();
    }
  }, [selectedGroup, groupDetails, loading]);

  const handleSelectGroup = (groupId: string) => {
    setSelectedGroup(groupId);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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

      {/* 右侧内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 群详情区域 */}
        {loading ? (
          <div className={`flex-1 flex items-center justify-center ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <div className="text-center">
              <div className={`animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 mx-auto mb-4 transition-colors duration-300 ${isDarkMode ? "border-blue-400" : "border-blue-500"}`}></div>
              <p className="text-lg">加载中...</p>
            </div>
          </div>
        ) : groupDetails[selectedGroup] ? (
          <>
            <div className="p-8">
              <Card
                className={`shadow-lg border-0 transition-colors duration-300 ${isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Avatar className="h-24 w-24 mr-6 shadow-md">
                      <AvatarImage src={groupDetails[selectedGroup].avatar || "/placeholder.svg"} alt={groupDetails[selectedGroup].name} />
                      <AvatarFallback
                        className={`text-white text-2xl ${isDarkMode
                          ? "bg-gradient-to-br from-gray-600 to-gray-700"
                          : "bg-gradient-to-br from-blue-400 to-blue-500"
                          }`}
                      >
                        {groupDetails[selectedGroup].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex flex-col space-y-4">
                        <h1
                          className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                        >
                          {groupDetails[selectedGroup].name}
                        </h1>
                        <div
                          className={`flex items-center space-x-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? "bg-gray-600 text-gray-200" : "bg-blue-100 text-blue-700"}`}
                          >
                            群号: {groupDetails[selectedGroup].groupNumber}
                          </span>
                          {/* 复制按钮 */}
                          <button
                            className={`px-2 py-1 rounded transition-colors duration-200 border text-xs font-medium flex items-center space-x-1 ${isDarkMode ? "bg-gray-600 hover:bg-gray-500 border-gray-500 text-gray-100" : "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700"}`}
                            onClick={() => {
                              navigator.clipboard.writeText(groupDetails[selectedGroup].groupNumber)
                              toast({ 
                                title: "群号已复制", 
                                description: "已成功复制群号到剪贴板！",
                                className: isDarkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-800"
                              })
                            }}
                            title="复制群号"
                            disabled={groupDetails[selectedGroup].groupNumber === "隐藏"}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            复制
                          </button>
                          {/* 打开链接按钮 */}
                          <button
                            className={`px-2 py-1 rounded transition-colors duration-200 border text-xs font-medium flex items-center space-x-1 ${isDarkMode ? "bg-gray-600 hover:bg-gray-500 border-gray-500 text-gray-100" : "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700"}`}
                            onClick={() => {
                              const groupNumber = groupDetails[selectedGroup].groupNumber;
                              if (groupNumber && groupNumber !== "隐藏") {
                                window.open(`https://jq.qq.com/?_wv=1027&k=${groupNumber}`);
                              }
                            }}
                            title="打开加群链接"
                            disabled={groupDetails[selectedGroup].groupNumber === "隐藏"}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-4 0h4v4" /></svg>
                            打开
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 群介绍区域 */}
            <div className="flex-1 p-8 pt-0">
              <Card
                className={`h-full shadow-lg border-0 transition-colors duration-300 ${isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"}`}
              >
                <CardContent className="p-8 h-full">
                  <div className="space-y-6">
                    <div>
                      <h2
                        className={`text-xl font-semibold mb-4 flex items-center transition-colors duration-300 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
                      >
                        <div
                          className={`w-1 h-6 rounded-full mr-3 transition-colors duration-300 ${isDarkMode ? "bg-blue-400" : "bg-blue-500"}`}
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
                        : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100"}`}
                    >
                      <p
                        className={`leading-relaxed text-lg transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                      >
                        {groupDetails[selectedGroup].introduction}
                      </p>
                    </div>

                    {/* 显示群聊状态 */}
                    {groupDetails[selectedGroup].chatStatus && (
                      <div className="mt-6">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                            isDarkMode ? "bg-gray-600 text-gray-200" : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          状态: {groupDetails[selectedGroup].chatStatus}
                        </span>
                      </div>
                    )}

                    {/* 装饰性元素 */}
                    <div className="flex justify-center mt-12">
                      <div className="flex space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${isDarkMode ? "bg-blue-400" : "bg-blue-300"}`}
                        ></div>
                        <div
                          className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${isDarkMode ? "bg-blue-600" : "bg-blue-500"}`}
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <div className={`flex-1 flex items-center justify-center ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <div className="text-center">
              <p className="text-lg">请选择一个群组查看详情</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
