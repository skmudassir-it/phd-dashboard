import { OutreachEntry, CollegeEntry, CalendarEvent, NotificationItem } from "./types";

// ─── Outreach Data ───
// This file gets updated by the Hermes Gmail sync cron job.
// Edit manually or let the sync script update it.

export const outreachData: OutreachEntry[] = [
  {
    sno: 1,
    name: "Rohan Abeyaratne",
    email: "rohan@mit.edu",
    university: "MIT",
    researchFocus: "Mechanics",
    dateSent: "2026-06-20",
    status: "sent"
  },
  {
    sno: 2,
    name: "Faez Ahmed",
    email: "faez@mit.edu",
    university: "MIT",
    researchFocus: "Design and Manufacturing",
    dateSent: "2026-06-20",
    status: "sent"
  },
  {
    sno: 3,
    name: "Jean-Jacques Slotine",
    email: "jjs@mit.edu",
    university: "MIT",
    researchFocus: "Controls, Instrumentation and Robotics",
    dateSent: "2026-06-20",
    status: "responded",
    responseDate: "2026-06-20",
    responseSummary: "Apply through formal admissions - contact Una Shehan"
  },
  {
    sno: 4,
    name: "Alexander Slocum",
    email: "slocum@mit.edu",
    university: "MIT",
    researchFocus: "Design and Manufacturing",
    dateSent: "2026-06-20",
    status: "responded",
    responseDate: "2026-06-21",
    responseSummary: "Retiring soon - no new students. Apply through committee."
  },
  {
    sno: 5,
    name: "Neville Hogan",
    email: "neville@mit.edu",
    university: "MIT",
    researchFocus: "Controls, Instrumentation and Robotics",
    dateSent: "2026-06-20",
    status: "responded",
    responseDate: "2026-06-20",
    responseSummary: "No new appointments in the coming year"
  },
  {
    sno: 6,
    name: "Ian Hunter",
    email: "ihunter@mit.edu",
    university: "MIT",
    researchFocus: "Controls, Instrumentation and Robotics",
    dateSent: "2026-06-20",
    status: "responded",
    responseDate: "2026-06-20",
    responseSummary: "Ideal fit but lab is full - will notify when opening available"
  },
  {
    sno: 7,
    name: "Raphael Zufferey",
    email: "raphz@mit.edu",
    university: "MIT",
    researchFocus: "Controls, Instrumentation and Robotics",
    dateSent: "2026-06-20",
    status: "responded",
    responseDate: "2026-06-21",
    responseSummary: "Traveling until June 26 - follow up after"
  },
  {
    sno: 8,
    name: "Sang-Gook Kim",
    email: "sangk@mit.edu",
    university: "MIT",
    researchFocus: "Design and Manufacturing",
    dateSent: "2026-06-20",
    status: "sent"
  },
  {
    sno: 9,
    name: "Sangbae Kim",
    email: "sangbae@mit.edu",
    university: "MIT",
    researchFocus: "Design and Manufacturing",
    dateSent: "2026-06-20",
    status: "sent"
  },
  {
    sno: 10,
    name: "Steven B. Leeb",
    email: "sbleeb@mit.edu",
    university: "MIT",
    researchFocus: "Controls, Instrumentation and Robotics",
    dateSent: "2026-06-20",
    status: "sent"
  }
];

