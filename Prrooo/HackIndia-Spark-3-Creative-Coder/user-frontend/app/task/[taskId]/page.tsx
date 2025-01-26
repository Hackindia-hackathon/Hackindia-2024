"use client"
import HeaderSection from '@/components/HeaderSection';
import { BACKEND_URL } from '@/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';

async function getTaskDetails(taskId: string) {
    // http://localhost:5000/api/user/task
    const response = await axios.get(`http://localhost:${BACKEND_URL}/api/user/${taskId}`, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    return response.data
}

export default function Page({params: { 
    taskId 
}}: {params: { taskId: string }}) {
    const [result, setResult] = useState<Record<string, {
        count: number;
        option: {
            imageUrl: string
        }
    }>>({});
    const [taskDetails, setTaskDetails] = useState<{
        title?: string
    }>({});

    useEffect(() => {
        getTaskDetails(taskId)
            .then((data) => {
                setResult(data.result)
                setTaskDetails(data.taskDetails)
            })
    }, [taskId]);

    return <div>
        {/* <Appbar /> */}
        <HeaderSection/>
        <div className='text-2xl pt-20 flex justify-center'>
            {taskDetails.title}
        </div>
        <div className='flex justify-center pt-8'>
            {Object.keys(result || {}).map(taskId => <Task key={taskId} imageUrl={result[taskId].option.imageUrl} votes={result[taskId].count} />)}
        </div>
    </div>
}

function Task({imageUrl, votes}: {
    imageUrl: string;
    votes: number;
}) {
    return <div>
        <img className={"p-2 w-96 rounded-md"} src={imageUrl} />
        <div className='flex justify-center'>
            {votes}
        </div>
    </div>
}