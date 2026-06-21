import { OutreachEntry, CollegeEntry, CalendarEvent, NotificationItem } from "./types";

// ─── Outreach Data ───
export const outreachData: OutreachEntry[] = [
  { sno: 1, name: "Rohan Abeyaratne", email: "rohan@mit.edu", university: "MIT", researchFocus: "Mechanics", dateSent: "2026-06-20", status: "sent" },
  { sno: 2, name: "Faez Ahmed", email: "faez@mit.edu", university: "MIT", researchFocus: "Design and Manufacturing", dateSent: "2026-06-20", status: "sent" },
  { sno: 3, name: "Jean-Jacques Slotine", email: "jjs@mit.edu", university: "MIT", researchFocus: "Controls, Instrumentation and Robotics", dateSent: "2026-06-20", status: "responded", responseDate: "2026-06-20", responseSummary: "Apply through formal admissions - contact Una Shehan (oona@mit.edu)" },
  { sno: 4, name: "Alexander Slocum", email: "slocum@mit.edu", university: "MIT", researchFocus: "Design and Manufacturing", dateSent: "2026-06-20", status: "responded", responseDate: "2026-06-21", responseSummary: "Retiring soon - no new students. Apply through committee. Suggested industry-funded research." },
  { sno: 5, name: "Neville Hogan", email: "neville@mit.edu", university: "MIT", researchFocus: "Controls, Instrumentation and Robotics", dateSent: "2026-06-20", status: "responded", responseDate: "2026-06-20", responseSummary: "No new appointments in the coming year" },
  { sno: 6, name: "Ian Hunter", email: "ihunter@mit.edu", university: "MIT", researchFocus: "Controls, Instrumentation and Robotics", dateSent: "2026-06-20", status: "responded", responseDate: "2026-06-20", responseSummary: "Ideal fit - lab is full. Will notify when opening available. Praised PQ2 Calculator." },
  { sno: 7, name: "Raphael Zufferey", email: "raphz@mit.edu", university: "MIT", researchFocus: "Controls, Instrumentation and Robotics", dateSent: "2026-06-20", status: "responded", responseDate: "2026-06-21", responseSummary: "Traveling until June 26 - follow up after return" },
  { sno: 8, name: "Sang-Gook Kim", email: "sangk@mit.edu", university: "MIT", researchFocus: "Design and Manufacturing", dateSent: "2026-06-20", status: "sent" },
  { sno: 9, name: "Sangbae Kim", email: "sangbae@mit.edu", university: "MIT", researchFocus: "Design and Manufacturing", dateSent: "2026-06-20", status: "sent" },
  { sno: 10, name: "Steven B. Leeb", email: "sbleeb@mit.edu", university: "MIT", researchFocus: "Controls, Instrumentation and Robotics", dateSent: "2026-06-20", status: "sent" },
];

