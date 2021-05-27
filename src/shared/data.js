export const dinnerTime = { from: 12, to: 13 };
export const holidays = [
  new Date(2021, 4, 29),
  new Date(2021, 6, 4)
];
export const resources = [
  {
    "id": 0,
    "text": "Gentry Levine"
  },
  {
    "id": 1,
    "text": "Sadie Shields"
  },
  {
    "id": 2,
    "text": "Brittany Macdonald"
  },
  {
    "id": 3,
    "text": "Tina Gillespie"
  },
  {
    "id": 4,
    "text": "Janet Hernandez"
  },
  {
    "id": 5,
    "text": "Steele Hines"
  },
  {
    "id": 6,
    "text": "Elizabeth Crane"
  },
  {
    "id": 7,
    "text": "Marquita Waller"
  },
  {
    "id": 8,
    "text": "Julie Roth"
  },
  {
    "id": 9,
    "text": "Velma Kelley"
  },
  {
    "id": 10,
    "text": "Haney Hurley"
  },
  // {
  //   "id": 11,
  //   "text": "Warner Burch"
  // },
  // {
  //   "id": 12,
  //   "text": "Anne Velazquez"
  // },
  // {
  //   "id": 13,
  //   "text": "Rivera Pierce"
  // },
  // {
  //   "id": 14,
  //   "text": "Lara Dickerson"
  // },
  // {
  //   "id": 15,
  //   "text": "Woodard Johnston"
  // },
  // {
  //   "id": 16,
  //   "text": "Alyssa Brooks"
  // },
  // {
  //   "id": 17,
  //   "text": "Isabelle Osborn"
  // },
  // {
  //   "id": 18,
  //   "text": "Ethel Guy"
  // },
  // {
  //   "id": 19,
  //   "text": "Mckee Huff"
  // },
  // {
  //   "id": 20,
  //   "text": "Stacy Hayes"
  // },
  // {
  //   "id": 21,
  //   "text": "Franco Lee"
  // },
  // {
  //   "id": 22,
  //   "text": "Roman Cline"
  // },
  // {
  //   "id": 23,
  //   "text": "Bridgette Walters"
  // },
  // {
  //   "id": 24,
  //   "text": "Clarissa Chambers"
  // },
  // {
  //   "id": 25,
  //   "text": "Copeland Frank"
  // }
];

const appointmentsText = [
  'Google AdWords Strategy',
  'New Brochures',
  'Brochure Design Review',
  'Website Re-Design Plan',
  'Rollout of New Website and Marketing Brochures',
  'Update Sales Strategy Documents',
  'Non-Compete Agreements',
  'Approve Hiring of John Jeffers',
  'Update NDA Agreement',
  'Update Employee Files with New NDA',
  'Submit Questions Regarding New NDA',
  'Submit Signed NDA',
  'Review Revenue Projections',
  'Comment on Revenue Projections',
  'Provide New Health Insurance Docs',
  'Review Changes to Health Insurance Coverage',
  'Review Training Course for any Ommissions',
  'Recall Rebate Form',
  'Create Report on Customer Feedback',
  'Review Customer Feedback Report',
  'Customer Feedback Report Analysis',
  'Prepare Shipping Cost Analysis Report',
  'Provide Feedback on Shippers',
  'Select Preferred Shipper',
  'Complete Shipper Selection Form',
  'Upgrade Server Hardware',
  'Upgrade Personal Computers',
  'Upgrade Apps to Windows RT or stay with WinForms',
  'Estimate Time Required to Touch-Enable Apps',
  'Report on Tranistion to Touch-Based Apps',
  'Submit New Website Design',
  'Create Icons for Website',
  'Create New Product Pages',
  'Approve Website Launch',
  'Update Customer Shipping Profiles',
  'Create New Shipping Return Labels',
  'Get Design for Shipping Return Labels',
  'PSD needed for Shipping Return Labels',
  'Contact ISP and Discuss Payment Options',
  'Prepare Year-End Support Summary Report',
  'Review New Training Material',
  'Distribute Training Material to Support Staff',
  'Training Material Distribution Schedule',
  'Approval on Converting to New HDMI Specification',
  'Create New Spike for Automation Server',
  'Code Review - New Automation Server',
  'Confirm Availability for Sales Meeting',
  'Reschedule Sales Team Meeting',
  'Send 2 Remotes for Giveaways',
  'Discuss Product Giveaways with Management',
  'Replace Desktops on the 3rd Floor',
  'Update Database with New Leads',
  'Mail New Leads for Follow Up',
  'Send Territory Sales Breakdown',
  'Territory Sales Breakdown Report',
  'Report on the State of Engineering Dept',
  'Staff Productivity Report'
];

function getRandomDuration(durationState) {
  const durationMin = Math.floor((durationState % 23) / 3 + 5) * 15;

  return durationMin * 60 * 1000;
}

function getRandomText(textIndex) {
  return appointmentsText[textIndex % appointmentsText.length];
}

function filterAppointmentsByTime(appointments, startDayHour, endDayHour) {
  const result = [];

  for (let i = 0; i < appointments.length; i++) {
    const startDate = appointments[i].startDate;
    const endDate = appointments[i].endDate;

    if (startDate.getDay() === endDate.getDay() &&
      startDate.getHours() >= startDayHour - 1 &&
      endDate.getHours() <= endDayHour - 1) {
      result.push(appointments[i]);
    }
  }

  return result;
}

export function generateAppointments(startDay, endDay, startDayHour, endDayHour) {
  const appointments = [];

  let textIndex = 0;
  let durationState = 1;
  const durationIncrement = 19;

  for (let i = 0; i < resources.length; i++) {
    let startDate = startDay;

    while (startDate.getTime() < endDay.getTime()) {
      durationState += durationIncrement;
      const endDate = new Date(startDate.getTime() + getRandomDuration(durationState));

      appointments.push({
        text: getRandomText(textIndex),
        startDate: startDate,
        endDate: endDate,
        humanId: resources[i].id
      });

      textIndex++;

      durationState += durationIncrement;
      startDate = new Date(endDate.getTime() + getRandomDuration(durationState));
    }
  }

  return filterAppointmentsByTime(appointments, startDayHour, endDayHour);
}