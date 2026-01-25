import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";

const Home = lazy(() => import( "./pages/home/Home"));
const Skills = lazy(() => import( "./pages/skills/Skills"));
const Projects = lazy(() => import( "./pages/projects/Projects"));
const Contact = lazy(() => import("./pages/contact/Contact"));

import HomeSkeleton from "./pages/home/HomeSkeleton";
import SkillSkeleton from "./pages/skills/SkillSkeleton";
import ProjectSkeleton from "./pages/projects/ProjectSkeleton";
import ContactSkeleton from "./pages/contact/ContactSkeleton";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
		<div className="d-flex flex-column min-vh-100">
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
						<Route 
							path="/contact"
							element={
								<Suspense fallback={<ContactSkeleton />}>
									<Contact />
								</Suspense>
							}
						/>
            		</Routes>
				</Suspense>
        	</ErrorBoundary>
		</div>
  	);
};

export default App
