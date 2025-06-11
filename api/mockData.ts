import { GroupVO, GroupDetailVO } from '@/types';

/**
 * 模拟群组列表数据
 */
export const mockGroups: GroupVO[] = [
  {
    id: "1",
    name: "KLPBBS我的世界交流①群",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "M397749: 悬赏/联机/服务器",
    lastTime: "昨天 23:41",
    unread: 0,
    isActive: true,
  },
  {
    id: "2",
    name: "KLPBBS我的世界交流②群",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "Steve233: 有没有整合包推荐",
    lastTime: "09:12",
    unread: 2,
    isActive: true,
  },
  {
    id: "3",
    name: "KLPBBS我的世界交流③群",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "Alex001: 服务器开了没",
    lastTime: "05:32",
    unread: 0,
    isActive: true,
  },
  {
    id: "5",
    name: "KLPBBS我的世界交流⑤群",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "Creeper888: 有人玩1.20.4吗",
    lastTime: "周一",
    unread: 5,
    isActive: true,
  },
  {
    id: "10",
    name: "KLPBBS版主群",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "Admin: 请各位版主注意群规",
    lastTime: "周二",
    unread: 0,
    isActive: false,
  },
  {
    id: "16",
    name: "Java版资源创作交流群",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "RedStone: 新的红石机制讨论",
    lastTime: "3天前",
    unread: 0,
    isActive: true,
  },
  {
    id: "17",
    name: "KLPBBS QQ频道",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "System: 欢迎加入QQ频道",
    lastTime: "1周前",
    unread: 0,
    isActive: true,
  },
];

/**
 * 模拟群组详情数据
 * 使用Record类型，以id为键
 */
export const mockGroupDetails: Record<string, GroupDetailVO> = {
  "1": {
    id: "1",
    name: "KLPBBS我的世界交流①群",
    avatar: "/placeholder.svg?height=120&width=120",
    groupNumber: "598120166",
    category: "游戏交流",
    announcement: "欢迎加入KLPBBS我的世界交流①群，请遵守群规！",
    introduction: "KLPBBS我的世界交流①群。欢迎大家积极参与讨论，共同维护良好的社区环境。",
    nickname: "玩家001",
    memberCount: 500,
    members: [
      { id: "m1", avatar: "/placeholder.svg?height=40&width=40", name: "管理员" },
      { id: "m2", avatar: "/placeholder.svg?height=40&width=40", name: "Steve" },
      { id: "m3", avatar: "/placeholder.svg?height=40&width=40", name: "Alex" },
    ],
    distribution: [
      { name: "活跃", value: 70, color: "bg-green-500" },
      { name: "潜水", value: 30, color: "bg-blue-500" },
    ],
    chatStatus: "活跃"
  },
  "2": {
    id: "2",
    name: "KLPBBS我的世界交流②群",
    avatar: "/placeholder.svg?height=120&width=120",
    groupNumber: "151083999",
    category: "游戏交流",
    announcement: "欢迎加入KLPBBS我的世界交流②群！",
    introduction: "KLPBBS我的世界交流②群。",
    nickname: "玩家002",
    memberCount: 450,
    members: [
      { id: "m1", avatar: "/placeholder.svg?height=40&width=40", name: "管理员" },
      { id: "m2", avatar: "/placeholder.svg?height=40&width=40", name: "Notch" },
      { id: "m3", avatar: "/placeholder.svg?height=40&width=40", name: "Jeb" },
    ],
    distribution: [
      { name: "活跃", value: 65, color: "bg-green-500" },
      { name: "潜水", value: 35, color: "bg-blue-500" },
    ],
    chatStatus: "活跃"
  },
  "3": {
    id: "3",
    name: "KLPBBS我的世界交流③群",
    avatar: "/placeholder.svg?height=120&width=120",
    groupNumber: "423185658",
    category: "游戏交流",
    announcement: "欢迎加入KLPBBS我的世界交流③群！",
    introduction: "KLPBBS我的世界交流③群。专注于红石技术讨论。",
    nickname: "红石玩家",
    memberCount: 400,
    members: [
      { id: "m1", avatar: "/placeholder.svg?height=40&width=40", name: "管理员" },
      { id: "m2", avatar: "/placeholder.svg?height=40&width=40", name: "红石专家" },
    ],
    distribution: [
      { name: "活跃", value: 60, color: "bg-green-500" },
      { name: "潜水", value: 40, color: "bg-blue-500" },
    ],
    chatStatus: "一般"
  },
  "5": {
    id: "5",
    name: "KLPBBS我的世界交流⑤群",
    avatar: "/placeholder.svg?height=120&width=120",
    groupNumber: "1051855098",
    category: "游戏交流",
    announcement: "欢迎加入KLPBBS我的世界交流⑤群！",
    introduction: "KLPBBS我的世界交流⑤群。专注于建筑设计讨论。",
    nickname: "建筑师",
    memberCount: 350,
    members: [
      { id: "m1", avatar: "/placeholder.svg?height=40&width=40", name: "管理员" },
      { id: "m2", avatar: "/placeholder.svg?height=40&width=40", name: "建筑大师" },
    ],
    distribution: [
      { name: "活跃", value: 55, color: "bg-green-500" },
      { name: "潜水", value: 45, color: "bg-blue-500" },
    ],
    chatStatus: "火热"
  },
  "10": {
    id: "10",
    name: "KLPBBS版主群",
    avatar: "/placeholder.svg?height=120&width=120",
    groupNumber: "隐藏",
    category: "管理",
    announcement: "版主工作交流群",
    introduction: "KLPBBS版主工作交流群，仅限版主加入。",
    nickname: "超级管理员",
    memberCount: 20,
    members: [
      { id: "m1", avatar: "/placeholder.svg?height=40&width=40", name: "站长" },
      { id: "m2", avatar: "/placeholder.svg?height=40&width=40", name: "版主A" },
    ],
    distribution: [
      { name: "活跃", value: 90, color: "bg-green-500" },
      { name: "潜水", value: 10, color: "bg-blue-500" },
    ],
    chatStatus: "需申请"
  },
  "16": {
    id: "16",
    name: "Java版资源创作交流群",
    avatar: "/placeholder.svg?height=120&width=120",
    groupNumber: "332359582",
    category: "创作",
    announcement: "资源创作交流",
    introduction: "Java版资源创作与交流。专注于模组、材质包、数据包等创作。",
    nickname: "模组作者",
    memberCount: 200,
    members: [
      { id: "m1", avatar: "/placeholder.svg?height=40&width=40", name: "管理员" },
      { id: "m2", avatar: "/placeholder.svg?height=40&width=40", name: "模组大神" },
    ],
    distribution: [
      { name: "活跃", value: 75, color: "bg-green-500" },
      { name: "潜水", value: 25, color: "bg-blue-500" },
    ],
    chatStatus: "空闲"
  },
  "17": {
    id: "17",
    name: "KLPBBS QQ频道",
    avatar: "/placeholder.svg?height=120&width=120",
    groupNumber: "ia4j9i7295",
    category: "社区",
    announcement: "QQ频道公告",
    introduction: "KLPBBS QQ频道。欢迎加入社区讨论。",
    nickname: "频道用户",
    memberCount: 1000,
    members: [
      { id: "m1", avatar: "/placeholder.svg?height=40&width=40", name: "管理员" },
      { id: "m2", avatar: "/placeholder.svg?height=40&width=40", name: "热心用户" },
    ],
    distribution: [
      { name: "活跃", value: 80, color: "bg-green-500" },
      { name: "潜水", value: 20, color: "bg-blue-500" },
    ],
    chatStatus: "火热"
  }
};