// ─── Colleges Data (merged from user research — 26 universities) ───
export const collegesData: CollegeEntry[] = [
  { sno: 1, name: "Stanford University", location: "Stanford, CA", focusAreas: "Fluids, Mfg, Materials, Thermo", admissionUrl: "https://me.stanford.edu/academics-admissions/graduate-programs/doctoral-program/phd-admissions", duration: "5 yrs", cost: "$71,235/yr" },
  { sno: 2, name: "Caltech", location: "Pasadena, CA", focusAreas: "Fluids, Materials, Thermo, Aero", admissionUrl: "https://mce.caltech.edu/academics/grad/graduate-degree-in-applied-mechanics", duration: "4 yrs", cost: "$71,082/yr" },
  { sno: 3, name: "Cornell University", location: "Ithaca, NY", focusAreas: "Fluids, Materials, Mfg, Thermo", admissionUrl: "https://www.duffield.cornell.edu/mae/phd/phd-admissions/", duration: "3 yrs", cost: "$23,318/yr" },
  { sno: 4, name: "U Michigan-Ann Arbor", location: "Ann Arbor, MI", focusAreas: "Fluids, Mfg, Materials, Aero", admissionUrl: "https://me.engin.umich.edu/admissions/graduate/", duration: "3 yrs", cost: "$119,459/yr" },
  { sno: 5, name: "Northwestern University", location: "Evanston, IL", focusAreas: "Materials, Fluids, Mechanics", admissionUrl: "https://www.tgs.northwestern.edu/admission/", duration: "4 yrs", cost: "$62,859/yr" },
  { sno: 6, name: "Carnegie Mellon University", location: "Pittsburgh, PA", focusAreas: "Mfg, Materials, Fluids", admissionUrl: "https://www.meche.engineering.cmu.edu/education/graduate-programs/phd/", duration: "3 yrs", cost: "$57,459/yr" },
  { sno: 7, name: "UW-Madison", location: "Madison, WI", focusAreas: "Mfg, Fluids, Thermo, Materials", admissionUrl: "https://engineering.wisc.edu/programs/degrees/mechanical-engineering-phd/", duration: "5 yrs", cost: "$28,847/yr" },
  { sno: 8, name: "Ohio State University", location: "Columbus, OH", focusAreas: "Mfg, Fluids, Thermo, Aero", admissionUrl: "https://gpadmissions.osu.edu/programs/program.aspx?prog=0136", duration: "5 yrs", cost: "$16,059/yr" },
  { sno: 9, name: "U New Mexico", location: "Albuquerque, NM", focusAreas: "Mfg, Materials", admissionUrl: "https://grad.unm.edu/", duration: "4 yrs", cost: "$38,941/yr" },
  { sno: 10, name: "Southern Methodist U", location: "Dallas, TX", focusAreas: "Mfg, Fluids", admissionUrl: "https://www.smu.edu/lyle/departments/me/doctoral-programs", duration: "3 yrs", cost: "$42,882/yr" },
  { sno: 11, name: "U Vermont", location: "Burlington, VT", focusAreas: "Materials, Fluids", admissionUrl: "https://www.uvm.edu/cems/me/program/phd-mechanical-engineering", duration: "4 yrs", cost: "$57,847/yr" },
  { sno: 12, name: "U Miami", location: "Coral Gables, FL", focusAreas: "Materials, Fluids", admissionUrl: "https://bulletin.miami.edu/graduate-academic-programs/engineering/", duration: "4 yrs", cost: "$71,141/yr" },
  { sno: 13, name: "UIC", location: "Chicago, IL", focusAreas: "Fluids, Mfg", admissionUrl: "https://mie.uic.edu/graduate/phd-programs/", duration: "4 yrs", cost: "$36,471/yr" },
  { sno: 14, name: "U Utah", location: "Salt Lake City, UT", focusAreas: "Fluids, Thermo", admissionUrl: "https://www.mech.utah.edu/grads/admissions/", duration: "5 yrs", cost: "$22,494/yr" },
  { sno: 15, name: "U Central Florida", location: "Orlando, FL", focusAreas: "Fluids, Mfg, Thermo", admissionUrl: "https://mae.ucf.edu/ph-d-in-mechanical-engineering/", duration: "4 yrs", cost: "$25,776/yr" },
  { sno: 16, name: "SUNY Buffalo", location: "Buffalo, NY", focusAreas: "Fluids, Materials", admissionUrl: "https://www.buffalo.edu/grad/programs/mechanical-engineering-phd.html", duration: "5 yrs", cost: "$28,024/yr" },
  { sno: 17, name: "U Iowa", location: "Iowa City, IA", focusAreas: "Fluids, Mfg", admissionUrl: "https://engineering.uiowa.edu/mechanical-engineering-graduate-program/", duration: "5 yrs", cost: "$37,329/yr" },
  { sno: 18, name: "Louisiana State U", location: "Baton Rouge, LA", focusAreas: "Fluids, Materials", admissionUrl: "https://www.lsu.edu/eng/mie/graduate/me/pme-program.php", duration: "4 yrs", cost: "$33,376/yr" },
  { sno: 19, name: "U Georgia", location: "Athens, GA", focusAreas: "Materials, Mechanics", admissionUrl: "https://engineering.uga.edu/degree/phd-mechanical-engineering/", duration: "4 yrs", cost: "$33,835/yr" },
  { sno: 20, name: "Kansas State U", location: "Manhattan, KS", focusAreas: "Mfg, Thermo", admissionUrl: "https://www.sdstate.edu/programs/graduate/mechanical-engineering-phd", duration: "3 yrs", cost: "$22,094/yr" },
  { sno: 21, name: "U Tennessee Knoxville", location: "Knoxville, TN", focusAreas: "Mfg, Materials", admissionUrl: "https://tickle.utk.edu/mae/academics/graduate/mechanical-engineering-phd/", duration: "3 yrs", cost: "$36,200/yr" },
  { sno: 22, name: "U Puerto Rico Mayaguez", location: "Mayaguez, PR", focusAreas: "Mfg, Materials", admissionUrl: "https://www.uprm.edu/inme/academic/grad/prospecgrad/applymegrad/", duration: "4 yrs", cost: "$7,235/yr" },
  { sno: 23, name: "U Oklahoma Norman", location: "Norman, OK", focusAreas: "Fluids, Thermo", admissionUrl: "https://www.ou.edu/coe/ame/academics/graduate/phd-requirements", duration: "3 yrs", cost: "$28,259/yr" },
  { sno: 24, name: "South Dakota State U", location: "Brookings, SD", focusAreas: "Mfg, Materials", admissionUrl: "https://www.sdstate.edu/programs/graduate/mechanical-engineering-phd", duration: "3 yrs", cost: "$22,000/yr" },
  { sno: 25, name: "USC-Aiken", location: "Aiken, SC", focusAreas: "Mfg, Fluids", admissionUrl: "https://sc.edu/study/majors_and_degrees/mechanical-engineering-phd.php", duration: "5 yrs", cost: "$16,682/yr" },
  { sno: 26, name: "U South Florida Tampa", location: "Tampa, FL", focusAreas: "Fluids, Mfg", admissionUrl: "https://www.usf.edu/engineering/mae/graduate/grad-admissions.aspx", duration: "4 yrs", cost: "$22,400/yr" },
  { sno: 27, name: "NYU Tandon", location: "Brooklyn, NY", focusAreas: "Fluids, Mfg, Materials", admissionUrl: "https://engineering.nyu.edu/academics/programs/mechanical-engineering-phd", duration: "5 yrs", cost: "$78,541/yr" },
];