// ─── Colleges Data ───
export const collegesData: CollegeEntry[] = [
  { sno: 1, name: "Stanford University", location: "Stanford, CA", focusAreas: "Fluids, Thermo, Aero, Materials, Manufacturing", admissionUrl: "https://me.stanford.edu/academics-admissions/graduate-programs/doctoral-program/phd-admissions", duration: "5 years", cost: "Fully funded (tuition + ~$50K stipend)" },
  { sno: 2, name: "California Institute of Technology", location: "Pasadena, CA", focusAreas: "Fluids, Aero, Materials, Thermo", admissionUrl: "https://www.eas.caltech.edu/academics/grad", duration: "5 years", cost: "Fully funded (tuition + ~$45K stipend)" },
  { sno: 3, name: "Cornell University", location: "Ithaca, NY", focusAreas: "Fluids, Thermo, Materials, Manufacturing, Aero", admissionUrl: "https://www.duffield.cornell.edu/mae/phd/phd-admissions/", duration: "5 years", cost: "Fully funded (tuition + ~$43K stipend)" },
  { sno: 4, name: "UMich-Ann Arbor", location: "Ann Arbor, MI", focusAreas: "Manufacturing, Fluids, Materials, Thermo, Aero", admissionUrl: "https://me.engin.umich.edu/admissions/graduate/", duration: "5-6 years", cost: "Fully funded (tuition + ~$38K stipend)" },
  { sno: 5, name: "Northwestern University", location: "Evanston, IL", focusAreas: "Materials, Manufacturing, Fluids, Thermo", admissionUrl: "https://www.mccormick.northwestern.edu/mechanical/academics/graduate/prospective-phd/how-to-apply.html", duration: "5 years", cost: "Fully funded (tuition + ~$42K stipend)" },
  { sno: 6, name: "Carnegie Mellon University", location: "Pittsburgh, PA", focusAreas: "Manufacturing, Materials, Fluids, Thermo", admissionUrl: "https://www.meche.engineering.cmu.edu/education/graduate-programs/admission/index.html", duration: "5 years", cost: "Fully funded (tuition + ~$40K stipend)" },
  { sno: 7, name: "UW-Madison", location: "Madison, WI", focusAreas: "Materials, Manufacturing, Thermo, Fluids", admissionUrl: "https://www.engr.wisc.edu/department/mechanical-engineering/academics/graduate/", duration: "5 years", cost: "Fully funded (tuition + ~$35K stipend)" },
  { sno: 8, name: "Ohio State University", location: "Columbus, OH", focusAreas: "Manufacturing, Fluids, Aero, Materials, Thermo", admissionUrl: "https://mae.osu.edu/graduate", duration: "5 years", cost: "Fully funded (tuition + ~$32K stipend)" },
  { sno: 9, name: "University of Central Florida", location: "Orlando, FL", focusAreas: "Aero, Thermo, Fluids, Manufacturing", admissionUrl: "https://www.cecs.ucf.edu/mechanical-aerospace-graduate/", duration: "4-5 years", cost: "Fully funded (tuition + ~$28K stipend)" },
  { sno: 10, name: "University at Buffalo", location: "Buffalo, NY", focusAreas: "Fluids, Aero, Materials, Thermo", admissionUrl: "https://engineering.buffalo.edu/mechanical-aerospace/graduate.html", duration: "5 years", cost: "Fully funded (tuition + ~$30K stipend)" },
  { sno: 11, name: "University of Tennessee", location: "Knoxville, TN", focusAreas: "Manufacturing, Materials, Fluids, Thermo", admissionUrl: "https://mabe.utk.edu/graduate/", duration: "4-5 years", cost: "Fully funded (tuition + ~$28K stipend)" },
  { sno: 12, name: "University of Utah", location: "Salt Lake City, UT", focusAreas: "Fluids, Materials, Manufacturing, Thermo", admissionUrl: "https://www.mech.utah.edu/graduate/", duration: "5 years", cost: "Fully funded (tuition + ~$30K stipend)" },
  { sno: 13, name: "UIC (Illinois-Chicago)", location: "Chicago, IL", focusAreas: "Manufacturing, Fluids, Materials, Thermo", admissionUrl: "https://mie.uic.edu/graduate-studies/", duration: "5 years", cost: "Fully funded (tuition + ~$30K stipend)" },
  { sno: 14, name: "University of Oklahoma", location: "Norman, OK", focusAreas: "Fluids, Aero, Thermo, Materials", admissionUrl: "https://www.ou.edu/coe/ame/graduate", duration: "4-5 years", cost: "Fully funded (tuition + ~$26K stipend)" },
  { sno: 15, name: "NYU Tandon School of Engineering", location: "Brooklyn, NY", focusAreas: "Manufacturing, Fluids, Materials, Thermo", admissionUrl: "https://engineering.nyu.edu/academics/departments/mechanical-and-aerospace-engineering/graduate-programs", duration: "5 years", cost: "Fully funded (tuition + ~$42K stipend)" },
  { sno: 16, name: "Southern Methodist University", location: "Dallas, TX", focusAreas: "Thermo, Fluids, Manufacturing, Materials", admissionUrl: "https://www.smu.edu/Lyle/Departments/ME/Admissions", duration: "5 years", cost: "Fully funded (tuition + ~$30K stipend)" },
  { sno: 17, name: "University of Iowa", location: "Iowa City, IA", focusAreas: "Fluids, Thermo, Materials, Manufacturing", admissionUrl: "https://me.engineering.uiowa.edu/graduate-program", duration: "5 years", cost: "Fully funded (tuition + ~$28K stipend)" },
  { sno: 18, name: "Kansas State University", location: "Manhattan, KS", focusAreas: "Manufacturing, Fluids, Thermo, Materials", admissionUrl: "https://www.mne.ksu.edu/graduate/", duration: "4-5 years", cost: "Fully funded (tuition + ~$25K stipend)" },
  { sno: 19, name: "University of South Florida", location: "Tampa, FL", focusAreas: "Fluids, Materials, Manufacturing, Thermo", admissionUrl: "https://www.usf.edu/engineering/me/graduate/", duration: "5 years", cost: "Fully funded (tuition + ~$27K stipend)" },
  { sno: 20, name: "Louisiana State University", location: "Baton Rouge, LA", focusAreas: "Fluids, Thermo, Materials, Manufacturing", admissionUrl: "https://www.lsu.edu/eng/me/graduate/index.php", duration: "5 years", cost: "Fully funded (tuition + ~$25K stipend)" }
];

