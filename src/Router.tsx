import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import CollaborativeDataLabPage from './pages/CollaborativeDataLabPage';
import DataExplorationPage from './pages/DataExplorationPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="projects/:projectId">
                    <Route index element={<ProjectPage />} />
                    <Route path="collaborative" element={<CollaborativeDataLabPage />} />
                    <Route path="exploration" element={<DataExplorationPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
