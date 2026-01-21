import { create } from "zustand"

interface UIState {
  // Navigation
  isMobileNavOpen: boolean
  isSearchOpen: boolean
  isConciergeOpen: boolean

  // Loading states
  isPageLoading: boolean
  loadingMessage: string | null

  // Modals
  activeModal: string | null
  modalData: Record<string, unknown> | null

  // Toast notifications
  toasts: Toast[]

  // Actions
  setMobileNavOpen: (isOpen: boolean) => void
  toggleMobileNav: () => void
  setSearchOpen: (isOpen: boolean) => void
  toggleSearch: () => void
  setConciergeOpen: (isOpen: boolean) => void
  toggleConcierge: () => void
  setPageLoading: (isLoading: boolean, message?: string) => void
  openModal: (modalId: string, data?: Record<string, unknown>) => void
  closeModal: () => void
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
  clearToasts: () => void
}

interface Toast {
  id: string
  title: string
  description?: string
  type: "default" | "success" | "error" | "warning"
  duration?: number
}

export const useUIStore = create<UIState>((set) => ({
  // Initial state
  isMobileNavOpen: false,
  isSearchOpen: false,
  isConciergeOpen: false,
  isPageLoading: false,
  loadingMessage: null,
  activeModal: null,
  modalData: null,
  toasts: [],

  // Actions
  setMobileNavOpen: (isMobileNavOpen) => set({ isMobileNavOpen }),
  toggleMobileNav: () => set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),

  setSearchOpen: (isSearchOpen) => set({ isSearchOpen }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),

  setConciergeOpen: (isConciergeOpen) => set({ isConciergeOpen }),
  toggleConcierge: () => set((state) => ({ isConciergeOpen: !state.isConciergeOpen })),

  setPageLoading: (isPageLoading, loadingMessage) => set({
    isPageLoading,
    loadingMessage: loadingMessage ?? null
  }),

  openModal: (activeModal, modalData) => set({ activeModal, modalData: modalData ?? null }),
  closeModal: () => set({ activeModal: null, modalData: null }),

  addToast: (toast) => set((state) => ({
    toasts: [
      ...state.toasts,
      { ...toast, id: `toast-${Date.now()}-${Math.random().toString(36).slice(2)}` }
    ]
  })),

  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter((toast) => toast.id !== id)
  })),

  clearToasts: () => set({ toasts: [] })
}))
