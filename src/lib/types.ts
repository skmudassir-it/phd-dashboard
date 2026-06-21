export interface OutreachEntry {
  sno: number;
  name: string;
  email: string;
  university: string;
  researchFocus: string;
  dateSent: string;
  status: "sent" | "responded" | "followed_up" | "declined";
  responseDate?: string;
  responseSummary?: string;
}

export interface CollegeEntry {
  sno: number;
  name: string;
  location: string;
  focusAreas: string;
  admissionUrl: string;
  duration: string;
  cost: string;
}

export interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "follow_up" | "deadline" | "action" | "reminder";
  professor: string | null;
}

export interface NotificationItem {
  id: string;
  date: string;
  title: string;
  message: string;
  type: "info" | "positive" | "reminder" | "warning";
  read: boolean;
  actionable: boolean;
}

export interface DashboardStats {
  totalSent: number;
  totalResponded: number;
  responseRate: number;
  pendingFollowUps: number;
  upcomingDeadlines: number;
}
