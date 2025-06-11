// 这里是API接口，用于获取群聊数据
// 实际应用中，这里会连接到后端服务

export interface Group {
  id: string
  name: string
  avatar: string
  lastMessage: string
  lastTime: string
  unread: number
  isActive?: boolean
}

export interface GroupMember {
  id: string
  avatar: string
  name?: string
}

export interface DistributionItem {
  name: string
  value: number
  color: string
}

export interface GroupDetail {
  id: string
  name: string
  avatar: string
  groupNumber: string
  category: string
  announcement: string
  introduction: string
  nickname: string
  memberCount: number
  members: GroupMember[]
  distribution: DistributionItem[]
}

// 获取群列表
export async function getGroups(): Promise<Group[]> {
  // 实际应用中，这里会从API获取数据
  // return fetch('/api/groups').then(res => res.json())

  // 模拟API响应
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "苦力怕论坛管理组",
          avatar: "/placeholder.svg?height=50&width=50",
          lastMessage: "悬赏/联机/服务器 - M397749...",
          lastTime: "昨天23:41",
          unread: 0,
          isActive: true,
        },
        // ... 其他群聊数据
      ])
    }, 300)
  })
}

// 获取群详情
export async function getGroupDetail(groupId: string): Promise<GroupDetail> {
  // 实际应用中，这里会从API获取数据
  // return fetch(`/api/groups/${groupId}`).then(res => res.json())

  // 模拟API响应
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        name: "苦力怕论坛百园",
        avatar: "/placeholder.svg?height=100&width=100",
        groupNumber: "1051855098",
        category: "游戏",
        announcement: "请求各位版主抽出几十秒，为我...",
        introduction: "在群里，发现更多～",
        nickname: "大妈-damesck",
        memberCount: 51,
        members: [
          { id: "m1", avatar: "/placeholder.svg?height=40&width=40" },
          // ... 其他成员数据
        ],
        distribution: [
          { name: "活跃", value: 49, color: "bg-purple-500" },
          { name: "女", value: 47, color: "bg-green-500" },
          { name: "东京", value: 4, color: "bg-blue-500" },
          { name: "90后", value: 88, color: "bg-orange-500" },
        ],
      })
    }, 300)
  })
}
