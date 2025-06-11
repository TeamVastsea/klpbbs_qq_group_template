import { GroupDTO, GroupDetailDTO, GroupVO, GroupDetailVO, ApiResponse } from '@/types';
import { mockGroups, mockGroupDetails } from './mockData';

/**
 * 获取群组列表
 * @returns Promise<ApiResponse<GroupVO[]>>
 */
export async function getGroups(): Promise<ApiResponse<GroupVO[]>> {
  // 模拟API响应延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: 'success',
        data: mockGroups
      });
    }, 300);
  });
}

/**
 * 获取群组详情
 * @param groupId 群组ID
 * @returns Promise<ApiResponse<GroupDetailVO>>
 */
export async function getGroupDetail(groupId: string): Promise<ApiResponse<GroupDetailVO>> {
  // 模拟API响应延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      const groupDetail = mockGroupDetails[groupId];
      
      if (groupDetail) {
        resolve({
          code: 200,
          message: 'success',
          data: groupDetail
        });
      } else {
        resolve({
          code: 404,
          message: 'Group not found',
          data: {} as GroupDetailVO
        });
      }
    }, 300);
  });
}

/**
 * 搜索群组
 * @param keyword 搜索关键词
 * @returns Promise<ApiResponse<GroupVO[]>>
 */
export async function searchGroups(keyword: string): Promise<ApiResponse<GroupVO[]>> {
  // 模拟API响应延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredGroups = mockGroups.filter(group => 
        group.name.toLowerCase().includes(keyword.toLowerCase())
      );
      
      resolve({
        code: 200,
        message: 'success',
        data: filteredGroups
      });
    }, 300);
  });
}