import type { ConciergeMessage, ConciergeConversation, ConciergeRequest, ScheduledCall } from "@/lib/types"

export const mockConciergeMessages: ConciergeMessage[] = [
  {
    id: "msg-001",
    conversationId: "conv-001",
    role: "ai",
    content: "Good evening, Alexandra. I've reviewed your upcoming schedule. For the Monaco trip, I've identified some pieces that would be perfect. Would you like to see them?",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 min ago
    encrypted: true
  },
  {
    id: "msg-002",
    conversationId: "conv-001",
    role: "user",
    content: "Yes, and I also need something for the charity gala - something memorable.",
    timestamp: new Date(Date.now() - 28 * 60 * 1000),
    encrypted: true
  },
  {
    id: "msg-003",
    conversationId: "conv-001",
    role: "ai",
    content: "For a memorable impression at the gala, I recommend considering a bespoke option. Your current project with Maison Laurent is progressing beautifully, but the timeline may be tight. Shall I connect you with our human concierge who can discuss atelier connections and potentially expedite options?",
    timestamp: new Date(Date.now() - 25 * 60 * 1000),
    encrypted: true
  },
  {
    id: "msg-004",
    conversationId: "conv-001",
    role: "user",
    content: "Yes, please connect me.",
    timestamp: new Date(Date.now() - 23 * 60 * 1000),
    encrypted: true
  },
  {
    id: "msg-005",
    conversationId: "conv-001",
    role: "human",
    content: "Hello Alexandra! I'd be delighted to help with a statement piece for the gala. I have direct relationships with three Parisian ateliers who could potentially accommodate a rush timeline. What aesthetic speaks to you? I'm thinking something architectural might complement your evolving wardrobe.",
    timestamp: new Date(Date.now() - 20 * 60 * 1000),
    encrypted: true,
    humanConciergeId: "concierge-sarah-001"
  }
]

export const mockCurrentConversation: ConciergeConversation = {
  id: "conv-001",
  userId: "uhni-user-001",
  subject: "Gala Preparation & Monaco Trip",
  status: "active",
  currentHandler: "human",
  humanConciergeId: "concierge-sarah-001",
  messages: mockConciergeMessages,
  createdAt: new Date(Date.now() - 35 * 60 * 1000),
  updatedAt: new Date(Date.now() - 20 * 60 * 1000)
}

export const mockConciergeRequests: ConciergeRequest[] = [
  {
    id: "req-001",
    userId: "uhni-user-001",
    type: "sourcing",
    title: "Vintage Kelly Bag",
    description: "Locate a vintage Hermès Kelly 28 in gold with gold hardware",
    priority: "high",
    status: "in_progress",
    assignedTo: "concierge-sarah-001",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    notes: "Located option in Tokyo, awaiting client approval"
  },
  {
    id: "req-002",
    userId: "uhni-user-001",
    type: "styling",
    title: "Board Meeting Outfit",
    description: "Need styling advice for upcoming board meeting",
    priority: "normal",
    status: "completed",
    assignedTo: "concierge-sarah-001",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    notes: "Recommended Loro Piana suit with Hermès accessories"
  },
  {
    id: "req-003",
    userId: "uhni-user-001",
    type: "bespoke",
    title: "Evening Coat Commission",
    description: "Bespoke evening coat for fall season",
    priority: "normal",
    status: "in_progress",
    assignedTo: "concierge-sarah-001",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    notes: "Currently in fabric selection phase"
  }
]

export const mockScheduledCalls: ScheduledCall[] = [
  {
    id: "call-001",
    userId: "uhni-user-001",
    conciergeId: "concierge-sarah-001",
    scheduledFor: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    duration: 30,
    topic: "Monaco Trip Wardrobe Review",
    status: "scheduled",
    notes: "Review prepared items and discuss any gaps"
  }
]

export const mockPastConversations = [
  {
    id: "conv-past-001",
    subject: "Fall Wardrobe Planning",
    resolvedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    messageCount: 24,
    outcome: "Completed seasonal refresh, added 8 pieces to wardrobe"
  },
  {
    id: "conv-past-002",
    subject: "Hermès Quota Discussion",
    resolvedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    messageCount: 12,
    outcome: "Secured Birkin quota at Madison Avenue"
  },
  {
    id: "conv-past-003",
    subject: "Charity Event Styling",
    resolvedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    messageCount: 18,
    outcome: "Coordinated complete look with vintage Chanel"
  }
]
