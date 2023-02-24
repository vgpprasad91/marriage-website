import React from 'react';
import ChatBot from "react-simple-chatbot";
import { AddressBot } from './AddressBot';

// Set some properties of the chatbot
const config = {
    floating: true,
    hideSubmitButton: true
};


export const EventBot = () => {

  const steps = [    
    {      
      id: '1',      
      message: 'Welcome to our wedding bot! How can we help you?',      
      trigger: '2',    
    },    
    {      
      id: '2',      
      options: [        
        { value: 1, label: 'Address', trigger: '3' }, 
        { value: 2, label: 'Events', trigger: '5' }, 
        { value: 3, label: 'RSVP', trigger: '8' }, 
        { value: 4, label: 'Registry', trigger: '11' },      
      ],
    },
    {
      id: '3',
      message: `Address: 5 Kodambakkam High Road, Chennai (Madras) 600034 India
      Phone: +91 44 2464 1234
      Email: 
      `,
      trigger: '4',
    },
    {
      id: '4',
      component: <AddressBot />
    },
    {      
      id: '5',      
      options: [        
        { value: 1, label: 'Reception', trigger: '6' }, 
        { value: 2, label: 'Wedding', trigger: '7' },      
      ],
    },
    {
      id: '6',
      message: `Reception is on March 9th between 7.00 PM to 10.00 PM`,
      trigger: '2',
    },
    {
      id: '7',
      message: `Wedding is on March 10th between 6.45 AM to 8.15 AM`,
      trigger: '2',
    },
    {      
      id: '8',      
      options: [        
        { value: 1, label: 'Reception RSVP', trigger: '9' }, 
        { value: 2, label: 'Wedding RSVP', trigger: '10' },      
      ],
    },
    {
      id: '9',
      component: (<div> Please, <a href="https://www.eventcreate.com/e/guru-vaishu-reception" style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>click this link</a> to RSVP for our reception.</div>),
      asMessage: true,
      trigger: '2',
    },
    {
      id: '10',
      component: (<div> Please, <a href="https://www.eventcreate.com/e/guru-vaishu-muhurtham" style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>click this link</a> to RSVP for our wedding muhurtham.</div>),
      asMessage: true,
      trigger: '2',
    },
    {      
      id: '11',      
      options: [        
        { value: 1, label: 'Target', trigger: '12' }, 
        { value: 2, label: 'Zola', trigger: '13' },
        { value: 2, label: 'Amazon', trigger: '14' },      
      ],
    },
    {
      id: '12',
      component: (<div> We are registered at Target for Household essentials. Please, <a href="https://www.target.com/gift-registry/gift/meet-the-venkys" style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>click this link</a> to view our Target Registry</div>),
      asMessage: true,
      trigger: '2',
    },
    {
      id: '13',
      component: (<div> We are registered at Zola for Gift Cards. Please, <a href="https://www.zola.com/registry/guruprasadandvaishnavi" style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>click this link</a> to view our Zola Registry</div>),
      asMessage: true,
      trigger: '2',
    },
    {
      id: '14',
      component: (<div> We are registered at Amazon for all other miscellaneous items. Please, <a href="https://www.amazon.com/wedding/vaishnavi-viswanathan-guru-prasad-venkataraghavan--march-2023/registry/4AIFTJXOC0K9" style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>click this link</a> to view our Amazon Registry</div>),
      asMessage: true,
      trigger: '2',
    },
  ];  

  return (
    <ChatBot steps={steps} {...config} />
  );
};

export default EventBot;
