import React, { Suspense } from 'react'
import ApplicationStat from './ApplicationStat'
import ApplicationList from './ApplicationList'
import useAuth from '../../hooks/useAuth'
import { myApplicationsPromise } from '../../api/applicationsApi'

const MyApplication = () => {
    const {user}=useAuth();
  return (
    <div className='flex flex-col items-center justify-around'>
            <ApplicationStat></ApplicationStat>
           <Suspense fallback={'loading your Applications '}>
             <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}/>
           </Suspense>
    </div>
  )
}

export default MyApplication
