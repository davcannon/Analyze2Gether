import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import CollaborativeDataLabPage from './pages/CollaborativeDataLabPage';
import DataExplorationPage from './pages/DataExplorationPage';
import PageLayout from './components/PageLayout';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Wrap all site routes with our PageLayout component, adding
                    the header on each page */}
                <Route element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="projects/:projectId">
                        <Route index element={<ProjectPage />} />
                        <Route path="collaborative" element={<CollaborativeDataLabPage />} />
                        <Route path="exploration" element={<DataExplorationPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
