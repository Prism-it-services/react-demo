import {APIGatewayProxyHandler}  from 'aws-lambda';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const handler: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body!);
  const message = body.message;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: completion.choices[0].message.content }),
    };
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error calling OpenAI API' }),
    };
  }
};
