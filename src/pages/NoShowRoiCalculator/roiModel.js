/**
 * The No-Show ROI Calculator's arithmetic, exactly as the page documents it ("How This No-Show ROI
 * Calculator Works"). It runs in the browser only. Appointment counts are whole appointments
 * (rounded), so the frame's defaults give 94 missed and 25 recovered visits, $5,000 recovered,
 * $4,622 net and a 1,223% monthly ROI. The resulting no-show rate applies the relative reduction
 * to the current rate (27% off 18.8% is 13.7%), as the field's help text states.
 */

// The frame's default inputs.
export const ROI_DEFAULTS = {
  practitioners: '2',
  visitsPerPractitioner: '250',
  noShowRate: '18.8',
  revenuePerVisit: '200',
  reduction: '27',
  costPerProvider: '189',
};

/** A field's value as a non-negative number (empty or invalid input counts as 0). */
function toNumber(value) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

export function computeRoi(inputs) {
  const practitioners = toNumber(inputs.practitioners);
  const visits = toNumber(inputs.visitsPerPractitioner);
  const rate = Math.min(toNumber(inputs.noShowRate), 100) / 100;
  const revenue = toNumber(inputs.revenuePerVisit);
  const reduction = Math.min(toNumber(inputs.reduction), 100) / 100;
  const costPerProvider = toNumber(inputs.costPerProvider);

  const totalAppointments = Math.round(practitioners * visits);
  const missedAppointments = Math.round(totalAppointments * rate);
  const revenueLost = missedAppointments * revenue;
  const recoveredAppointments = Math.round(missedAppointments * reduction);
  const revenueRecovered = recoveredAppointments * revenue;
  const totalCost = practitioners * costPerProvider;
  const netImpact = revenueRecovered - totalCost;
  // No software cost means no defined return.
  const roiPercent = totalCost > 0 ? (netImpact / totalCost) * 100 : null;
  const resultingRate = rate * (1 - reduction) * 100;

  return {
    totalAppointments,
    missedAppointments,
    revenueLost,
    recoveredAppointments,
    revenueRecovered,
    totalCost,
    netImpact,
    roiPercent,
    resultingRate,
    // Annualized figures: the monthly run rate × 12, held flat over the 3-year term.
    recoveredByYear: revenueRecovered * 12,
    netByYear: netImpact * 12,
  };
}

const wholeDollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const centDollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
const wholeNumber = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

export const formatDollars = (value) => wholeDollars.format(value);
export const formatCents = (value) => centDollars.format(value);
export const formatCount = (value) => wholeNumber.format(value);
export const formatPercent = (value) => (value === null ? '—' : `${wholeNumber.format(value)}%`);
export const formatRate = (value) => `${value.toFixed(1)}%`;
