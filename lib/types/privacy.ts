export interface UHNISecuritySettings {
  invisibleMode: boolean
  biometricRequired: boolean
  twoFactorEnabled: boolean
  loginNotifications: boolean
  e2eEncryption: boolean
  discreetPackaging: boolean
  discreetBilling: boolean
}

export interface InvisibleModeSession {
  id: string
  startedAt: Date
  endedAt?: Date
  actionsPerformed: number
  purchasesMade: number
}

export interface DataCategory {
  id: string
  name: string
  description: string
  itemCount: number
  lastUpdated: Date
  canDelete: boolean
  canExport: boolean
}

export interface DataExportRequest {
  id: string
  userId: string
  status: "pending" | "processing" | "ready" | "expired"
  categories: string[]
  format: "json" | "csv" | "pdf"
  requestedAt: Date
  readyAt?: Date
  expiresAt?: Date
  downloadUrl?: string
}

export interface DataDeletionRequest {
  id: string
  userId: string
  category: string
  status: "pending" | "processing" | "completed" | "cancelled"
  requestedAt: Date
  scheduledFor: Date
  completedAt?: Date
  itemsDeleted?: number
}

export interface VaultItem {
  id: string
  userId: string
  type: "document" | "measurement" | "payment" | "address"
  name: string
  encryptedData: string
  createdAt: Date
  updatedAt: Date
  lastAccessedAt?: Date
}

export interface SecurityLog {
  id: string
  userId: string
  action: "login" | "logout" | "password_change" | "2fa_change" | "data_export" | "data_delete"
  ipAddress?: string
  userAgent?: string
  location?: string
  timestamp: Date
  success: boolean
}

export interface ConsentRecord {
  id: string
  userId: string
  type: "marketing" | "analytics" | "personalization" | "third_party"
  granted: boolean
  grantedAt?: Date
  revokedAt?: Date
  version: string
}
