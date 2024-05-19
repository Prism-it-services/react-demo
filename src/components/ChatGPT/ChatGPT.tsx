import React, { useState } from 'react';
import axios from 'axios';
import {ChatContainer, Form, Input, Button, ResponseContainer } from './styles'

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axios.post('https://amhtutvzoi.execute-api.us-east-1.amazonaws.com/prod/chat', 
      { message: input },
      {
        headers: {
          'x-api-key': 'a4yE9UwOWw9aQGpLizubWXwRxJdse6P1hteqcpwc',
          'Content-Type': 'application/json',
        }
      }
    );
      setResponse(result.data.reply);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <ChatContainer>
        <h1>Welcome to Chat GPT integration demo</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={input} onChange={handleChange} placeholder="Type your message..." />
        <Button type="submit">Send</Button>
      </Form>
      {response && (
        <ResponseContainer>
          <h2>Response:</h2>
          <p>{response}</p>
          </ResponseContainer>
      )}
   </ChatContainer>
  );
};

export default ChatGPT;
