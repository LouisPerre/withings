import React from 'react';
import {Skeleton} from "@nextui-org/react"

const Loading = () => {
    return (
        <div className="loading-question-container">
                <Skeleton className='loading-question-category'>
                    <div className="loading-question-category">Loading</div>
                </Skeleton>
                <Skeleton className='loading-question-title'>
                    <div className='loading-question-title'>Loading</div>
                </Skeleton>
                <div className="loading-question-answers">
                    <Skeleton className="loading-answer">
                        <div className="loading-answer">Loading</div>
                    </Skeleton>
                    <Skeleton className="loading-answer">
                        <div className="loading-answer">Loading</div>
                    </Skeleton>
                    <Skeleton className="loading-answer">
                        <div className="loading-answer">Loading</div>
                    </Skeleton>
                    <Skeleton className="loading-answer">
                        <div className="loading-answer">Loading</div>
                    </Skeleton>
                </div>
                <Skeleton className='loading-question-submit'>
                    <div>Next</div>
                </Skeleton>
            </div>
    )
}

export default Loading;
