import { WORKSPACE_STATUS } from './constants'

export const WORKSPACES = [
  { id: 1, col: 1, row: 1, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.FREE },
  { id: 2, col: 2, row: 1, colSpan: 2, rowSpan: 1, status: WORKSPACE_STATUS.FREE },
  { id: 3, col: 4, row: 1, colSpan: 2, rowSpan: 1, status: WORKSPACE_STATUS.FREE },
  { id: 4, col: 1, row: 3, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.BUSY },
  { id: 5, col: 1, row: 5, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.FREE },
  { id: 6, col: 1, row: 7, colSpan: 2, rowSpan: 1, status: WORKSPACE_STATUS.FREE },
  { id: 7, col: 3, row: 4, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.FREE },
  { id: 8, col: 4, row: 4, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.EMPTY },
  { id: 9, col: 3, row: 6, colSpan: 2, rowSpan: 1, status: WORKSPACE_STATUS.EMPTY },
  { id: 10, col: 6, row: 2, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.FREE },
  { id: 11, col: 6, row: 4, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.FREE },
  { id: 12, col: 6, row: 6, colSpan: 1, rowSpan: 2, status: WORKSPACE_STATUS.FREE },
]
