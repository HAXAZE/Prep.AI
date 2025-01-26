"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea';

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div>
            <div
                className='p-10 border rounded-lg bg-gradient-to-r from-sky-200 to-blue-400 hover:scale-105 cursor-pointer transition-all'
                onClick={() => setOpenDialog(true)}
            >
                <h2 className='font-bold text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
                        <DialogDescription className="text-gray-500">
                            Fill in the details below to create a new interview.
                        </DialogDescription>
                    </DialogHeader>
                    <form>
                        <div className="text-lg font-semibold mb-4">
                            Add details about your job position/role, job description, and years of experience:
                        </div>
                        <div className='mt-7 my-3'>
                            <label>Job Role/Job Position</label>
                            <Input placeholder="Eg. Senior Software Engineer" required />
                        </div>
                        <div className='my-3'>
                            <label>Job Description / Tech Stack</label>
                            <Textarea placeholder="Eg. React, DSA, Golang" required />
                        </div>
                        <div className='my-3'>
                            <label>Years of Experience</label>
                            <Input placeholder="Eg. 2 Years" type="number" max="50" required/>
                        </div>
                        <div className='flex gap-5 justify-end mt-5'>
                            <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                            <Button type="submit">Start Interview</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewInterview;
