import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import DataPage from './pages/DataPage';
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
                        <Route path="collaborative" element={<DataPage pageType="COLLABORATIVE" />} />
                        <Route path="exploration" element={<DataPage pageType="EXPLORATION" />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
