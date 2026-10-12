import telehealthIcon from '../assets/home/stats/patient-portal-telehealth-icon.png';
import doctorTimeIcon from '../assets/home/stats/doctor-time-ehr-icon.png';
import dataBreachIcon from '../assets/home/stats/data-breach-cost-icon.png';
import paperRecordsIcon from '../assets/home/stats/paper-records-icon.png';

export const stats = [
  {
    icon: telehealthIcon,
    value: '84%',
    description: 'Patients specifically looking for providers with Patient Portal and Telehealth.',
  },
  {
    icon: doctorTimeIcon,
    value: '62%',
    description: "Of doctors' time spent on EHRs instead of patients.",
  },
  {
    icon: dataBreachIcon,
    value: '$3533',
    description:
      'Average cost per employee for a patient data breach for providers with less than 500 staff.',
  },
  {
    icon: paperRecordsIcon,
    value: '90%',
    description: 'Of paper records are avoidable, with administrative errors being the primary cause.',
  },
];
