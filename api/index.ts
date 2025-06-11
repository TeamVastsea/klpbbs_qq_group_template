/**
 * API入口文件
 * 统一导出API相关的函数和类型
 */

// 导出API服务
export * from './services';

// 导出配置
export * from './config';

// 导出模拟数据（仅在开发环境使用）
export * from './mockData';

// 导出API请求函数
import { GroupVO, GroupDetailVO, ApiResponse } from '@/types';
import { getGroups, getGroupDetail, searchGroups } from './services';
import { getFormattedGroupNumber } from './config';

/**
 * 获取所有群组
 * @returns Promise<GroupVO[]>
 */
export async function fetchAllGroups(): Promise<GroupVO[]> {
  try {
    const response = await getGroups();
    return response.data;
  } catch (error) {
    console.error('Failed to fetch groups:', error);
    return [];
  }
}

/**
 * 获取群组详情
 * @param groupId 群组ID
 * @returns Promise<GroupDetailVO | null>
 */
export async function fetchGroupDetail(groupId: string): Promise<GroupDetailVO | null> {
  try {
    const response = await getGroupDetail(groupId);
    if (response.code === 200) {
      // 应用群号格式化
      const detail = response.data;
      detail.groupNumber = getFormattedGroupNumber(groupId, detail.groupNumber);
      return detail;
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch group detail for ID ${groupId}:`, error);
    return null;
  }
}

/**
 * 搜索群组
 * @param keyword 搜索关键词
 * @returns Promise<GroupVO[]>
 */
export async function fetchSearchGroups(keyword: string): Promise<GroupVO[]> {
  try {
    const response = await searchGroups(keyword);
    return response.data;
  } catch (error) {
    console.error('Failed to search groups:', error);
    return [];
  }
}