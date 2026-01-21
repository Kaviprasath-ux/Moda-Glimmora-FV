import { create } from "zustand"
import type { BespokeProject } from "@/lib/types"
import { mockBespokeProjects } from "@/data/mock/bespoke-projects"

interface BespokeState {
  projects: BespokeProject[]
  activeProject: BespokeProject | null
  isLoading: boolean

  // Actions
  setProjects: (projects: BespokeProject[]) => void
  setActiveProject: (project: BespokeProject | null) => void
  getProjectById: (id: string) => BespokeProject | undefined
  getActiveProjects: () => BespokeProject[]
  getCompletedProjects: () => BespokeProject[]
  approveStage: (projectId: string, stageId: string) => void
  selectOption: (projectId: string, stageId: string, optionId: string) => void
  addToMoodboard: (projectId: string, item: BespokeProject["moodboard"][0]) => void
  removeFromMoodboard: (projectId: string, itemId: string) => void
  updateProjectNotes: (projectId: string, notes: string) => void
}

export const useBespokeStore = create<BespokeState>((set, get) => ({
  projects: mockBespokeProjects,
  activeProject: null,
  isLoading: false,

  setProjects: (projects) => set({ projects }),

  setActiveProject: (project) => set({ activeProject: project }),

  getProjectById: (id) => get().projects.find((p) => p.id === id),

  getActiveProjects: () =>
    get().projects.filter((p) => p.status !== "delivered"),

  getCompletedProjects: () =>
    get().projects.filter((p) => p.status === "delivered"),

  approveStage: (projectId, stageId) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              timeline: project.timeline.map((stage) =>
                stage.id === stageId
                  ? { ...stage, approved: true, approvedAt: new Date() }
                  : stage
              ),
              updatedAt: new Date()
            }
          : project
      )
    })),

  selectOption: (projectId, stageId, optionId) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              timeline: project.timeline.map((stage) =>
                stage.id === stageId
                  ? {
                      ...stage,
                      options: stage.options?.map((opt) => ({
                        ...opt,
                        selected: opt.id === optionId
                      }))
                    }
                  : stage
              ),
              updatedAt: new Date()
            }
          : project
      )
    })),

  addToMoodboard: (projectId, item) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              moodboard: [...project.moodboard, item],
              updatedAt: new Date()
            }
          : project
      )
    })),

  removeFromMoodboard: (projectId, itemId) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              moodboard: project.moodboard.filter((item) => item.id !== itemId),
              updatedAt: new Date()
            }
          : project
      )
    })),

  updateProjectNotes: (projectId, notes) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? { ...project, notes, updatedAt: new Date() }
          : project
      )
    }))
}))
