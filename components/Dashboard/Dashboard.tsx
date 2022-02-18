import DashboardClient from './DashboardClient'
import DashboardArtist from './DashboardArtist'
import { useState, useEffect } from 'react'

//TODO: Connect Mode switch to side menu isClient for Artist|Client
//TODO: Iterator over data for jobs based on status grouping for jobs based on isClient

//const isClient = 1



const Dashboard = (isClient: boolean) => {
  
  useEffect(() => { 
    console.log('Listening dash-mode: ', isClient);
  });

  return <>{isClient ? <DashboardClient /> : <DashboardArtist />}</>
}

export default Dashboard