// ─── Calendar Events ───
export const calendarData: CalendarEvent[] = [
  {
    id: "1",
    date: "2026-06-26",
    title: "Follow up with Prof. Zufferey (MIT)",
    description: "He returns from travel on June 26. Send follow-up email.",
    type: "follow_up",
    professor: "Raphael Zufferey"
  },
  {
    id: "2",
    date: "2026-07-15",
    title: "MIT Application Deadline Check",
    description: "Check MIT MechE Fall 2026 PhD application deadlines. Prof. Slotine recommended applying through the formal graduate program.",
    type: "deadline",
    professor: null
  },
  {
    id: "3",
    date: "2026-06-23",
    title: "Contact Una Shehan (MIT Admissions)",
    description: "Prof. Slotine directed to contact Una Shehan at oona@mit.edu. Already sent email - follow up if no response.",
    type: "action",
    professor: null
  },
  {
    id: "4",
    date: "2026-06-27",
    title: "Check Ian Hunter's lab for openings",
    description: "Prof. Hunter said he'd notify when openings available. Check back periodically.",
    type: "follow_up",
    professor: "Ian Hunter"
  }
];

// ─── Notifications ───
export const notificationsData: NotificationItem[] = [
  {
    id: "1",
    date: "2026-06-21",
    title: "Prof. Slotine Responded",
    message: "Apply through formal MIT admissions. Contact Una Shehan (oona@mit.edu). Action required.",
    type: "info",
    read: true,
    actionable: true
  },
  {
    id: "2",
    date: "2026-06-21",
    title: "Prof. Slocum - Retiring",
    message: "No new students. Suggested finding industry-sponsored research topics.",
    type: "info",
    read: true,
    actionable: false
  },
  {
    id: "3",
    date: "2026-06-21",
    title: "Prof. Hunter - Positive Response",
    message: "Called you an 'ideal fit' but lab is full. Will notify when opening available.",
    type: "positive",
    read: true,
    actionable: false
  },
  {
    id: "4",
    date: "2026-06-26",
    title: "Follow up: Prof. Zufferey",
    message: "Prof. Zufferey returns from travel. Send follow-up email.",
    type: "reminder",
    read: false,
    actionable: true
  },
  {
    id: "5",
    date: "2026-06-30",
    title: "Pipeline Progress Check",
    message: "Human-like outreach pipeline still running. Current progress tracked in state.json.",
    type: "reminder",
    read: false,
    actionable: false
  }
];
