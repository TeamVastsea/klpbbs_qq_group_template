/**
 * 数据类型定义
 */

// 基础DTO接口 - 从后端接收的数据结构
export interface GroupDTO {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
  isActive: boolean;
}

export interface GroupDetailDTO {
  id: string;
  name: string;
  avatar: string;
  groupNumber: string;
  introduction: string;
  chatStatus?: string; // 可选字段，表示群聊状态
}

// 成员DTO
export interface GroupMemberDTO {
  id: string;
  avatar: string;
  name?: string;
}

// 分布统计DTO
export interface DistributionItemDTO {
  name: string;
  value: number;
  color: string;
}

// 前端视图对象 (VO) - 用于UI展示的数据结构
export interface GroupVO {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
  unread: number;
  isActive: boolean;
}

export interface GroupDetailVO {
  id: string;
  name: string;
  avatar: string;
  groupNumber: string;
  category?: string;
  announcement?: string;
  introduction: string;
  nickname?: string;
  memberCount?: number;
  members?: GroupMemberVO[];
  distribution?: DistributionItemVO[];
  chatStatus?: string;
}

export interface GroupMemberVO {
  id: string;
  avatar: string;
  name?: string;
}

export interface DistributionItemVO {
  name: string;
  value: number;
  color: string;
}

// 响应接口
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}