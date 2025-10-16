'use client'

import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

const CarsList = () => {
    const [search, setSearch] = useState();

    const router = useRouter()

    const handleSearchSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='space-y-4'>
            <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
                <Button onClick={() => router.push('/admin/cars/create')}>
                    <Plus className='h-4 w-4' />
                    Add Car
                </Button>

                <form onSubmi={handleSearchSubmit}
                    className='flex w-full sm:w-auto'
                >

                    <div className='relative flex-1'>
                        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500' />
                        <Input className='pl-9 w-full sm:w-60'
                            value={search}
                            onChange={((e) => setSearch(e.target.value))}
                            type='search'
                            placeholder='Search Cars..'
                        />
                    </div>
                </form>

                {/* Cars Table */}
            </div>
        </div>
    )
}

export default CarsList