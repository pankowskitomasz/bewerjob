import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import DashboardView from './views/dashboardView';
import JobView from "./views/jobView";
import JobCategoryView from './views/job/jobCategoryView';
import JobDetailsView from './views/job/jobDetailsView';
import JobListView from './views/job/jobListView';
import JobSearchView from './views/job/jobSearchView';
import MessageView from './views/messageView';
import MessageDetailsView from './views/message/messageDetailsView';
import MessageListView from './views/message/messageListView';
import MessageNewView from './views/message/messageNewView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/job" element={<JobView/>}/>
            <Route exact path="/job/category" element={<JobCategoryView/>}/>
            <Route exact path="/job/details/*">
              <Route path=":id" element={<JobDetailsView/>}/>
            </Route>
            <Route exact path="/job/list" element={<JobListView/>}/>
            <Route exact path="/job/search" element={<JobSearchView/>}/>
            <Route exact path="/message" element={<MessageView/>}/>
            <Route exact path="/message/details/*">
              <Route path=":id" element={<MessageDetailsView/>}/>
            </Route>
            <Route exact path="/message/list" element={<MessageListView/>}/>
            <Route exact path="/message/new" element={<MessageNewView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
        </Routes>
    </Router>
  );
}

export default App;
