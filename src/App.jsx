import './App.css';
// import { useState } from 'react'
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";

const Home = lazy(() => import( "./pages/home/Home"));
const Skills = lazy(() => import( "./pages/skills/Skills"));
const Projects = lazy(() => import( "./pages/projects/Projects"));

import HomeSkeleton from "./pages/home/HomeSkeleton";
import SkillSkeleton from "./pages/skills/SkillSkeleton";
import ProjectSkeleton from "./pages/projects/ProjectSkeleton";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
    	<ErrorBoundary>
			<Suspense fallback={<HomeSkeleton />}>
            	<Routes>
                	<Route path="/" element={<Home />} />
                	<Route 
						path="/skills" 
						element={
							<Suspense fallback={<SkillSkeleton />}>
								<Skills />
							</Suspense>
						}
					/>
					<Route 
						path="/projects" 
						element={
							<Suspense fallback={<ProjectSkeleton />}>
								<Projects />
							</Suspense>
						} 
					/>
            	</Routes>
			</Suspense>
        </ErrorBoundary>
  	);
};

export default App
