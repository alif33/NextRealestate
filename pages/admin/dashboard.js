import React from 'react';
import AdminLayout from './../../src/components/admin/AdminLayout/AdminLayout';
import CategoryTable from '../../src/components/admin/Table/CategoryTable';

const Dashboard = () => {
    return (
        <AdminLayout>
            <CategoryTable></CategoryTable>
        </AdminLayout>
    );
};

export default Dashboard;