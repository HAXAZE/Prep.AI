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
import { chatSession } from '@/utils/GenAi';

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDescription, setJobDescription] = useState();
    const [jobExperience, setJobExperience] = useState();


    const onSubmit = async(e)=>{
        e.preventDefault();
        console.log(jobPosition, jobDescription, jobExperience);
        const InputPrompt = "Job Position: "+jobPosition+", Job Description: +"+jobDescription+", Years of Experience: +"+jobExperience+", Depends on this information please give me  "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+"Interview Questions with Answers in JSON Format, Give questions and answers as field in JSON"

        const result = await chatSession.sendMessage(InputPrompt);

        console.log(result.response.text());
    }

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
                    <form onSubmit={onSubmit}>
                        <div className="text-lg font-semibold mb-4">
                            Add details about your job position/role, job description, and years of experience:
                        </div>
                        <div className='mt-7 my-3'>
                            <label>Job Role/Job Position</label>
                            <Input placeholder="Eg. Senior Software Engineer" required 
                            onChange ={(event)=>setJobPosition(event.target.value)}/>
                        </div>
                        <div className='my-3'>
                            <label>Job Description / Tech Stack</label>
                            <Textarea placeholder="Eg. React, DSA, Golang" required
                            onChange ={(event)=>setJobDescription(event.target.value)} />
                        </div>
                        <div className='my-3'>
                            <label>Years of Experience</label>
                            <Input placeholder="Eg. 2 Years" type="number" max="50" required
                            onChange ={(event)=>setJobExperience(event.target.value)}/>
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
