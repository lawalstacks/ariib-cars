import { getAdmin } from '@/actions/admin'
import Header from '@/components/header';
import Sidebar from './admin/_components/sidebar';
import React from 'react'

const AdminLayout = async ({ children }) => {

    const admin = await getAdmin();
    if (!admin.authorized) {
        return notFound();
    }
    return (
        <div>
            <Header isAdminPage={true} />
            <div className='flex h-full w-56 flex-col top-20 fixed inset-y-0 z-50'>
                <Sidebar />
            </div>
            <main className='md:pl-56 pt-[80px] h-full'>{children}</main>
        </div>
    )
}

export default AdminLayout