// ─── Calendar Events ───
export const calendarData: CalendarEvent[] = [
  { id: "1", date: "2026-06-26", title: "Follow up: Prof. Zufferey (MIT)", description: "Returns from travel. Send follow-up email.", type: "follow_up", professor: "Raphael Zufferey" },
  { id: "2", date: "2026-07-15", title: "MIT Fall 2026 Application Deadline", description: "Check MIT MechE PhD deadlines. Slotine + Slocum recommended formal application.", type: "deadline", professor: null },
  { id: "3", date: "2026-06-23", title: "Follow up: Una Shehan (MIT Admissions)", description: "Contacted per Slotine's referral. Follow up if no response by Wednesday.", type: "action", professor: null },
  { id: "4", date: "2026-06-30", title: "Check Ian Hunter's Lab", description: "He called you 'ideal fit' — will notify when opening. Check back monthly.", type: "follow_up", professor: "Ian Hunter" },
  { id: "5", date: "2026-08-01", title: "Stanford PhD Application Opens", description: "Check Stanford ME PhD application portal for Fall 2027 admission cycle.", type: "deadline", professor: null },
  { id: "6", date: "2026-09-15", title: "Cornell MAE PhD Application Deadline", description: "Check Cornell Sibley School PhD application deadline for Fall 2027.", type: "deadline", professor: null },
];

// ─── Notifications ───
export const notificationsData: NotificationItem[] = [
  { id: "1", date: "2026-06-21", title: "Prof. Slotine Responded", message: "Apply through formal MIT admissions. Contact Una Shehan (oona@mit.edu). Email sent.", type: "info", read: true, actionable: true },
  { id: "2", date: "2026-06-21", title: "Prof. Slocum — Retiring", message: "No new students. Suggested finding industry-sponsored research topics.", type: "info", read: true, actionable: false },
  { id: "3", date: "2026-06-21", title: "Prof. Hunter — Positive!", message: "Called you 'ideal fit' but lab is full. Will notify when opening available.", type: "positive", read: true, actionable: false },
  { id: "4", date: "2026-06-26", title: "Follow up: Prof. Zufferey", message: "Returns from travel June 26. Prepare follow-up email.", type: "reminder", read: false, actionable: true },
  { id: "5", date: "2026-06-30", title: "Pipeline Progress", message: "Human-like outreach pipeline running. 14+ sent, 7 responses (50% response rate!).", type: "positive", read: false, actionable: false },
  { id: "6", date: "2026-07-01", title: "Admission Deadlines Approaching", message: "Multiple universities have Fall deadlines in August-September. Start preparing applications.", type: "warning", read: false, actionable: true },
];
