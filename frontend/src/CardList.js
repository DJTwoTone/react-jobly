import React from 'react';
import { applyToJob } from '../../backend/models/user';
import CompanyCard from './CompanyCard';
import JobCard from './JobCard';

function CardList({cardType, cards = []}) {

    if (!cards.length) {
        return (
        <div>
            <p>Sorry, no results where found</p>
        </div>)
    }

    

    
    
    return (cardType === 'company') ? (
        <div>

            {cards.map((card, idx) => (
                <CompanyCard 
                    info={card}
                    key={idx}
                    idx={idx}

                />
            ))}
        </div>
    ) : (

        <div>

            {cards.map((card, idx) => (
                <JobCard 
                    info={card}
                    key={idx}
                    idx={idx}
                    handleApply={() => applyToJob(idx)}
                />
            ))}

        </div>
    )
}

export default CardList;