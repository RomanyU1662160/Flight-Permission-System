import { getFilterYears } from '@/DB/helpers/flightHistory';
import YearsMenu from '@/components/custom/history/YearsMenu';
import React from 'react';

type DefaultDashboardPops = {
  params: {
    filter: string[];
  };
};

function DefaultDashboard({ params }: DefaultDashboardPops) {
  const yearsFilter = getFilterYears('2020', '2023');
  return (
    <div className='flex mt-5 mb-5 justify-start text-sm shadow bg-slate-200 p-3'>
      <YearsMenu years={yearsFilter} />
    </div>
  );
}

export default DefaultDashboard;
