import {useForm, SubmitHandler } from 'react-hook-form'
import React from 'react';
import { Form, Label, Input, Button, InputContainer, ErrorMessage} from './styles'
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../graphqlApolloClient/mutations/createUser'
import { useNavigate } from 'react-router-dom';


type FormValues = {

    firstName : string,
    lastName:string,
    dateOfBirth: string,
    addressLine1: string,
    addressLine2: string,
    city:string,
    country:string,
    postcode: string,
    phoneNumber: string
}


export const  UserForm = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors} } = useForm<FormValues>();
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);

    const onSubmitHandler: SubmitHandler<FormValues> = async(data) => {
        
        try {
            const result = await createUser({
                variables: {
                    input: data
                }
            });
            console.log(result);
            navigate('/graphql-with-apollo-client');

             
        } catch (err) {
            console.error("Error creating user:", err);
        }
    };

    return(
       
 
       
    <Form onSubmit = {handleSubmit(onSubmitHandler)}>
       <Label htmlFor='firstName'>First Name</Label>
       <InputContainer>
       <Input {...register('firstName', {
        required: "Please enter a valid First Name", 
        maxLength: {value: 12, message: 'First Name cannot exceed 12 characters'}})}/>
        {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
        </InputContainer>
        
       <Label htmlFor='lastName'>Last Name</Label>
       <InputContainer>
       <Input {...register('lastName', {required: "Please enter a valid Last Name"})}></Input>
       {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
</InputContainer>
       <Label htmlFor='dateOfBirth'>Date of Birth</Label>
       <Input {...register('dateOfBirth')}></Input>

       <Label htmlFor='addressLine1'>Address Line 1 </Label>
       <Input {...register('addressLine1')}></Input>

       <Label htmlFor='addressLine2'>Address Line 2</Label>
       <Input {...register('addressLine2')}></Input>

       <Label htmlFor='city'>City</Label>
       <Input {...register('city')}></Input>

       <Label htmlFor='country'>Country</Label>
       <Input {...register('country')}></Input>

       <Label htmlFor='postcode'>PostCode</Label>
       <Input {...register('postcode')}></Input>

       <Label htmlFor='phoneNumber'>Phone Number</Label>
       <Input {...register('phoneNumber')}></Input>

<Button type='submit'>Submit</Button>

    </Form>
   
    );

};