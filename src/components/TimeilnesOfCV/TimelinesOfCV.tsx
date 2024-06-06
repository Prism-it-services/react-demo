import React from 'react';
import {Event, TimelineProps, TimelineContainer, TimelineItem, TimelineContent, DateLabel} from './styles'

const events = [
    {
        date: 'Current',
        title: 'Looking for a job as Developer',
        description: ''
      },

    {
        date: 'Feb 2019 To Dec 2023',
        title: 'Co-Founder, Board Member, COO & CRO, Orbital',
        description: 'Co-founded a fintech with 4 other parthers, bootstrapped for 4 years, currently 100+ strong team, received pre-series A funding in Q1 2023, exited the business in Dec 2023 ',
        link: 'https://www.getorbital.com/our-team'
      },

    {
        date: 'Feb 2018 To Feb 2019',
        title: 'Head of Operations & Service, AU Card LLC, US',
        description: 'Joined an US based company  '
      },
    {
        date: 'Oct 2016 To Feb 2018',
        title: 'Product Manager, LUUP Group Ltd, Glasgow/London',
        description: 'Shelfed my dream/passion for coding to join my boss from Citi in a Glasgow based fintech as Product Manager '
      },

    {
      date: 'May 2015 To Oct 2016',
      title: 'Career Break',
      description: 'I stayed at home for 18 months to learn coding (C#, SQL Server, JQuery, Bootstrap, ORM frame work like Entity) etc'
    },
    {
        date: 'Apr 2012 To May 2015',
        title: 'Head of Operations at Wavecrest Technoligies, a fintech',
        description: 'Gained exposure to ITIL, Change Management, Incident management, Agile Methodology etc'
      },

    {
        date: 'Oct 2006 to Mar 2012',
        title: 'VP, Head of EMEA Commercial cards operations, Citibank, London',
        description: 'Started as Senior Business Analyst & promoted to Head of Operations'
      },

    {
        date: 'Mar 2002 To Sep 2006',
        title: 'UAT, Business Analyst',
        description: 'Eserve, a fully owned subsidiary of Citibank, India'
      },
    {
        date: 'Jun2000 To Mar 2002',
        title: 'Software Developer',
        description: 'Java developer in Chennai, India'
      },
    {
        date: 'June 1999 To May 2000',
        title: 'Sales',
        description: 'Sales rep for Standard chartered credit card product in Chennai, India'
      },

    {
        date: 'May 1999',
        title: 'Completed Bsc, Applied Sciences Degree',
        description: 'Bsc, Applied sciences, a three year degree with Science, Maths, Electronics & Chemistry major'
      },
  ];

export const TimelinesOfCV  = () => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <DateLabel>{event.date}</DateLabel>
          <TimelineContent>
            <h2>{event.title} 
              {event.link && (
                <a href={event.link} target="_blank" rel="noopener noreferrer"> (www.getorbital.com)</a>
              )}
            </h2>
            <p>{event.description}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};


