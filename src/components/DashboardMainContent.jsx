import React from 'react';
import DashboardOverview from '@/components/DashboardOverview';
import CalendarView from '@/components/CalendarView';
import UpcomingSchedule from '@/components/UpcomingSchedule';
import { MainContentWrapper, LeftColumn, RightColumn } from '@/styles/components/DashboardMainContent.styles';

const DashboardMainContent = () => (
  <MainContentWrapper>
    <LeftColumn>
      <DashboardOverview />
    </LeftColumn>
    <RightColumn>
      <CalendarView />
      <UpcomingSchedule />
    </RightColumn>
  </MainContentWrapper>
);

export default DashboardMainContent;
