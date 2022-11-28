import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import { SignIn, Signup, UpdateProfile,ForgotPassword, PasswordUpdate } from './pages';
import Ruff from './pages/Ruff';
import ChatPage from './pages/ChatPage';
import { ChatContextProvider } from './contexts/ChatContext';
import OTP from './pages/OTP';
import Index from './components/Discussion/StackOverflow';
import QuestionPage from './components/Discussion/AddQuestion';
import ViewIndex from './components/Discussion/ViewQuestion/ViewIndex';
import ProtectedRoute from './components/ProtectedRoute';
const App = () => {


  return (
    <> 
    <AuthProvider>
      <ChatContextProvider>
<Routes>
   <Route path="/" element={<Dashboard />} />
    <Route path ="/signin" element={<SignIn />} />
    <Route path ="/signup" element={<Signup />} />
    <Route path="/update" element={<UpdateProfile />} />
    <Route path="/forgot" element={<ForgotPassword />} />
    <Route path='/chat' element={<ChatPage />} />
    <Route path="/ruff" element={<Ruff />} />
    <Route path ="/OTP" element={<OTP />} />
    <Route path='/pass' element={<ProtectedRoute><PasswordUpdate /></ProtectedRoute>} />
<Route path ="/dis"  element={ 
  <Index />}/>
  <Route path ="/add" element={
  <QuestionPage />} />
  <Route path ="/view" element={<ViewIndex />} /> 


</Routes>

</ChatContextProvider>
</AuthProvider>
</>
  )
}

export default App
{/*

<Route path ="/dis"  element={ <ProtectedRoute>
  <Index /></ProtectedRoute>}/>
  <Route path ="/add" element={<ProtectedRoute>
  <QuestionPage /></ProtectedRoute>} />
  <Route path ="/view" element={<ProtectedRoute><ViewIndex /></ProtectedRoute>} /> */}